"use strict";

require('./FixedLayout.less');

require('./FlexLayout.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'FixedLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      begin: 0,
      end: 0,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'top-bottom',
      unit: 'px'
    };
  },
  __getStyles: function __getStyles() {
    var props = this.props,
        _unit = props.unit,
        _begin = props.begin,
        _end = props.end,
        _header = {},
        _body = {},
        _footer = {};

    if (props.direction == 'top-bottom') {
      _header = {
        height: _begin + _unit
      };
      _body = {
        top: _begin + _unit,
        bottom: _end + _unit
      };
      _footer = {
        height: _end + _unit
      };
    } else {
      _header = {
        width: _begin + _unit
      };
      _body = {
        left: _begin + _unit,
        right: _end + _unit
      };
      _footer = {
        width: _end + _unit
      };
    }

    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  render: function render() {
    var _children = this.props.children;

    if (_children && _children.length === undefined) {
      _children = [_children];
    }

    _children = _children.slice(0);

    var _styles = this.__getStyles(); //h, v


    return React.createElement("div", {
      className: zn.react.classname("zr-basic-layout", "zr-fixed-layout", "direction-" + this.props.direction, this.props.className)
    }, React.createElement("div", {
      className: "layout-header",
      style: _styles.header
    }, _children[0]), React.createElement("div", {
      className: "layout-body",
      style: _styles.body
    }, _children[1]), React.createElement("div", {
      className: "layout-footer",
      style: _styles.footer
    }, _children[2]));
  }
});