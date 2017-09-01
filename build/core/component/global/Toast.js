var React = require('react');
var ReactDOM = require('react-dom');
var Toast = React.createClass({
	displayName: 'Toast',
	componentDidMount: function componentDidMount() {
		window.setTimeout(this.out, this.props.delay || 1500);
	},
	out: function out() {
		var _dom = ReactDOM.findDOMNode(this);
		_dom.classList.add('toast-out');
		_dom.addEventListener("animationend", function () {
			_dom.parentNode.parentNode.removeChild(_dom.parentNode);
		}, false);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname('zr-toast toast-in', this.props.type) },
			this.props.content
		);
	}
});

module.exports = zn.toast = zn.Class({
	static: true,
	methods: {
		init: function init() {
			this._dom = zn.dom.createRootElement("div", { class: "zr-toast-container" });
		},
		open: function open(type, content, delay) {
			var _dom = document.createElement('div');
			ReactDOM.render(React.createElement(Toast, { type: type, content: content, delay: delay }), _dom);
			this._dom.appendChild(_dom);
		},
		success: function success(content, delay) {
			return this.open('success', content, delay);
		},
		warning: function warning(content, delay) {
			return this.open('warning', content, delay);
		},
		error: function error(content, delay) {
			return this.open('danger', content, delay);
		},
		info: function info(content, delay) {
			return this.open('info', content, delay);
		}
	}
});