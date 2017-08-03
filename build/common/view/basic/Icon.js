var React = require('react');

module.exports = React.createClass({
	displayName: 'Icon',
	getDefaultProps: function getDefaultProps() {
		return {
			className: '',
			spin: false,
			icon: 'fa-code'
		};
	},
	__onClick: function __onClick() {
		this.props.onClick && this.props.onClick(this);
	},
	render: function render() {
		return React.createElement('i', { onClick: this.__onClick, className: zn.react.classname('rt-icon fa', this.props.className, this.props.icon), 'data-spin': this.props.spin });
	}
});