"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'Card',
  __rightRender: function __rightRender() {
    switch (zn.type(this.props.rightRender)) {
      case 'function':
        return this.props.rightRender();

      case 'object':
        return this.props.rightRender;
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-card', this.props.className),
      style: zn.extend({
        width: this.props.width
      }, this.props.style)
    }, React.createElement("div", {
      className: "card-header"
    }, this.props.icon && React.createElement("i", {
      className: 'icon fa ' + this.props.icon
    }), this.props.title && React.createElement("span", {
      className: "title"
    }, this.props.title), this.props.rightRender && React.createElement("div", {
      className: "right-content"
    }, this.__rightRender())), React.createElement("div", {
      className: "card-body"
    }, this.props.children));
  }
});