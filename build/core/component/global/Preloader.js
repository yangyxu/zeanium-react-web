"use strict";

require('./Preloader.less');

var React = require('react');

var Preloader = React.createClass({
  displayName: 'Preloader',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '正在加载中...'
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-preloader', this.props.className)
    }, React.createElement("i", {
      className: "fa fa-spinner zr-self-loading"
    }), React.createElement("span", null, this.props.content || this.props.title));
  }
});
module.exports = zn.preloader = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-preloader-container"
      });
    },
    open: function open(argv, overlay) {
      zn.modal.open(React.createElement(Preloader, argv), {
        className: overlay ? 'overlay' : ''
      });
    },
    close: function close() {
      zn.modal.close();
    }
  }
});