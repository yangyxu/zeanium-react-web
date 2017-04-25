'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName: 'Input',
	getDefaultProps: function getDefaultProps() {
		return {
			attrs: {},
			className: '',
			disabled: false,
			readonly: null
		};
	},
	getValue: function getValue() {
		var _value = ReactDOM.findDOMNode(this).value;
		if (this.props.attrs && this.props.attrs.type == 'number') {
			_value = +_value;
		}

		return _value;
	},
	setValue: function setValue(value) {
		return ReactDOM.findDOMNode(this).value = value, this;
	},
	__onChange: function __onChange(event) {
		this.props.onChange && this.props.onChange(event.target.value, this, event);
	},
	__onKeyUp: function __onKeyUp(event) {
		if (event.nativeEvent.keyCode == 13) {
			this.props.onEnter && this.props.onEnter(event, this);
		}
		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	render: function render() {
		return React.createElement('input', _extends({ className: "rt-input " + this.props.className,
			required: this.props.required,
			style: this.props.style
		}, this.props.attrs, {
			name: this.props.name,
			type: this.props.attrs.type || 'text',
			defaultValue: this.props.value,
			placeholder: this.props.placeholder,
			disabled: this.props.disabled,
			readOnly: this.props.readonly,
			onChange: this.__onChange,
			onKeyUp: this.__onKeyUp }));
	}
});