"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'LoadingView',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: '加载中...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(zn.react.DataLoader, this.props);
    }
  }
});