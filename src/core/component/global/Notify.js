var React = require('react');
var ReactDOM = require('react-dom');

var TYPE_ICONS = {
	heart: 'fa-heart',
	secondary: 'fa-comment',
	success: 'fa-check',
	warning: 'fa-exclamation',
	error: 'fa-times',
	info: 'fa-info'
}

var Notify = React.createClass({
	displayName:'Notify',
	componentDidMount: function (){
		window.setTimeout(this.out, this.props.delay || 1500);
	},
	out: function (){
		var _dom = ReactDOM.findDOMNode(this);
		_dom.classList.add('notification-out');
		_dom.addEventListener("animationend", function (){
			_dom.parentNode.parentNode.removeChild(_dom.parentNode);
		}, false);
	},
	render: function(){
		return (
			<div className={zn.react.classname('zr-notify notify-in', this.props.type)} >
				<div className="icon">
					<i className={"fa " + TYPE_ICONS[this.props.type||'info']} />
				</div>
				<div className="content">
					{this.props.content}
				</div>
				<i className="close fa fa-times" onClick={this.out} />
			</div>
		);
	}
});

module.exports = zn.notify = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: 'zr-notify-container' });
		},
		open: function (type, content, delay){
			var _dom = document.createElement('div');
			ReactDOM.render(<Notify type={type} content={content} delay={delay} />, _dom);
			this._dom.appendChild(_dom);
		},
		success: function (content, delay){
			return this.open('success', content, delay);
		},
		warning: function (content, delay){
			return this.open('warning', content, delay);
		},
		error: function (content, delay){
			return this.open('error', content, delay);
		},
		info: function (content, delay){
			return this.open('info', content, delay);
		},
		heart: function (content, delay){
			return this.open('heart', content, delay);
		},
		secondary: function (content, delay){
			return this.open('secondary', content, delay);
		}
	}
});
