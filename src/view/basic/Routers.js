var React = require('react');
var ErrorPage = require('../page/ErrorPage');

var Router = React.createClass({
	displayName: 'Router',
	getInitialState: function (){
		return {

		};
	},
	componentDidMount: function (){

	},
	pop: function (){

	},
	push: function (){

	},
	render: function () {
		return (
			<div className={"rt-router "}>
				{this.props.children}
			</div>
		);
	}
});

var Routers = React.createClass({
	displayName:'Routers',
	getDefaultProps: function (){
		return {
			animate: false
		}
	},
	getInitialState:function(){
		return {
			view: null,
			argv: null
		}
	},
	componentDidMount:function(){
		var _self = this,
			_view = null,
			_routers = this.props.routers || {},
			_mapping = RouterMapping.create(_routers),
			_router = new RestfulRouter();

		this._historys = [];
		Session.setHome(this.props.home);
		Session.setGlobalSearch(this.props.search);

		_router.error(function (req){
			if(_self.props.home && !req.path){
				Session.jump(_self.props.home);
			}else {
				_self.setState({
					view: ErrorPage,
					argv: {
						request: req
					}
				});
			}
		});
		_mapping.each(function (path, mapping){
			(function (path, mapping) {
				_router.get(path, function(req){
					mapping.request = req;
					_view = mapping.mappings.index || mapping.view;
					_self._historys.push(mapping);
					if(_self.state.view === _view){
						if(mapping.mapping=='{*}'){
							return;
						}
						_self.setState({
							view: _view,
							argv: mapping
						});
					} else {
						_self.setState({
							view: _view,
							argv: mapping
						});
					}
				});
			})(path, mapping);
		});

		_router.fireHashChange();
		this._router = _router;
	},
	__onChange: function (){

	},
	render: function(){
		return (
			<div className={zn.react.classname("rt-routers", this.props.className)} >
				<Router ref='r1' />
				<Router ref='r2' />
				<Router ref='r3' />
			</div>
		);
	}
});

Routers.Router = Router;

module.exports = Routers;
