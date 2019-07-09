require('./Icon.less');
var React = require('react');

module.exports = React.createClass({
	displayName:'Icon',
	getDefaultProps: function (){
		return {
			className: '',
			spin: false,
			icon: 'fa-code'
		}
	},
	__onClick: function (event){
		this.props.onClick && this.props.onClick(this, event);
	},
	render:function(){
		return (
			<i data-tooltip={this.props.tooltip} onClick={this.__onClick} className={zn.react.classname('zr-icon fa', this.props.className, this.props.icon)} data-spin={this.props.spin} >{this.props.text}</i>
		);
	}
});
