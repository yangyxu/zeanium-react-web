var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.init.js');
var _extend = function (target){
    var _target = target||{};
    for (var i = 1, _len = arguments.length; i < _len; i++) {
        var _args = arguments[i];
        for (var _key in _args) {
            if (_args.hasOwnProperty(_key)) {
                _target[_key] = _args[_key];
            }
        }
    }

    return _target;
}

module.exports = _extend({
    context: path.join(process.cwd(), 'src'),
    entry: {
        "index": ['_entry.js']
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js'
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        // Disable handling of unknown requires
        unknownContextRegExp: /$^/,
        unknownContextCritical: false,

        // Disable handling of requires with a single expression
        //exprContextRegExp: /$^/,
        exprContextCritical: false,

        // Warn for every expression in require
        //wrappedContextCritical: true,
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react'],
                    plugins:[
                        "transform-remove-strict-mode"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
			{
				test:/\.less$/,
				loader:ExtractTextPlugin.extract('style-loader','raw-loader!less-loader')
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].css")
    ]
}, config);
