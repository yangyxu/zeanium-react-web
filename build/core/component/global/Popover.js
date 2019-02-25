"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

require('./Popover.less');

var React = require('react');

var ReactDOM = require('react-dom');

var Popover = React.createClass({
  displayName: 'Popover',
  getDefaultProps: function getDefaultProps() {
    return {
      hiddenHeight: 5,
      closeable: false,
      popoverWidth: null,
      popoverHeight: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);

    if (this.props.event) {
      this._eventType = this.props.event.type || this.props.event;
      window.addEventListener(this._eventType, this.__onWindowClick, false);

      this._dom.addEventListener(this._eventType, function (event) {//event.stopPropagation();
      }, false);

      setTimeout(function () {
        this.fixPosition(this.props.target);
      }.bind(this), 0);
    }

    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __onWindowClick: function __onWindowClick() {
    this.close('Popover:window.click');
  },
  close: function close(tag) {
    zn.info('Popover.close:', tag);

    if (this._dom) {
      window.removeEventListener(this._eventType, this.__onWindowClick, false);

      if (this._dom.parentNode) {
        this._dom.parentNode.style = '';

        this._dom.parentNode.removeChild(this._dom);
      }

      this._dom = null;
      this._eventType = null;
    }
  },
  fixPosition: function fixPosition(target) {
    var _popover = this._dom;

    var _t = zn.dom.getPosition(target),
        _popoverWidth = this.props.popoverWidth || _t.width,
        _popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
        _left = null,
        _top = null,
        _arrowClassNames = [];

    if (_popoverWidth == '100%') {
      _popoverWidth = _t.width;
    }

    if (_popoverHeight < this.props.hiddenHeight) {
      this.props.onHidden && this.props.onHidden();
      return;
    }

    if (_t.x + _popoverWidth > document.body.scrollWidth) {
      _arrowClassNames.push('zr-arrow-placement-right');

      _left = document.body.scrollWidth - _t.x - _t.width;
      _popover.style.right = _left + 'px';
      _popover.parentNode.style.right = '0px';
    } else {
      _left = _t.x;

      _arrowClassNames.push('zr-arrow-placement-left');

      _popover.style.left = _left + 'px';
    }

    if (_t.y + _popoverHeight > document.body.scrollHeight) {
      _arrowClassNames.push('zr-arrow-direction-bottom');

      _top = _t.height + 10;
      _popover.style.bottom = _top + 'px';
      _popover.parentNode.style.bottom = '0px';
    } else {
      _top = _t.y + _t.height + 10;

      _arrowClassNames.push('zr-arrow-direction-top');

      _popover.style.top = _top + 'px';
    }

    if (this.props.popoverWidth) {
      _popover.style.width = _popoverWidth + 'px';
    }

    if (this.props.popoverHeight) {
      if (_popover.offsetHeight != _popoverHeight) {
        _popover.style.height = _popoverHeight + 'px';
      }
    }

    _popover.style.visibility = 'visible';

    _arrowClassNames.push('zn-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  render: function render() {
    var _style = {};

    if (this.props.height) {
      _style.height = 'auto';
    } else {
      _style.maxHeight = '240px';
    }

    return React.createElement("div", {
      className: zn.react.classname('zr-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName, this.props.className),
      style: zn.extend(this.props.style, _style)
    }, this.props.closeable && React.createElement("i", {
      className: "popover-close fa fa-close zr-hover-self-loading"
    }), this.props.content);
  }
});
module.exports = zn.popover = zn.Class({
  static: true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        class: "zr-popover-container"
      });
      zn.react.global.onJump(function () {
        this.close();
      }, this);
    },
    render: function render(content, options) {
      if (options && options.reset) {
        this.close('zn.popover:render');
      }

      return this._popover = ReactDOM.render(React.createElement(Popover, _extends({}, options, {
        content: content
      })), this._dom), this._popover;
    },
    close: function close(tag) {
      if (this._popover) {
        this._popover.close(tag);

        this._popover = null;
      }

      return this;
    }
  }
});