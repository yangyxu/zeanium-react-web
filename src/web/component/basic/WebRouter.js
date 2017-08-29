var __toString = Object.prototype.toString;
var React = require('react');
var WebRouter = React.createClass({
	displayName:'WebRouter',
	getInitialState:function(){
		return {
			view: null,
			argv: null
		}
	},
	componentDidMount:function(){
		zn.react.session.setHome(this.props.home).setGlobalSearch(this.props.search);
		this._handler = new zn.react.RestfulHandler();
		this.__initMapping(this.props.routers);
	},
	__parseRouters: function (routers){
		var _path = null,
			_value = null,
			_index = routers['/'];
		for(var key in routers){
			_value = routers[key];
			_path = (routers.$PREFIX||'') + key;
			if(key=='/'){
                _path = _path + '{*}';
                this._mappings[_path] = {
					index: _value,
                    mapping: '{*}',
                    path: _path
                };
                continue;
            }

			switch (__toString.call(_value)) {
				case '[object Function]':
					this._mappings[_path] = {
						index: _index,
						mapping: key,
						path: _path,
						view: _value
					};
					break;
				case '[object Object]':
					_value.$PREFIX = _path;
					this.__parseRouters(_value);
					break;
			}
		}
	},
	__initMapping: function (routers){
		var _self = this,
			_view = null,
			_mapping = null;
		this._historys = [];
		this._mappings = routers;
		this.__parseRouters(routers);
		this._handler.error(function (request){
			if(_self.props.home && !request.path){
				zn.react.session.jump(_self.props.home);
			}else {
				_self.setState({
					view: zn.react.ErrorPage,
					argv: {
						request: request
					}
				});
			}
		});

		var _mappings = this._mappings;
		for(var path in _mappings){
			_mapping = _mappings[path];
			(function (path, _mapping){
				_self._handler.get(path, function (request){
					_view = _mapping.index || _mapping.view;
					if(_mapping.index){
						_mapping = _mappings[request.path];
					}
					if(_self.state.view === _mapping.view){
						if(_mapping.mapping == '{*}'){
							return false;
						}
						return false;
					}
					_mapping.request = request;
					_self._historys.push(_mapping);
					_self.setState({
						view: _view,
						argv: _mapping
					});
				});
			})(path, _mapping);
		}

		this._handler.fireHashChange();
	},
	render: function(){
		return (
			<div className={zn.react.classname("rt-url-router", this.props.className)} >
				{this.state.view && <this.state.view {...this.state.argv} />}
			</div>
		);
	}
});

module.exports = WebRouter;
