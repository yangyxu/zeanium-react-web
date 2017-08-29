var React = require('react');
var ReactDOM = require('react-dom');
var Toast = React.createClass({
	displayName:'Toast',
	componentDidMount: function (){
		window.setTimeout(this.out, this.props.delay || 1500);
	},
	out: function (){
		var _dom = ReactDOM.findDOMNode(this);
		_dom.classList.add('toast-out');
		_dom.addEventListener("animationend", function (){
			_dom.parentNode.parentNode.removeChild(_dom.parentNode);
		}, false);
	},
	render: function(){
		return (
			<div className={zn.react.classname('rt-toast toast-in', this.props.type)} >
				{this.props.content}
			</div>
		);
	}
});

module.exports = zn.toast = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: "rt-toast-container" });
		},
		open: function (type, content, delay){
			var _dom = document.createElement('div');
			ReactDOM.render(<Toast type={type} content={content} delay={delay} />, _dom);
			this._dom.appendChild(_dom);
		},
		success: function (content, delay){
			return this.open('success', content, delay);
		},
		warning: function (content, delay){
			return this.open('warning', content, delay);
		},
		error: function (content, delay){
			return this.open('danger', content, delay);
		},
		info: function (content, delay){
			return this.open('info', content, delay);
		}
	}
});
