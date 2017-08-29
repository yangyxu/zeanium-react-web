['basic','list'].forEach(function (path, index){
    path = './component/' + path + '/index.js';
    zn.overwrite(zn.react, require(path));
});

module.exports = zn.react;
