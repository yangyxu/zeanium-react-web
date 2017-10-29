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
	__onClick: function __onClick(event) {
		this.props.onClick && this.props.onClick(this, event);
	},
	render: function render() {
		return React.createElement('i', { 'data-tooltip': this.props.tooltip, onClick: this.__onClick, className: zn.react.classname('zr-icon fa', this.props.className, this.props.icon), 'data-spin': this.props.spin });
	}
});