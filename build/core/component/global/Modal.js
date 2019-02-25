"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./Modal.less');

var ReactDOM = require('react-dom');

var Animate = require('../basic/Animate.js');

module.exports = zn.modal = zn.Class({
  static: true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        class: "zr-modal"
      });
      zn.dom.on(this._dom, 'click', function (event) {
        if (this.config.isMode && event.target.classList.contains('zr-modal')) {
          this.close();
        }
      }.bind(this), false);
      zn.react.global.onJump(function () {
        zn.modal.close();
      }, this);
    },
    active: function active(value) {
      if (value) {
        if (this.child && this.child.in) {
          this.child.in();
        }

        this.animate('modal-in', 'modal-out');
      } else {
        if (this.child && this.child.out) {
          this.child.out();
        } else {
          this.__out();
        }

        this.animate('modal-out', 'modal-in');
      }

      return this;
    },
    animate: function animate(_in, _out) {
      this._dom.classList.add(_in);

      this._dom.classList.remove(_out);

      return this;
    },
    middle: function middle(content, config) {
      var _config = zn.extend({
        closeable: true
      }, config);

      return this.open(React.createElement("div", {
        className: "modal-middle",
        style: zn.extend({
          visibility: 'hidden'
        }, _config.style)
      }, content, _config.closeable && React.createElement("i", {
        onClick: this.close.bind(this),
        className: "close fa fa-times zr-hover-self-loading"
      })), zn.extend({
        showOverlay: true,
        contentStyles: function contentStyles(dom, modal) {
          if (zn.dom.getPosition(dom).height > zn.dom.getPosition(document.body).height) {
            return {
              "visibility": "visible",
              "top": "0px",
              "margin-top": '50px',
              "margin-bottom": "50px"
            };
          }

          if (_config.style && _config.style.top) {
            return {
              "visibility": "visible",
              "top": _config.style.top + 'px',
              "margin-top": '50px',
              "margin-bottom": "50px"
            };
          }

          return {
            "visibility": "visible",
            "margin-top": -(dom.offsetHeight / 2) + 'px'
          };
        }
      }, _config));
    },
    bottom: function bottom(content, config) {
      return this.open(content, zn.extend({
        className: "modal-bottom",
        isMode: true
      }, config));
    },
    top: function top(content, config) {
      return this.open(content, zn.extend({
        className: "modal-top",
        isMode: true
      }, config));
    },
    left: function left(content, config) {
      return this.open(content, zn.extend({
        className: "modal-left",
        isMode: true
      }, config));
    },
    right: function right(content, config) {
      return this.open(content, zn.extend({
        className: "modal-right",
        isMode: true
      }, config));
    },
    full: function full(content, config) {
      return this.open(React.createElement("div", {
        className: "modal-full"
      }, content, React.createElement("i", {
        onClick: this.close.bind(this),
        className: "close fa fa-times zr-hover-self-loading"
      })), config);
    },
    open: function open(content, config) {
      this.config = zn.extend({
        isMode: false,
        showOverlay: true
      }, config);

      if (this.config.in && this.config.out) {
        this.child = ReactDOM.render(React.createElement(Animate, _extends({}, config, {
          onOut: this.__out
        }), content), this._dom);
      } else {
        this.child = ReactDOM.render(content, this._dom);
      }

      this.content = this._dom.firstChild;

      if (this.content.classList.contains('zr-animate')) {
        this.content = this.content.firstChild;
      }

      if (this.config.className) {
        this.content.classList.add(this.config.className);
      }

      if (this.config.showOverlay) {
        this.setClassName('overlay');
      }

      setTimeout(function () {
        if (this.config && this.config.contentStyles) {
          this.setContentStyles(this.config.contentStyles);
        }
      }.bind(this), 0);
      return this.active(true), this;
    },
    close: function close(outClass) {
      if (this.config) {
        this.config.out = this.config.out || outClass;
        this.active(false);
      }

      return this;
    },
    setClassName: function setClassName(className) {
      if (className) {
        this._dom.className = zn.react.classname('zr-modal', className);
      }

      return this;
    },
    setContentStyles: function setContentStyles(styles) {
      if (typeof styles == 'function') {
        styles = styles(this.content, this);
      }

      if (styles) {
        zn.dom.setStyles(this.content, styles);
      }

      return this;
    },
    __out: function __out() {
      if (this.config.removeSelf !== false) {
        this._dom.innerHTML = '';
      }

      this.config = null;
      this.child = null;
      this.content = null;
    }
  }
});