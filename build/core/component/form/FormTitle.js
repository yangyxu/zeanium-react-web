"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'FormTitle',
  getValue: function getValue() {
    return null;
  },
  setValue: function setValue(value) {
    return this;
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-form-title', this.props.className),
      style: this.props.style
    }, React.createElement("span", {
      className: "zf-title"
    }, this.props.title));
  }
});