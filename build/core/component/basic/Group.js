var React = require('react');

module.exports = React.createClass({
	displayName: 'Group',
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-group", this.props.className) },
			React.createElement(
				'span',
				{ className: 'title' },
				this.props.title
			),
			React.createElement(
				'div',
				{ className: 'inner-content' },
				this.props.children
			)
		);
	}
});