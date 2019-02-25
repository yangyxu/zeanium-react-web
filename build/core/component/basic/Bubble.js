"use strict";

require('./Bubble.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'Bubble',
  getInitialState: function getInitialState() {
    return {
      active: this.props.active || false,
      direction: 'top'
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: "zr-bubble"
    });
  }
});