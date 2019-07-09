"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./Icons.less');

var React = require('react');

var Icon = require('./Icon');

module.exports = React.createClass({
  displayName: 'Icons',
  __onClick: function __onClick(props, icon, event) {
    this.props.onClick && this.props.onClick(props, icon, this, event);
  },
  render: function render() {
    var _data = this.props.data || this.props.items || [];

    return React.createElement("div", {
      className: zn.react.classname('zr-icons', this.props.className)
    }, _data.map(function (item, index) {
      var _this = this;

      item.index = index;
      return React.createElement(Icon, _extends({
        key: index,
        onClick: function onClick(icon, event) {
          return _this.__onClick(item, icon, event);
        }
      }, item));
    }.bind(this)));
  }
});