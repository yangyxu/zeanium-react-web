var React = require('react');
module.exports = React.createClass({
	displayName: 'TabFilter',
	getDefaultProps: function getDefaultProps() {
		return {};
	},
	getInitialState: function getInitialState() {
		return {};
	},
	componentDidMount: function componentDidMount() {},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'rt-tab-filter' },
			React.createElement('div', { className: 'keys' }),
			React.createElement('div', { className: 'value' })
		);
	}
});