var React = require('react');

module.exports = React.createClass({
	displayName: 'List',
	getDefaultProps: function getDefaultProps() {
		return {};
	},
	render: function render() {
		s;
		return React.createElement(zn.react.RTList, this.props.data);
	}
});