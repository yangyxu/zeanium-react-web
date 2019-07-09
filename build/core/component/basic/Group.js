"use strict";

require('./Group.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'Group',
  getInitialState: function getInitialState() {
    return {
      active: true
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      "data-active": this.state.active,
      style: this.props.style,
      className: zn.react.classname("zr-group", this.props.className)
    }, React.createElement("div", {
      className: "g-header",
      on: true
    }, React.createElement("span", {
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      },
      className: "title"
    }, this.props.title)), React.createElement("div", {
      className: "g-inner-content"
    }, this.props.children));
  }
});