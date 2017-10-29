var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

module.exports = React.createClass({
	displayName: 'Title',
	render: function render() {
		return React.createElement(
			'div',
			_extends({ className: zn.react.classname("zr-title", this.props.className, this.props.type) }, this.props.attrs),
			this.props.value
		);
	}
});