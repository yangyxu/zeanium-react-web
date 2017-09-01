var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName: 'Watcher',
	getDefaultProps: function getDefaultProps() {
		return {};
	},
	render: function render() {

		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-watcher", this.props.className) },
			React.createElement('div', { className: 'frame-face' }),
			React.createElement(
				'ul',
				null,
				new Array(48).map(function () {})
			)
		);
	}
});