"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: 'Textarea',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: ''
    };
  },
  getValue: function getValue() {
    //placeholder="ex.&#13;&#10;test1@test.com&#13;&#10;test2@test.com&#13;&#10;..."
    var _value = ReactDOM.findDOMNode(this).value; //console.log(_value.replace(/\u000A/g, '\n'));

    return _value;
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = value, this;
  },
  __onChange: function __onChange(event) {
    this.props.onChange && this.props.onChange(event.target.value, this, event);
  },
  render: function render() {
    return React.createElement("textarea", _extends({
      className: "zr-textarea " + this.props.className,
      required: this.props.required,
      placeholder: this.props.placeholder
    }, this.props.attrs, {
      defaultValue: this.props.value,
      readonly: this.props.readonly,
      disabled: this.props.disabled || this.props.readonly,
      onChange: this.__onChange,
      name: this.props.name
    }));
  }
});