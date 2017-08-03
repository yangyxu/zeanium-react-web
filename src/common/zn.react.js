module.exports = zn.react = {
    isAndroid: function (){
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    },
    isIOS: function (){
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
    checkTime: function (beginTime, endTime){
        var _begin = (new Date(beginTime.replace(/-/g, '/'))).getTime(),
			_end = (new Date(endTime.replace(/-/g, '/'))).getTime(),
			_now = (new Date()).getTime();
		if(_begin < _now && _end > _now){
			return 0;
		}

		if(_begin>_now){
			return -1;
		}else {
			return 1;
		}
    },
    classname: function (){
        var _items = [];
        zn.each(Array.prototype.slice.call(arguments), function (item, index){
            if(item){
                switch (zn.type(item)) {
                    case 'string':
                        _items.push(item);
                        break;
                    case 'function':
                        _items.push(item.call(null)||'');
                        break;
                }
            }
        });

        return _items.join(' ');
    },
    extendPath: function (path, views){
        var _views = {};
        for(var key in views){
            _views[path+key] = views[key];
        }

        return _views;
    },
    loadPaths: function (paths, handler, ifDeep){
        var _exports = {},
            _temp = null;
        for(var key in paths) {
            _temp = handler&&handler(paths[key]);
            _exports[key] =_temp;
            if(ifDeep && zn.is(_temp, 'object')){
                for(var _tkey in _temp){
                    _exports[_tkey] = _temp[_tkey];
                }
            }
        }

        return _exports;
    },
    exports: function (config, handler){

    },
    isMobile: function (){
        if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
			try{
				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
					return true;
				}else if(/iPad/i.test(navigator.userAgent)){
                    return true;
				}else{
					return true;
				}
			}catch(e){
                return false;
			}
		}else {
			return false;
		}
    }
};
