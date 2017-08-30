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
	__onClick: function (){
		this.props.onClick && this.props.onClick(this);
	},
	render:function(){
		return (
			<i onClick={this.__onClick} className={zn.react.classname('zr-icon fa', this.props.className, this.props.icon)} data-spin={this.props.spin} />
		);
	}
});
