"use strict";

require('./Modals.less');

var ReactDOM = require('react-dom');

var Animate = require('../basic/Animate.js');

module.exports = zn.modals = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-modals"
      });
      this._modals = [];
    },
    active: function active(value) {
      if (this._modals.length) {
        this.animate('modal-in', 'modal-out');
      } else {
        this.animate('modal-out', 'modal-in');
      }

      return this;
    },
    animate: function animate(_in, _out) {
      this._dom.classList.add(_in);

      this._dom.classList.remove(_out);

      return this;
    },
    createModal: function createModal(content, config) {
      var _config = zn.extend({}, config);

      var _dom = document.createElement('div');

      var _modal = ReactDOM.render(React.createElement(Notify, {
        type: type,
        content: content,
        delay: delay
      }), _dom);

      this._dom.appendChild(_dom);

      this._modals.push(_modal);
    },
    close: function close(outClass) {
      return this;
    }
  }
});