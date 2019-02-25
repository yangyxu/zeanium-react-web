"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./RichSelector.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'RichInput',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || '',
      active: this.props.active || false
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
    var _result = this.props.textRender && this.props.textRender(this.state.text);

    if (!_result) {
      _result = this.state.text || this.props.placeholder;
    }

    return _result;
  },
  __onSelectorChange: function __onSelectorChange(value, text) {
    this.setState({
      value: value,
      text: text,
      active: false
    });
    this.props.onChange && this.props.onChange(value, text);
  },
  __selectorRender: function __selectorRender() {
    if (!this.props.selector) {
      return zn.toast.error('selector is null.'), false;
    }

    return React.createElement(this.props.selector, _extends({}, this.props, {
      style: this.props.selectorStyle,
      value: this.state.value,
      onChange: this.__onSelectorChange
    }));
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: zn.react.classname("zr-rich-selector", this.props.className),
      "data-active": this.state.active
    }, React.createElement("div", {
      className: "display-view",
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      }
    }, React.createElement("span", {
      className: "text"
    }, this.__textRender()), React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })), React.createElement("div", {
      className: "rich-selector zr-arrow zr-arrow-color-white zr-arrow-placement-left zr-arrow-direction-top zn-animate-scale-up"
    }, this.__selectorRender()));
  }
});