module.exports = zn.react.session = zn.Class({
    static: true,
    methods: {
        relativeURL: function (path, argv){
            var _basePath = this._basePath || '',
                _argv = zn.querystring.stringify(argv);
            if(path.indexOf(_basePath)==-1){
                path = _basePath + path;
            }
            return '#' + path + (_argv?('?'+_argv):'');
        },
        relativeJump: function (path, search, overwrite){
            var _basePath = this._basePath || '';
            if(path.indexOf(_basePath)==-1){
                path = _basePath + path;
            }

            return this.jump(path, search, overwrite);
        },
        jump: function (path, search, overwrite){
            var _search = {},
                _searchAry = [],
                _value = null;
            zn.extend(_search, search);
            if(!overwrite){
                zn.extend(_search, this._globalSearch);
            }
            if(!search){
                this._search = {};
            }

            this._search = zn.extend(_search, this._search);

            for(var key in _search){
                _value = _search[key];
                if(typeof _value != 'string'){
                    _value = JSON.stringify(_value);
                }
                _searchAry.push(key + '=' + _value);
            }

            zn.react.global.fireJump();

            if(_searchAry.length){
                location.hash = path + '?' + _searchAry.join('&');
            }else {
                location.hash = path;
            }

            return this;
    	},
        back: function (){
            return window.history.back(), this;
        },
        setGlobalSearch: function (value){
            return this._globalSearch = value, this;
        },
        setHome: function (value){
            return this._home = value, this;
        },
        setMain: function (value){
            return this._main = value, this;
        },
        setBasePath: function (value){
            return this._basePath = value, this;
        },
        fixPath: function (path){
            return (this._basePath || '') + (path || '');
        },
        isPath: function (value){
            return window.location.hash.split('?')[0] === '#' + this.fixPath(value);
        },
        containPath: function (value){
            return window.location.hash.split('?')[0].indexOf('#' + this.fixPath(value)) !== -1;
        },
        doHome: function (){
            if(this._home){
                location.hash = this._home;
            }

            return this;
        },
        doMain: function (data){
            if(this._main){
                this.clear().set(data);
                location.hash = this._main;
            }

            return this;
        },
        getPath: function (){
            return location.hash.slice(1);
        },
        clear: function (){
            return this.getEngine().clear(), this;
        },
        reset: function (){
            return this.clear(), this;
        },
        setEngine: function (engine){
            return this._engine = engine, this;
        },
        getEngine: function (){
            var _engine = this._engine || 'localStorage';   // Cookie, sessionStorage, localStorage
            if(_engine&&typeof _engine == 'string'){
                _engine = window[_engine];
            }

            return _engine;
        },
        setKey: function (key){
            return this._key = key, this;
        },
        getKey: function (){
            return this._key || 'WEB_LOGIN_SESSION';
        },
        setKeyValue: function (key, value, timeout){
            var _value = (typeof value=='object') ? JSON.stringify(value) : value;
            return this.getEngine().setItem(key, _value, timeout), this;
        },
        getKeyValue: function (key){
            return this.getEngine().getItem(key);
        },
        jsonKeyValue: function (value){
            var _value = this.getKeyValue(value);
            if(_value){
                try {
                    _value = JSON.parse(_value);
                }catch(e){
                    _value = {};
                    console.log(e.stack);
                }
            }

            return _value;
        },
        set: function (value, timeout) {
            return this.setKeyValue(this.getKey(), value, timeout);
        },
        get: function () {
            return this.getKeyValue(this.getKey());
        },
        json: function (name){
            var _value = this.get();
            if(_value){
                try {
                    _value = JSON.parse(_value);
                }catch(e){
                    _value = null;
                    console.log(e.stack);
                }
            }

            return _value;
        },
        validate: function (){
            if(this.json()){
                return true;
            }else {
                return this.doHome(), false;
            }
        }
    }
});
