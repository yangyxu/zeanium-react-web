"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./DropdownSelector.less');

var React = require('react');

var Dropdown = require('../basic/Dropdown');

module.exports = React.createClass({
  displayName: 'DropdownSelector',
  getDefaultProps: function getDefaultProps() {
    return {
      eventType: 'click'
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
      text: text
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    return this.state.text || this.props.placeholder;
  },
  __onSelectorChange: function __onSelectorChange(value) {
    //this.setValue(value, item[rtlist.props.textKey]);
    zn.popover.close('DropdownSelector:selector.onchange');
  },
  __popoverRender: function __popoverRender() {
    if (!this.props.selector) {
      return zn.toast.error('selector is null.'), false;
    }

    var _props = this.props.props || this.props;

    return React.createElement(this.props.selector, _extends({}, _props, {
      className: zn.react.classname("zr-dropdown-selector-selector-view", _props.selectorClassName || _props.className),
      style: _props.selectorStyle || _props.style,
      value: this.state.value,
      onChange: this.__onSelectorChange
    }));
  },
  render: function render() {
    return React.createElement(Dropdown, _extends({}, this.props, {
      popoverRender: this.__popoverRender,
      popoverWidth: '100%',
      popoverHeight: 200,
      className: zn.react.classname("zr-dropdown-selector", this.props.className)
    }), React.createElement("div", {
      className: "zr-dropdown-selector-text-view"
    }, React.createElement("span", {
      className: "text"
    }, this.__textRender()), React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })));
  }
});