var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./Modal');

var Popup = React.createClass({
	displayName:'Popup',
	getInitialState: function(){
		return {
			active: this.props.active || false,
			title: null,
			content: null
		}
	},
	close: function (){
		this.setState({
			active: false,
			title: null,
			content: null
		}, function (){
			this.state.onClose && this.state.onClose();
		}.bind(this))
	},
	render: function(){
		return (
			<Modal active={this.state.active} top={this.state.top||100} width={this.state.width}>
				<div className={zn.react.classname('rt-popup', this.state.className)} >
					<i className="popup-close rt-hover-self-loading fa fa-remove" onClick={this.close} />
					{this.state.title && <div className="popup-title">{this.state.title}</div>}
					{this.state.content && <div className="popup-content">{this.state.content}</div>}
				</div>
			</Modal>
		);
	}
});

Popup.popup = (function (){
	var _dom = document.createElement("div");
	_dom.className = "rt-modal-container";
	document.body.appendChild(_dom);
	return ReactDOM.render(<Popup />, _dom);
})();

Popup.dialog = function (states) {
	return Popup.popup.setState(zn.extend({ active: true }, states)), this;
}

Popup.confirm = function (argv){
	Alert.show(zn.extend({
		width: 360,
		title: '警告'
	}, argv));
}

Popup.message = function (message){
	Toast[message.type](message.content);
}

Popup.close = function (){
	return Popup.popup.close(), this;
}

module.exports = window.Popup = Popup;
