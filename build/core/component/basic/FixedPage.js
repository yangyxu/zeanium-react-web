"use strict";

require('./FixedPage.less');

var React = require('react');

var ButtonGroup = require('./ButtonGroup');

var FixedLayout = require('../layout/FixedLayout');

module.exports = React.createClass({
  displayName: 'FixedPage',
  getDefaultProps: function getDefaultProps() {
    return {
      icon: 'fa-arrow-left',
      height: 42,
      end: 42,
      flex: false,
      canBack: true
    };
  },
  __onBack: function __onBack() {
    if (typeof this.props.onBack == 'string') {
      return zn.react.session.jump(this.props.onBack), false;
    }

    var _result = this.props.onBack && this.props.onBack();

    if (_result !== false) {
      if (zn.react.isMobile()) {
        zn.react.router.back();
      } else {
        window.history.back();
      }
    }
  },
  render: function render() {
    var _begin = this.props.height;

    if (zn.react.isIOS()) {
      _begin += 10;
    }

    return React.createElement(FixedLayout, {
      className: zn.react.classname('zr-fixed-page', zn.react.isMobile() ? 'page-mobile' : 'page-pc', this.props.className),
      direction: "top-bottom",
      begin: _begin,
      end: this.props.footerView ? this.props.end : 0,
      hStyle: this.props.hStyle,
      bStyle: this.props.bStyle
    }, React.createElement("div", {
      className: "page-header",
      style: {
        lineHeight: '30px'
      }
    }, this.props.canBack && React.createElement("i", {
      className: "back fa " + this.props.icon,
      onClick: this.__onBack
    }), React.createElement("div", {
      className: "title"
    }, this.props.title), React.createElement("div", {
      className: "btns"
    }, React.createElement(ButtonGroup, {
      className: "zr-flex",
      items: this.props.toolbarItems,
      onClick: this.props.onToolbarClick
    }))), React.createElement("div", {
      className: "page-body"
    }, this.props.children), this.props.end && this.props.footerView && React.createElement("div", {
      className: "page-footer"
    }, this.props.footerView));
  }
});