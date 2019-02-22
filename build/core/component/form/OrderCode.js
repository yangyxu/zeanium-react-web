"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var Dropdown = require('../basic/Dropdown');

module.exports = React.createClass({
  displayName: 'OrderCode',
  getDefaultProps: function getDefaultProps() {
    return {
      eventType: 'click',
      editable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || ''
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text || value
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    return this.state.text || this.props.placeholder;
  },
  __onListItemClick: function __onListItemClick(value, rtlistitem, rtlist, item) {
    this.setValue(value, item[rtlist.props.textKey]);
    zn.popover.close('Menu:item.click');
  },
  __onInputChange: function __onInputChange(event) {
    this.state.value = event.target.value;
    this.forceUpdate();
    zn.popover.close('Menu:item.click');
  },
  __popoverRender: function __popoverRender() {
    return null;
  },
  render: function render() {
    return React.createElement(Dropdown, _extends({}, this.props, {
      popoverRender: this.__popoverRender,
      popoverWidth: "100%",
      className: zn.react.classname("zr-order-code", this.props.className)
    }), React.createElement("div", {
      className: "code-view"
    }, this.props.editable ? React.createElement("input", {
      value: this.state.value,
      onChange: this.__onInputChange
    }) : React.createElement("span", {
      className: "text"
    }, this.__textRender()), React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })));
  }
});