"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var Alert = React.createClass({
  displayName: 'Alert',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null,
      onClick: null,
      buttons: [{
        text: '确认'
      }]
    };
  },
  __onClick: function __onClick(item, index) {
    zn.modal.close();

    var _result = this.props.onClick && this.props.onClick(item, index, this);

    _result = item.onClick && item.onClick(item, index, this);
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-alert', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return React.createElement("div", {
        key: index,
        className: "alert-btn",
        onClick: function onClick() {
          return _this.__onClick(item, index);
        }
      }, item.text);
    }.bind(this))));
  }
});

zn.alert = function (content, title, callback, props) {
  zn.modal.open(React.createElement(Alert, _extends({
    content: content,
    title: title,
    onClick: callback
  }, props)), {
    showOverlay: true,
    contentStyles: function contentStyles(dom, modal) {
      return {
        "margin-top": -(dom.offsetHeight / 2) + 'px',
        "margin-left": -(dom.offsetWidth / 2) + 'px'
      };
    }
  });
};

zn.confirm = function (content, title, confirm, cancel, options) {
  var _options = zn.extend({
    cancel: '取消',
    confirm: '确定'
  }, options);

  zn.modal.open(React.createElement(Alert, {
    content: content,
    title: title,
    buttons: [{
      text: _options.cancel,
      onClick: cancel
    }, {
      text: _options.confirm,
      onClick: confirm
    }]
  }), {
    showOverlay: true,
    contentStyles: function contentStyles(dom, modal) {
      return {
        "margin-top": -(dom.offsetHeight / 2) + 'px',
        "margin-left": -(dom.offsetWidth / 2) + 'px'
      };
    }
  });
};

zn.prompt = function (title, confirm, cancel) {
  var _input = React.createElement("input", {
    className: "alert-input",
    type: "text"
  });

  zn.modal.open(React.createElement(Alert, {
    content: _input,
    title: title,
    buttons: [{
      text: '取消',
      onClick: cancel
    }, {
      text: '确定',
      onClick: function onClick(item, index, alert) {
        confirm && confirm(alert.props.content, item, index, alert);
      }
    }]
  }), {
    showOverlay: true,
    contentStyles: function contentStyles(dom, modal) {
      return {
        "margin-top": -(dom.offsetHeight / 2) + 'px',
        "margin-left": -(dom.offsetWidth / 2) + 'px'
      };
    }
  });
};

var Dialog = React.createClass({
  displayName: 'Dialog',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname('zr-dialog', this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && React.createElement("div", {
      className: "dialog-title"
    }, this.props.title)), React.createElement("div", {
      className: "dialog-body"
    }, this.props.content));
  }
});

zn.dialog = function (argv) {
  return zn.modal.middle(React.createElement(Dialog, argv));
};

zn.dialog.form = function (argv) {
  return zn.dialog({
    title: argv.title || '',
    content: React.createElement(zn.react.Form, argv)
  });
};