"use strict";

var React = require('react');

var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: 'ExpressDetail',
  render: function render() {
    var _data = this.props.data.slice(0).sort(function (m, n) {
      return new Date(m.ftime).getTime() - new Date(n.ftime).getTime();
    });

    return React.createElement("div", {
      className: zn.react.classname("zr-express-detail", this.props.className)
    }, _data.map(function (item, index) {
      return React.createElement("ul", {
        className: "detail-item"
      }, React.createElement("li", {
        className: "time"
      }, item.ftime), React.createElement("li", {
        className: "dot"
      }), React.createElement("li", {
        className: "context"
      }, item.context));
    }));
  }
});