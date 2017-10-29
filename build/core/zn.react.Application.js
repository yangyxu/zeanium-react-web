module.exports = zn.react.Application = zn.Class({
    statics: {
        create: function create(argv) {
            var _props = {},
                _methods = {
                init: function init(argv) {
                    this.super(argv);
                    this.sets(argv);
                }
            };
            zn.each(argv, function (value, key) {
                if (zn.type(value) == 'function' && !value.displayName) {
                    _methods[key] = value;
                } else {
                    _props[key] = value;
                }
            });
            var _Class = zn.Class(this, {
                methods: _methods,
                properties: _props
            });

            return new _Class(_props);
        }
    },
    properties: {
        container: 'container',
        absolute: true,
        home: null,
        main: null,
        host: window.location.origin,
        router: null,
        plugins: []
    },
    methods: {
        init: function init(argv) {
            this.sets(argv);
            this.__initArgv(argv);
            var _value = this.onInit && this.onInit.call(this, this.gets());
            if (_value !== false) {
                this.update(_value);
            }
        },
        __initArgv: function __initArgv(argv) {
            var _routers = {},
                _plugin = null,
                _path = this.get('path'),
                _self = this;

            this.get('plugins') && this.get('plugins').forEach(function (plugin) {
                if (zn.is(plugin, 'string')) {
                    plugin = _self.onLoading(plugin);
                }
                if (_path && _routers[_path]) {
                    zn.extend(_routers[_path], plugin);
                } else {
                    zn.extend(_routers, plugin);
                }
            });

            if (argv.routers) {
                var __routers = zn.deepEachObject(argv.routers, this.onLoading.bind(this));
                if (_path) {
                    zn.extend(_routers[_path], __routers);
                } else {
                    zn.extend(_routers, __routers);
                }
            }

            console.log(_routers);

            this._routers = _routers;
            zn.react.session.setHome(this.get('home')).setMain(this.get('main')).setBasePath(this.get('path'));
            zn.http.setHost(this.get('host'), this.get('port'));
        },
        onLoading: function onLoading(value) {
            return value;
        },
        __getRenderView: function __getRenderView() {
            return this.render && this.render.call(this, this.gets());
        },
        update: function update(view) {
            var _Router = this.get('router');
            if (!_Router) {
                _Router = zn.react.isMobile() ? zn.react.WapRouter : zn.react.WebRouter;
            }

            if (!_Router) {
                return alert('只适合手机版本打开!'), false;
            }

            var _view = view || this.__getRenderView() || React.createElement(_Router, { home: this.get('home'), routers: this._routers }),
                _container = this.get('container');
            _container = zn.type(_container) == 'string' ? document.getElementById(_container) : _container;
            if (this.get('absolute')) {
                _container.style.position = 'absolute';
                _container.style.width = '100%';
                _container.style.height = '100%';
            }
            if (zn.react.isMobile()) {
                _container.classList.add('zr-mobile');
            }
            require('react-dom').render(_view, _container);
        }
    }
});