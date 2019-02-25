"use strict";

//require('./ActivityLayout.less');
//require('./BasicLayout.less');
var React = require('react');

module.exports = React.createClass({
  displayName: 'ActivityLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      begin: 0,
      end: 0,
      barWidth: 3,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'left-right',
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

    if (props.direction == 'left-right') {
      _body.width = props.barWidth + _unit;

      if (_begin) {
        _header.width = _begin + _unit;
        _body.left = _begin + _unit;
        _footer.left = _begin + props.barWidth + _unit;
      }

      if (_end) {
        _header.right = _end + props.barWidth + _unit;
        _body.right = _end + _unit;
        _footer.width = _end + _unit;
      }
    } else {
      _body.height = props.barWidth + _unit;

      if (_begin) {
        _header.height = _begin + _unit;
        _body.top = _begin + _unit;
        _footer.top = _begin + props.barWidth + _unit;
      }

      if (_end) {
        _header.bottom = _end + props.barWidth + _unit;
        _body.bottom = _end + _unit;
        _footer.height = _end + _unit;
      }
    }

    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  __bodyRender: function __bodyRender() {
    var _render = this.props.bodyRender && this.props.bodyRender(this);

    if (_render) {
      return _render;
    } else {
      return React.createElement("div", {
        className: "activity-bar"
      });
    }
  },
  render: function render() {
    var _children = this.props.children;

    if (_children && _children.length === undefined) {
      _children = [_children];
    }

    _children = _children.slice(0);

    var _styles = this.__getStyles(); //h, v


    return React.createElement("div", {
      className: zn.react.classname("zr-basic-layout", "zr-activity-layout", "direction-" + this.props.direction, this.props.className)
    }, React.createElement("div", {
      className: "layout-header",
      style: _styles.header
    }, _children[0]), !!this.props.barWidth && React.createElement("div", {
      className: "layout-body",
      style: _styles.body
    }, this.__bodyRender()), React.createElement("div", {
      className: "layout-footer",
      style: _styles.footer
    }, _children[1]));
  }
});