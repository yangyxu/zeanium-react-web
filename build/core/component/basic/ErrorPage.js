"use strict";

require('./ErrorPage.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'ErrorPage',
  render: function render() {
    return React.createElement("div", {
      className: "zr-error-page"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("h3", {
      className: "title"
    }, "ERROR: 404 Not Found"), React.createElement("div", {
      className: "detail"
    }, "URI: ", React.createElement("a", {
      href: '#' + this.props.request.path
    }, this.props.request.path))));
  }
});