module.exports = zn.react.Application = zn.Class({
    statics: {
        create: function (argv){
            var _props = {},
                _methods = {
                    init: function (argv){
                        this.super(argv);
                        this.sets(argv);
                    }
                };
            zn.each(argv, function (value, key){
                if(zn.type(value)=='function'){
                    _methods[key] = value;
                }else {
                    _props[key] = value;
                }
            });
            var _Class = zn.Class(this, {
                properties: _props,
                methods: _methods
            });
            return new _Class(_props);
        }
    },
    properties: {
        container: 'container',
        home: null,
        main: null,
        host: window.location.origin,
        plugins: []
    },
    methods: {
        init: function (argv){
            this.sets(argv);
            this.__initArgv(argv);
            var _value = this.onInit && this.onInit.call(this, this.gets());
            if(_value!==false){
                this.update(_value);
            }
        },
        __initArgv: function (argv){
            var _routers = {},
                _plugin = null,
                _self = this;

            this.get('plugins') && this.get('plugins').forEach(function (plugin){
                if(zn.is(plugin, 'string')){
                    plugin = _self.onLoading(plugin);
                }
                zn.extend(_routers, plugin);
            });

            if(argv.routers){
                var __routers = zn.deepEachObject(argv.routers, this.onLoading.bind(this));
                if(this.get('path')){
                    zn.extend(_routers[this.get('path')], __routers);
                }else {
                    zn.extend(_routers, __routers);
                }
            }

            this._routers = _routers;
            zn.react.session.setHome(this.get('home')).setMain(this.get('main')).setBasePath(this.get('path'));
            zn.http.setHost(this.get('host'), this.get('port'));
        },
        onLoading: function (value){
            return value;
        },
        __getRenderView: function (){
            return this.render && this.render.call(this, this.gets());
        },
        update: function (view){
            var _Router = zn.react.isMobile()?zn.react.WapRouter:zn.react.WebRouter;
            if(!_Router){
                return alert('只适合手机版本打开!'), false;
            }

            var _view = view || this.__getRenderView() || <_Router home={this.get('home')} routers={this._routers} />,
                _container = this.get('container');
            _container = zn.type(_container)=='string'?document.getElementById(_container):_container;
            _container.style.position = 'absolute';
            _container.style.width = '100%';
            _container.style.height = '100%';
            if(zn.react.isMobile()){
                _container.classList.add('rt-mobile');
            }
            require('react-dom').render(_view, _container);
        }
    }
});
