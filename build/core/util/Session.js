var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = zn.react.session = zn.Class({
    static: true,
    methods: {
        fixRelativePath: function fixRelativePath(path) {
            var _basePath = this._basePath || '';
            if (path.indexOf(_basePath) == -1) {
                path = _basePath + path;
            }

            return path;
        },
        relativeURL: function relativeURL(path, argv) {
            var _argv = zn.querystring.stringify(argv);
            return '#' + this.fixRelativePath(path) + (_argv ? '?' + _argv : '');
        },
        relativeJump: function relativeJump(path, search, overwrite) {
            return this.jump(this.fixRelativePath(path), search, overwrite);
        },
        jump: function jump(path, search, overwrite) {
            var _search = zn.extend({}, search);
            if (!overwrite) {
                zn.overwrite(_search, this._globalSearch);
            }
            if (!search) {
                this._search = {};
            }
            this._search = zn.overwrite(_search, this._search);

            zn.react.global.fireJump();
            var _querystring = zn.querystring.stringify(this._search);

            location.hash = path + (_querystring ? '?' + _querystring : '');

            return this;
        },
        back: function back() {
            return window.history.back(), this;
        },
        setGlobalSearch: function setGlobalSearch(value) {
            return this._globalSearch = value, this;
        },
        setHome: function setHome(value) {
            return this._home = value, this;
        },
        setMain: function setMain(value) {
            return this._main = value, this;
        },
        setBasePath: function setBasePath(value) {
            return this._basePath = value, this;
        },
        fixPath: function fixPath(path) {
            return (this._basePath || '') + (path || '');
        },
        isPath: function isPath(value) {
            return window.location.hash.split('?')[0] === '#' + this.fixPath(value);
        },
        containPath: function containPath(value) {
            return window.location.hash.split('?')[0].indexOf('#' + this.fixPath(value)) !== -1;
        },
        doHome: function doHome() {
            if (this._home) {
                location.hash = this._home;
            }

            return this;
        },
        doMain: function doMain(data) {
            if (this._main) {
                if (data) {
                    this.clear().set(data);
                }
                location.hash = this.fixRelativePath(this._main);
            }

            return this;
        },
        getPath: function getPath() {
            return location.hash.slice(1);
        },
        clear: function clear() {
            return this.getEngine().clear(), this;
        },
        reset: function reset() {
            return this.clear(), this;
        },
        setEngine: function setEngine(engine) {
            return this._engine = engine, this;
        },
        getEngine: function getEngine() {
            var _engine = this._engine || 'sessionStorage'; // Cookie, sessionStorage, localStorage
            if (_engine && typeof _engine == 'string') {
                _engine = window[_engine];
            }

            return _engine;
        },
        setKey: function setKey(key) {
            return this._key = key, this;
        },
        getKey: function getKey() {
            return this._key || 'WEB_LOGIN_SESSION';
        },
        setKeyValue: function setKeyValue(key, value, timeout) {
            var _value = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' ? JSON.stringify(value) : value;
            return this.getEngine().setItem(key, _value, timeout), this;
        },
        getKeyValue: function getKeyValue(key) {
            return this.getEngine().getItem(key);
        },
        removeKeyValue: function removeKeyValue(key) {
            return this.getEngine().removeItem(key), this;
        },
        jsonKeyValue: function jsonKeyValue(value) {
            var _value = this.getKeyValue(value);
            if (_value) {
                try {
                    _value = JSON.parse(_value);
                } catch (e) {
                    _value = {};
                    console.log(e.stack);
                }
            }

            return _value;
        },
        set: function set(value, timeout) {
            return this.setKeyValue(this.getKey(), value, timeout);
        },
        get: function get() {
            return this.getKeyValue(this.getKey());
        },
        json: function json(name) {
            var _value = this.get();
            if (_value) {
                try {
                    _value = JSON.parse(_value);
                } catch (e) {
                    _value = null;
                    console.log(e.stack);
                }
            }

            return _value;
        },
        validate: function validate() {
            if (this.json()) {
                return true;
            } else {
                return this.doHome(), false;
            }
        }
    }
});