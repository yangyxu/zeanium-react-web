"use strict";

require('./Notify.less');

var React = require('react');

var ReactDOM = require('react-dom');

var TYPE_ICONS = {
  heart: 'fa-heart',
  secondary: 'fa-comment',
  success: 'fa-check',
  warning: 'fa-exclamation',
  error: 'fa-times',
  info: 'fa-info'
};
var Notify = React.createClass({
  displayName: 'Notify',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);
    }, false);
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-notify notify-in', this.props.type)
    }, React.createElement("div", {
      className: "icon"
    }, React.createElement("i", {
      className: "fa " + TYPE_ICONS[this.props.type || 'info']
    })), React.createElement("div", {
      className: "content"
    }, this.props.content), React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = zn.notify = zn.Class({
  static: true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        class: 'zr-notify-container'
      });
    },
    open: function open(type, content, delay) {
      var _dom = document.createElement('div');

      ReactDOM.render(React.createElement(Notify, {
        type: type,
        content: content,
        delay: delay
      }), _dom);

      this._dom.appendChild(_dom);
    },
    success: function success(content, delay) {
      return this.open('success', content, delay);
    },
    warning: function warning(content, delay) {
      return this.open('warning', content, delay);
    },
    error: function error(content, delay) {
      return this.open('error', content, delay);
    },
    info: function info(content, delay) {
      return this.open('info', content, delay);
    },
    heart: function heart(content, delay) {
      return this.open('heart', content, delay);
    },
    secondary: function secondary(content, delay) {
      return this.open('secondary', content, delay);
    }
  }
});