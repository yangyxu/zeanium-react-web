var React = require('react');
var ReactDOM = require('react-dom');

var Route = React.createClass({
	displayName: 'Route',
	getInitialState: function getInitialState() {
		return {
			request: null,
			view: null,
			className: null,
			active: false,
			animating: false,
			onIn: function onIn() {},
			onOut: function onOut() {}
		};
	},
	componentDidMount: function componentDidMount() {
		var dom = ReactDOM.findDOMNode(this);
		dom.addEventListener("animationend", this.__onAnimationEnd, false);
		dom.addEventListener("oAnimationEnd", this.__onAnimationEnd, false);
		dom.addEventListener("MSAnimationEnd", this.__onAnimationEnd, false);
		dom.addEventListener("webkitAnimationEnd", this.__onAnimationEnd, false);
	},
	__onAnimationEnd: function __onAnimationEnd() {
		this.setState({
			className: '',
			animating: false
		}, function () {
			if (this.state.active) {
				this.state.onIn && this.state.onIn(this);
			} else {
				this.state.onOut && this.state.onOut(this);
			}
		}.bind(this));
	},
	renderRequest: function renderRequest(request, active) {
		return this.setState({
			request: request,
			view: request.view,
			active: active
		}), this;
	},
	in: function _in(animation, onIn) {
		this.state.animating = true;
		this.state.active = true;
		return this.setState({
			className: animation,
			onIn: onIn
		}), this;
	},
	out: function out(animation, onOut) {
		this.state.animating = true;
		this.state.active = false;
		return this.setState({
			className: animation,
			onOut: onOut
		}), this;
	},
	render: function render() {
		var _classname = zn.react.classname("zr-route zn-page", this.state.className, this.state.active || this.state.animating ? 'zn-page-current' : '');
		return React.createElement(
			'div',
			{ className: _classname },
			this.state.view && React.createElement(this.state.view, { request: this.state.request })
		);
	}
});

var Router = React.createClass({
	displayName: 'Router',
	componentDidMount: function componentDidMount() {
		this._historys = [];
		this.currentRequest = null;
		this.currentPage = null;
		zn.react.session.setHome(this.props.home).setGlobalSearch(this.props.search);
		this.initRouter();
		zn.react.router = this;
	},
	initRouter: function initRouter() {
		var _self = this,
		    _routers = this.props.routers || {},
		    _router = new zn.react.RestfulHandler();

		Object.keys(_routers).forEach(function (path) {
			(function (path) {
				_router.get(path, function (request) {
					request.view = _routers[path];
					_self.push(request);
				});
			})(path);
		});

		_router.error(function (request) {
			if (_self.props.home && !request.path) {
				zn.react.session.jump(_self.props.home);
			} else {}
		});

		_router.fireHashChange();
		this._router = _router;
	},
	back: function back() {
		/*
  if(!this._historys.length){
  	return;
  }*/
		this.backUrl = window.location.hash;
		window.history.back();

		return this;
	},
	pop: function pop() {
		this._historys.pop();
		this.currentRequest = this._historys[this._historys.length - 1];
		return this.__doRender('zn-animate-scale-up', 'zn-animate-move-to-right zn-page-ontop'), this;
	},
	push: function push(request) {
		if (this.backUrl) {
			this.pop();
		} else {
			this.currentRequest = request;
			this._historys.push(request);
			this.__doRender('zn-animate-move-from-right zn-page-ontop', 'zn-animate-scale-down');
		}

		return this;
	},
	__doRender: function __doRender(_in, _out) {
		if (!this._historys.length || !this.currentRequest) {
			return false;
		}

		var _page = this.getUnusedPage();

		if (this.currentPage) {
			this.currentPage.out(_out);
		} else {
			this.currentPage = _page;
			this.currentPage.renderRequest(this.currentRequest, true);
			this.backUrl = null;
			return false;
		}

		if (_page && this.currentRequest) {
			_page.renderRequest(this.currentRequest).in(_in, function (page) {
				if (this.currentPage) {
					this.currentPage.setState({
						animating: false
					});
				}
				this.backUrl = null;
				this.currentPage = page;
			}.bind(this));
		} else {
			setTimeout(this.__doRender, 1000);
		}
	},
	getUnusedPage: function getUnusedPage() {
		var _ref = null;
		for (var key in this.refs) {
			_ref = this.refs[key];
			if (!_ref.state.active && !_ref.state.animating) {
				return this.refs[key];
			}
		}
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-router zn-perspective", this.props.className) },
			React.createElement(Route, { ref: 'page0' }),
			React.createElement(Route, { ref: 'page1' })
		);
	}
});

module.exports = Router;