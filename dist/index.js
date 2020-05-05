/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(162);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'RTItem',
  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      disabled: false,
      toggle: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked
    };
  },
  __onClick: function __onClick(event) {
    if (this.props.disabled) {
      return;
    }

    if (this.props.toggle) {
      this.setState({
        checked: !this.state.checked
      });
    }

    event.stopPropagation(); //event.preventDefault();

    this.props.onClick && this.props.onClick(this, event);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: zn.react.classname('zr-item', this.props.className),
      style: this.props.style,
      "data-checked": this.props.checked,
      "data-disabled": this.props.disabled,
      "data-float": this.props["float"]
    }, this.props.attrs, {
      onClick: this.__onClick
    }), this.props.children);
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(164);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

module.exports = React.createClass({
  displayName: 'RTList',
  getDefaultProps: function getDefaultProps() {
    return {
      active: true,
      textKey: 'text',
      valueKey: 'value',
      fireIndex: 0
    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false,
      data: []
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.data && this.props.data.on) {
      var _self = this;

      this.props.data.on('before', function () {
        if (_self.props.showLoading) {
          zn.preloader.open({
            title: '加载中...'
          });
        }
      }).on('complete', function () {
        if (_self.props.showLoading) {
          zn.preloader.close();
        }
      });
    }

    this._dataSource = zn.store.dataSource(this.props.items || this.props.data, {
      autoLoad: this.props.active,
      onExec: function () {
        var _result = this.props.onLoading && this.props.onLoading();

        if (_result !== false && this.isMounted()) {
          this.setState({
            loading: true
          });
        }
      }.bind(this),
      onSuccess: function (data) {
        this.__onDataLoaded(this.__dataHandler(data));

        this.props.onData && this.props.onData(data);
      }.bind(this)
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items && !!this._dataSource) {
      this._dataSource.reset(nextProps.items);
    }

    if (nextProps.data !== this.props.data && !!this._dataSource) {
      this._dataSource.reset(nextProps.data);
    }

    if (nextProps.active && nextProps.active != this.props.active) {
      this.refresh();
    }
  },
  __dataHandler: function __dataHandler(data) {
    if (this.props.dataHandler) {
      return this.props.dataHandler(data);
    }

    return data.result || data;
  },
  __onDataLoaded: function __onDataLoaded(data) {
    if (!this.isMounted()) {
      return false;
    }

    if (data.length == undefined) {
      var temp = [];

      for (var key in data) {
        temp.push(data[key]);
      }

      data = temp;
    }

    this.state.data = data;
    this.setState({
      data: data,
      loading: false
    }, function () {
      if (this.props.fireIndex != undefined) {//this.fireClick(this.props.fireIndex);
      }

      this.props.onLoaded && this.props.onLoaded(data, this);
    }.bind(this));
  },
  request: function request(data, argv) {
    this._dataSource.reset(data, argv);
  },
  filter: function filter(handler) {
    var _data = [];
    this.state.data.forEach(function (item, index, array) {
      if (handler(item, index, array) !== false) {
        _data.push(item);
      }
    });
    this.setState({
      data: _data
    });
  },
  refresh: function refresh() {
    this._dataSource.refresh();
  },
  fireClick: function fireClick(index) {
    if (!this.state.data.length || index === undefined) {
      return;
    }

    this.__onItemClick(this.state.data[index], index);
  },
  __onItemClick: function __onItemClick(item, index) {
    item.onClick && item.onClick(item, index);
    this.props.onClick && this.props.onClick(item, index);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    var _content = null,
        _temp = {};

    if (_typeof(item) == 'object') {
      item._index = index;
    } else {
      _temp[this.props.textKey] = _temp[this.props.valueKey] = item;
      this.state.data[index] = item = _temp;
    }

    _temp = this.props.onEachItem && this.props.onEachItem(item, this);

    if (_temp === false) {
      return null;
    }

    if (this.props.itemRender) {
      _content = this.props.itemRender(item, index, this);
    }

    if (!_content) {
      _content = /*#__PURE__*/React.createElement(RTItem, _extends({}, item, {
        onClick: function onClick(self, event) {
          return _this.__onItemClick(item, index, self, event);
        }
      }), /*#__PURE__*/React.createElement("span", null, this.getItemText(item)));
    }

    return _content;
  },
  getItemText: function getItemText(item) {
    return item ? item[this.props.textKey] : null;
  },
  getItemValue: function getItemValue() {
    return item ? item[this.props.valueKey] : null;
  },
  render: function render() {
    if (!this.props.active) {
      return null;
    }

    if (this.state.loading && this.props.showLoading) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-spinner zr-self-loading"
      }));
    }

    if (!this.state.data.length) {
      var _view = this.props.emptyView;

      if (!_view) {
        _view = /*#__PURE__*/React.createElement("div", {
          className: "zr-empty-view"
        }, /*#__PURE__*/React.createElement("span", null, "\u6682\u65E0\u6570\u636E"));
      }

      return null;
    }

    return /*#__PURE__*/React.createElement("div", _extends({}, this.props.attrs, {
      style: this.props.style,
      className: zn.react.classname('zr-list', this.props.className)
    }), this.state.data && this.state.data.map && this.state.data.map(this.__itemRender));
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Dropdown',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      eventType: 'click'
    };
  },
  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
  },
  getParent: function getParent(target) {
    if (target.classList.contains('zr-dropdown')) {
      return target;
    } else {
      return this.getParent(target.parentNode);
    }
  },
  __eventHandler: function __eventHandler(event) {
    if (this.props.disabled) {
      return;
    }

    var _target = this.getParent(event.target);

    if (_target) {
      event.stopPropagation();
      zn.popover.render(this.__popoverContentRender(), zn.extend({
        event: event,
        reset: true,
        target: _target,
        height: this.props.height
      }, this.props));
    }
  },
  __popoverContentRender: function __popoverContentRender() {
    var _content = this._children[1];

    if (!_content) {
      _content = this.props.popoverRender && this.props.popoverRender();
    }

    return _content;
  },
  render: function render() {
    var _children = this.props.children;

    if (_children && _children.length === undefined) {
      _children = [_children];
    }

    if (!_children) {
      return null;
    }

    _children = _children.slice(0);
    this._children = _children;
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-dropdown", this.props.className),
      style: this.props.style
    }, _children[0]);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Animate',
  getDefaultProps: function getDefaultProps() {
    return {
      "in": 'zn-animate-move-from-right',
      out: 'zn-animate-move-to-right',
      onTop: true,
      className: null,
      onIn: function onIn() {},
      onOut: function onOut() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      active: false,
      animating: false,
      animation: ''
    };
  },
  componentDidMount: function componentDidMount() {
    var dom = ReactDOM.findDOMNode(this);
    dom.addEventListener("animationend", this.__onAnimationEnd, false);
    dom.addEventListener("oAnimationEnd", this.__onAnimationEnd, false);
    dom.addEventListener("MSAnimationEnd", this.__onAnimationEnd, false);
    dom.addEventListener("webkitAnimationEnd", this.__onAnimationEnd, false);
  },
  __onAnimationEnd: function __onAnimationEnd() {
    this.setState({
      animation: '',
      animating: false
    }, function () {
      if (this.state.active) {
        this.props.onIn && this.props.onIn(this);
      } else {
        this.props.onOut && this.props.onOut(this);
      }
    }.bind(this));
  },
  "in": function _in(animation, onIn) {
    this.state.animating = true;
    this.state.active = true;
    return this.setState({
      animation: animation || this.props["in"]
    }), this;
  },
  out: function out(animation, onOut) {
    this.state.animating = true;
    this.state.active = false;
    return this.setState({
      animation: animation || this.props.out
    }), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-animate", this.state.active || this.state.animating ? 'active' : '', !!this.props.onTop && this.state.animation ? 'ontop' : '', this.props.className, this.state.animation)
    }, this.props.children);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(175);

__webpack_require__(176);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

var RTList = __webpack_require__(3);

var ListView = React.createClass({
  displayName: 'ListView',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      currIndex: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.state.value = nextProps.value;
      this.forceUpdate();
    }
  },
  __getItemValue: function __getItemValue(item) {
    var _itemValue = item[this.props.valueKey];

    if (_itemValue === undefined) {
      _itemValue = item[this.props.textKey];
    }

    return _itemValue;
  },
  __valueHandler: function __valueHandler(item, index) {
    if (!item) {
      return;
    }

    var _value = this.state.value,
        _itemValue = this.__getItemValue(item);

    switch (this.props.selectMode) {
      case 'radio':
        _value = _itemValue;
        break;

      case 'checkbox':
        _value = _value || ',';
        _itemValue = _itemValue + ',';

        if (_value.indexOf(_itemValue) == -1) {
          _value = _value + _itemValue;
        } else {
          _value = _value.replace(new RegExp(_itemValue, 'gi'), '');
        }

        break;

      case 'none':
        break;
    }

    return _value;
  },
  isCurrent: function isCurrent(item, index) {
    var _value = this.state.value,
        _itemValue = this.__getItemValue(item);

    switch (this.props.selectMode) {
      case 'radio':
        if (_itemValue == undefined) {
          if (this.state.currIndex == index) {
            return true;
          }

          return false;
        }

        if (_value == _itemValue) {
          return true;
        }

        break;

      case 'checkbox':
        _value = _value || ',';

        if (_value.indexOf(_itemValue) !== -1) {
          return true;
        }

        break;

      case 'none':
        break;
    }

    return false;
  },
  __onItemClick: function __onItemClick(item, index, rtitem, event) {
    this.setState({
      value: this.__valueHandler(item, index),
      currIndex: index
    }, function () {
      var _obj = {
        value: this.state.value,
        self: this,
        rtitem: rtitem,
        item: item,
        index: index,
        event: event
      };
      this.props.onClick && this.props.onClick(_obj);
      this.props.onItemClick && this.props.onItemClick(this.state.value, rtitem, this, item, event);
    }.bind(this));
  },
  __itemRender: function __itemRender(item, index, rtlist) {
    var _this = this;

    var _content = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, !!item.icon && /*#__PURE__*/React.createElement("i", {
      className: 'fa ' + item.icon,
      style: {
        padding: 3
      }
    }), /*#__PURE__*/React.createElement("span", null, item[this.props.textKey]));

    if (this.props.itemRender) {
      _content = this.props.itemRender(item, index, this);
    }

    return /*#__PURE__*/React.createElement(RTItem, _extends({
      disabled: this.props.disabled,
      "float": this.props["float"]
    }, item, {
      className: zn.react.classname(this.props.itemClassName, item.className),
      checked: this.isCurrent(item, index),
      onClick: function onClick(self, event) {
        return _this.__onItemClick(item, index, self, event);
      }
    }), _content);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, callback) {
    this.setState({
      value: value
    }, callback);
  },
  __onEachItem: function __onEachItem(item, rtlist) {
    if (this.props.filterValue) {
      if (item[this.props.textKey].indexOf(this.props.filterValue) == -1) {
        return false;
      }
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      onEachItem: this.__onEachItem,
      className: zn.react.classname('zr-list-view', this.props.className, this.props.noborder ? 'noborder' : ''),
      itemRender: this.__itemRender
    }));
  }
});
ListView.defaultProps = {
  className: 'zr-list-view-default',
  itemClassName: '',
  "float": 'none',
  filterValue: null,
  disabled: false,
  value: null,
  textKey: 'text',
  valueKey: 'value',
  noborder: false,
  selectMode: 'radio' //radio, checkbox, none

};
module.exports = ListView;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(228);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

module.exports = React.createClass({
  displayName: 'Checkbox',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      checked: false,
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.checked != this.props.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  },
  __onClick: function __onClick(rtitem, event) {
    this.state.checked = !this.state.checked;
    this.setState({
      checked: this.state.checked
    });
    this.props.onChecked && this.props.onChecked(this.state.checked, this);
    this.props.onClick && this.props.onClick(this, rtitem, event);
    this.props.onChange && this.props.onChange(event, this.state.checked);
  },
  __renderContent: function __renderContent() {
    var _content = this.props.contentRender && this.props.contentRender(this);

    if (!_content) {
      _content = /*#__PURE__*/React.createElement("span", null, this.props.text || '');
    }

    return _content;
  },
  getValue: function getValue() {
    return this.state.checked;
  },
  setValue: function setValue(value) {
    this.setState({
      checked: value
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, _extends({}, this.props, {
      className: 'zr-checkbox ' + this.props.className,
      checked: this.state.checked,
      onClick: this.__onClick
    }), /*#__PURE__*/React.createElement("input", {
      name: this.props.name,
      type: "checkbox",
      defaultChecked: this.state.checked
    }), /*#__PURE__*/React.createElement("span", {
      className: "mark"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon fa fa-check"
    })), this.__renderContent());
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(163);

var React = __webpack_require__(0);

var Button = __webpack_require__(18);

var RTList = __webpack_require__(3);

module.exports = React.createClass({
  displayName: 'ButtonGroup',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      disabled: false
    };
  },
  __onItemClick: function __onItemClick(props, btn, event) {
    this.props.onClick && this.props.onClick(props, btn, this, event);
  },
  __itemRender: function __itemRender(item, index, rtlist) {
    return /*#__PURE__*/React.createElement(Button, _extends({
      disabled: this.props.disabled,
      "float": this.props["float"],
      onClick: this.__onItemClick
    }, item));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-button-group ' + this.props.className,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'DownPuller',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      maxHeight: 60,
      onDownPull: function onDownPull(self) {
        setTimeout(function () {
          return self.reset();
        }, 1000);
      },
      onUpPull: function onUpPull(self) {
        setTimeout(function () {
          return self.reset();
        }, 1000);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      vector: {
        x: 0,
        y: 0
      },
      step: 1,
      yValue: 0,
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {
    this._touching = false;

    this.__bindEvents();
  },
  __bindEvents: function __bindEvents() {
    var _container = ReactDOM.findDOMNode(this);

    this._container = _container; //touch event

    _container.addEventListener('touchstart', this.__startHandler, false);

    _container.addEventListener('touchmove', this.__moveHandler, false);

    _container.addEventListener("touchend", this.__endHandler, false);

    document.addEventListener('touchmove', function (event) {
      event.stopPropagation();
    }, false); //mouse event

    _container.addEventListener('mousedown', this.__startHandler, false);

    _container.addEventListener('mousemove', this.__moveHandler, false);

    _container.addEventListener("mouseup", this.__endHandler, false);

    document.addEventListener('mousemove', function (event) {
      event.stopPropagation();
    }, false);
  },
  __startHandler: function __startHandler(event) {
    if (this.state.loading) {
      return false;
    }

    if (this.__getScrollTop() == 0) {
      this._touching = true;
      this._start = this.__getEventPoint(event);
    } else {
      event.preventDefault(); //如果使用这句话手机端，页面将禁止手滑
    }
  },
  __moveHandler: function __moveHandler(event) {
    if (this._touching) {
      var _point = this.__getEventPoint(event);

      var _result = this.props.onMove && this.props.onMove(this._start, _point);

      if (_result !== false) {
        var _vx = _point.x - this._start.x,
            _vy = _point.y - this._start.y,
            _yValue = _vy;

        console.log(_yValue, this.__getScrollTop());

        if (_yValue < 0) {//event.preventDefault();
          //return false;
        }

        if (_yValue > 0 && this.__getScrollTop() == 0) {
          event.preventDefault();
          this.state.step = 2;

          if (_vy > this.props.maxHeight) {
            this.state.step = 3;
            _yValue = this.props.maxHeight + (_vy - this.props.maxHeight) / 3;
          }

          this.setState({
            yValue: _yValue,
            step: this.state.step
          });
        } else {//event.preventDefault();
        }
      }
    }
  },
  __endHandler: function __endHandler(event) {
    if (this._touching) {
      this._touching = false;

      if (this.state.yValue > 0) {
        if (this.state.yValue < this.props.maxHeight) {
          this.setState({
            yValue: 0,
            step: 1
          });
        } else if (this.state.yValue > this.props.maxHeight) {
          this.setState({
            yValue: this.props.maxHeight,
            step: 4,
            loading: true
          });
          this.props.onDownPullEnd && this.props.onDownPullEnd(this);
        }
      } else {
        /*
        if(this.__ifHandlerDown()){
            this.setState({
                yValue: 0,
                step: 5,
                loading: true
            });
            this.props.onUpPullEnd&&this.props.onUpPullEnd(this);
        }*/
      }
    }
  },
  reset: function reset() {
    this.setState({
      yValue: 0,
      step: 1,
      loading: false
    });
  },
  __getScrollTop: function __getScrollTop() {
    return this._container.parentNode.scrollTop;
  },
  __getClientHeight: function __getClientHeight() {
    return this._container.parentNode.clientHeight;
  },
  __getScrollHeight: function __getScrollHeight() {
    return Math.max(document.body.scrollHeight, this._container.parentNode.scrollHeight);
  },
  __ifHandlerDown: function __ifHandlerDown() {
    var _v1 = this.__getScrollTop() + this.__getClientHeight(),
        _v2 = this.__getScrollHeight();

    return _v1 >= _v2;
  },
  __getEventPoint: function __getEventPoint(event) {
    var _x = event.pageX,
        _y = event.pageY;

    if (event.targetTouches) {
      _x = event.targetTouches[0].pageX;
      _y = event.targetTouches[0].pageY;
    }

    return {
      x: _x,
      y: _y
    };
  },
  __getContentStyles: function __getContentStyles() {
    var _yValue = this.state.yValue;

    if (_yValue > 0) {
      return {
        transform: 'translateY(' + _yValue + 'px)'
      };
    } else {
      return {
        transform: 'translateY(' + _yValue / 3 + 'px)'
      };
    }
  },
  __downRender: function __downRender() {
    switch (this.state.step) {
      case 2:
        return /*#__PURE__*/React.createElement("div", {
          className: "tip down-refresh"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-angle-down"
        }), /*#__PURE__*/React.createElement("span", null, "\u4E0B\u62C9\u5237\u65B0"));

      case 3:
        return /*#__PURE__*/React.createElement("div", {
          className: "tip down-refresh"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-angle-up"
        }), /*#__PURE__*/React.createElement("span", null, "\u91CA\u653E\u52A0\u8F7D"));

      case 4:
        return /*#__PURE__*/React.createElement("div", {
          className: "tip down-refresh"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-spinner zr-self-loading"
        }), /*#__PURE__*/React.createElement("span", null, "\u6B63\u5728\u52A0\u8F7D\u4E2D..."));
    }

    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-down-puller " + this.props.className
    }, this.__downRender(), /*#__PURE__*/React.createElement("div", {
      className: "content",
      style: this.__getContentStyles()
    }, this.props.children));
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(232);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'AjaxUploader',
  getDefaultProps: function getDefaultProps() {
    return {
      action: '/zn.plugin.admin/uploadFiles',
      changeSubmit: true,
      hiddens: {},
      multiple: true,
      size: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  __onInputChange: function __onInputChange(event) {
    if (this.state.loading) {
      return false;
    }

    var _files = event.nativeEvent.target.files;

    if (_files.length) {
      var _result = this.props.onChange && this.props.onChange(_files, this);

      if (_result !== false && this.props.changeSubmit) {
        var _formData = new FormData(),
            _hiddens = this.props.hiddens || {},
            _hidden = null;

        if (zn.is(_result, 'object')) {
          zn.extend(_hiddens, _result);
        } //console.log(_hiddens);


        for (var key in _hiddens) {
          _hidden = _hiddens[key];

          if (_typeof(_hidden) == 'object') {
            _hidden = JSON.stringify(_hidden);
          }

          _formData.append(key, _hidden);
        }

        for (var i = 0, _len = _files.length; i < _len; i++) {
          _formData.append('upload_file_' + i, _files[i]);
        }

        this.ajaxUpload(_formData);
      }
    }
  },
  __onInputClick: function __onInputClick(event) {
    if (this.state.loading) {
      return false;
    }

    event.stopPropagation();
    this.props.onUploaderClick && this.props.onUploaderClick(event, this);
  },
  ajaxUpload: function ajaxUpload(data) {
    this.setState({
      loading: true
    });
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", this.__ajaxUploadProgress, false);
    xhr.addEventListener("load", this.__ajaxUploadComplete, false);
    xhr.addEventListener("error", this.__ajaxUploadError, false);
    xhr.addEventListener("abort", this.__ajaxUploadAbort, false);
    xhr.open("POST", zn.http.fixURL(this.props.action), "true");
    xhr.send(data);
  },
  __ajaxUploadProgress: function __ajaxUploadProgress(evt) {
    if (evt.lengthComputable) {
      evt.progress = Math.round(evt.loaded * 100 / evt.total);
    }

    console.log(evt);
    this.props.onUploading && this.props.onUploading(evt, this);
  },
  __ajaxUploadComplete: function __ajaxUploadComplete(evt) {
    this.reset();

    var _data = JSON.parse(evt.target.responseText);

    if (_data.status == 200) {
      this.props.onComplete && this.props.onComplete(_data.result, this);
    } else {
      zn.confirm(_data.result);
      this.props.onError && this.props.onError(_data.result, this);
    }
  },
  __ajaxUploadError: function __ajaxUploadError(event) {
    this.reset();
    this.props.onError && this.props.onError(event.message, this);
  },
  __ajaxUploadAbort: function __ajaxUploadAbort(event) {
    this.reset();
    this.props.onAbort && this.props.onAbort(event, this);
  },
  reset: function reset() {
    this.setState({
      loading: false
    });
    ReactDOM.findDOMNode(this).reset();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("form", {
      className: zn.react.classname("zr-ajax-uploader", this.props.className),
      style: this.props.style,
      "data-loading": this.state.loading,
      action: zn.http.fixURL(this.props.action || ''),
      encType: "multipart/form-data",
      method: "POST"
    }, this.props.children, this.props.size && /*#__PURE__*/React.createElement("span", {
      className: "size"
    }, this.props.size), /*#__PURE__*/React.createElement("input", {
      multiple: this.props.multiple,
      className: "input",
      type: "file",
      name: this.props.name || 'upload_file_' + new Date().getTime(),
      onChange: this.__onInputChange,
      onClick: this.__onInputClick
    }));
  }
});

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Session', 'Draggable', 'Router', 'RestfulHandler'], function (value) {
  zn.react[value] = __webpack_require__(122)("./" + value + ".js");
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);

__webpack_require__(128);

zn.react.global = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._jumpHandlers = [];
    },
    onJump: function onJump(handler, context) {
      this._jumpHandlers.push({
        handler: handler,
        context: context
      });

      return this;
    },
    fireJump: function fireJump() {
      this._jumpHandlers.map(function (item) {
        if (item.handler) {
          item.handler.call(item.context);
        }
      });

      return this;
    }
  }
});
module.exports = zn.arrayValueToObject(['Ripple', 'Alert', 'Modal', 'Modals', 'Notify', 'Notification', 'Popover', 'Popup', 'Preloader', 'Toast', 'Tooltip'], function (value, index) {
  return __webpack_require__(129)("./" + value + ".js");
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['ActivityLayout', 'FixedLayout'], function (value, index) {
  return __webpack_require__(153)("./" + value + ".js");
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);

__webpack_require__(155);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'ActivityLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      begin: 0,
      end: 0,
      barWidth: 3,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'left-right',
      unit: 'px'
    };
  },
  __getStyles: function __getStyles() {
    var props = this.props,
        _unit = props.unit,
        _begin = props.begin,
        _end = props.end,
        _header = {},
        _body = {},
        _footer = {};

    if (props.direction == 'left-right') {
      _body.width = props.barWidth + _unit;

      if (_begin) {
        _header.width = _begin + _unit;
        _body.left = _begin + _unit;
        _footer.left = _begin + props.barWidth + _unit;
      }

      if (_end) {
        _header.right = _end + props.barWidth + _unit;
        _body.right = _end + _unit;
        _footer.width = _end + _unit;
      }
    } else {
      _body.height = props.barWidth + _unit;

      if (_begin) {
        _header.height = _begin + _unit;
        _body.top = _begin + _unit;
        _footer.top = _begin + props.barWidth + _unit;
      }

      if (_end) {
        _header.bottom = _end + props.barWidth + _unit;
        _body.bottom = _end + _unit;
        _footer.height = _end + _unit;
      }
    }

    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  __bodyRender: function __bodyRender() {
    var _render = this.props.bodyRender && this.props.bodyRender(this);

    if (_render) {
      return _render;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "activity-bar"
      });
    }
  },
  render: function render() {
    var _children = this.props.children;

    if (_children && _children.length === undefined) {
      _children = [_children];
    }

    _children = _children.slice(0);

    var _styles = this.__getStyles(); //h, v


    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-basic-layout", "zr-activity-layout", "direction-" + this.props.direction, this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: _styles.header
    }, _children[0]), !!this.props.barWidth && /*#__PURE__*/React.createElement("div", {
      className: "layout-body",
      style: _styles.body
    }, this.__bodyRender()), /*#__PURE__*/React.createElement("div", {
      className: "layout-footer",
      style: _styles.footer
    }, _children[1]));
  }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);

__webpack_require__(157);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'FixedLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      begin: 0,
      end: 0,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'top-bottom',
      unit: 'px'
    };
  },
  __getStyles: function __getStyles() {
    var props = this.props,
        _unit = props.unit,
        _begin = props.begin,
        _end = props.end,
        _header = {},
        _body = {},
        _footer = {};

    if (props.direction == 'top-bottom') {
      _header = {
        height: _begin + _unit
      };
      _body = {
        top: _begin + _unit,
        bottom: _end + _unit
      };
      _footer = {
        height: _end + _unit
      };
    } else {
      _header = {
        width: _begin + _unit
      };
      _body = {
        left: _begin + _unit,
        right: _end + _unit
      };
      _footer = {
        width: _end + _unit
      };
    }

    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  render: function render() {
    var _children = this.props.children;

    if (_children && _children.length === undefined) {
      _children = [_children];
    }

    _children = _children.slice(0);

    var _styles = this.__getStyles(); //h, v


    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-basic-layout", "zr-fixed-layout", "direction-" + this.props.direction, this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: _styles.header
    }, _children[0]), /*#__PURE__*/React.createElement("div", {
      className: "layout-body",
      style: _styles.body
    }, _children[1]), /*#__PURE__*/React.createElement("div", {
      className: "layout-footer",
      style: _styles.footer
    }, _children[2]));
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Animate', 'Bubble', 'Button', 'ButtonGroup', 'Card', 'DataLoader', 'DownPuller', 'Dropdown', 'DropdownList', 'ErrorPage', 'ExpressDetail', 'Files', 'FixedPage', 'Group', 'Icon', 'Icons', 'Image', 'LoadingView', 'Page', 'Panel', 'ProgressRing', 'RTFlexItem', 'RTItem', 'RTList', 'Search', 'Slider', 'Timer', 'Uploader', 'Watcher'], function (value, index) {
  return __webpack_require__(158)("./" + value + ".js");
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(161);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

module.exports = React.createClass({
  displayName: 'Button',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      type: 'primary'
    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  loading: function loading(value) {
    if (this.isMounted()) {
      this.setState({
        loading: value
      });
    }
  },
  __renderChildren: function __renderChildren() {
    if (!this.props.children) {
      return /*#__PURE__*/React.createElement("div", {
        className: "btn"
      }, !!this.props.icon && /*#__PURE__*/React.createElement("i", {
        className: 'btn-icon fa ' + this.props.icon
      }), this.props.text);
    } else {
      return this.props.children;
    }
  },
  __onClick: function __onClick(rtitem, event) {
    if (!this.state.loading) {
      this.props.onClick && this.props.onClick(this.props, this, event);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, _extends({}, this.props, {
      attrs: zn.extend({
        "data-loading": this.state.loading,
        "data-tooltip": this.props.tooltip
      }, this.props.attrs),
      className: zn.react.classname("zr-button zr-action-ripple zr-base-transition", this.props.className, this.props.status || this.props.type),
      onClick: this.__onClick
    }), this.__renderChildren());
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Icon',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      spin: false,
      icon: 'fa-code'
    };
  },
  __onClick: function __onClick(event) {
    this.props.onClick && this.props.onClick(this, event);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("i", {
      "data-tooltip": this.props.tooltip,
      onClick: this.__onClick,
      className: zn.react.classname('zr-icon fa', this.props.className, this.props.icon),
      "data-spin": this.props.spin
    }, this.props.text);
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(200);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

module.exports = React.createClass({
  displayName: 'RTFlexItem',
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, _extends({}, this.props, {
      className: zn.react.classname('zr-flex-item', this.props.className)
    }), this.props.children);
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(201);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Search',
  getDefaultProps: function getDefaultProps() {
    return {
      value: '',
      realtime: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      searching: false
    };
  },
  __onClick: function __onClick(rtitem, event) {
    this.props.onClick && this.props.onClick(this.props, this, event);
  },
  __onInputFoucs: function __onInputFoucs() {
    this.setState({
      focus: true
    });
  },
  __onInputBlur: function __onInputBlur() {
    this.setState({
      focus: false
    });
  },
  __onInputChange: function __onInputChange(event) {
    var _value = event.target.value;
    this.state.value = _value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(_value);

    if (_value) {
      if (this.props.realtime) {
        this.props.onSearch && this.props.onSearch(_value);
      }
    } else {
      this.props.onCancel && this.props.onCancel();
    }

    event.stopPropagation();
  },
  __onIconClick: function __onIconClick(event) {
    if (!this.props.realtime) {
      this.props.onSearch && this.props.onSearch(this.state.value);
    }

    event.stopPropagation();
  },
  searching: function searching(value) {
    this.setState({
      searching: value
    });
  },
  __onClearClick: function __onClearClick(event) {
    this.setState({
      value: ''
    });
    event.target.nextSibling.focus();
    event.stopPropagation();
    this.props.onCancle && this.props.onCancle();
  },
  __onSearchKeyUp: function __onSearchKeyUp(event) {
    var _event = event.nativeEvent;

    if (_event.keyCode == 13) {
      var _value = _event.target.value;
      this.state.value = _value;
      this.props.onSearch && this.props.onSearch(_value);
    }
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-search", this.props.className, this.state.focus ? 'foucs' : ''),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("i", {
      onClick: this.__onIconClick,
      className: "search-icon fa " + (this.state.searching ? "searching" : "fa-search")
    }), this.state.value && /*#__PURE__*/React.createElement("i", {
      className: "search-clear fa fa-times-circle",
      onClick: this.__onClearClick
    }), /*#__PURE__*/React.createElement("input", _extends({}, this.props, {
      value: this.state.value,
      onFocus: this.__onInputFoucs,
      onBlur: this.__onInputBlur,
      onChange: this.__onInputChange,
      onKeyUp: function onKeyUp(event) {
        return _this.__onSearchKeyUp(event);
      },
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      className: "search-input",
      type: "text",
      name: "value"
    })));
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['ListView', 'Pager', 'PagerView', 'PagingList', 'PullRefreshList', 'Steps', 'Tree', 'TreeListView'], function (value, index) {
  return __webpack_require__(214)("./" + value + ".js");
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(216);

var React = __webpack_require__(0);

var Page = React.createClass({
  displayName: 'Pager',
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  __onClick: function __onClick() {
    if (this.props.isDisabled) {
      return false;
    }

    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    return /*#__PURE__*/React.createElement("li", {
      onClick: this.__onClick,
      className: 'page ' + this.props.className + ' ' + (this.props.isActive ? "active" : "") + ' ' + (this.props.isDisabled ? "" : "enabled")
    }, /*#__PURE__*/React.createElement("span", null, this.props.children));
  }
});
var TITLES = {
  first: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-step-backward"
  }),
  prev: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-left"
  }),
  prevSet: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-fast-backward"
  }),
  nextSet: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-fast-forward"
  }),
  next: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-arrow-right"
  }),
  last: /*#__PURE__*/React.createElement("i", {
    className: "fa fa-step-forward"
  })
};

function range(start, end) {
  var res = [];

  for (var i = start; i < end; i++) {
    res.push(i);
  }

  return res;
}

module.exports = React.createClass({
  displayName: 'Pager',
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},
  handleFirstPage: function handleFirstPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(1);
  },
  handlePreviousPage: function handlePreviousPage() {
    if (this.isPrevDisabled()) return;
    this.handlePageChanged(this.props.current - 1);
  },
  handleNextPage: function handleNextPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.current + 1);
  },
  handleLastPage: function handleLastPage() {
    if (this.isNextDisabled()) return;
    this.handlePageChanged(this.props.total);
  },

  /**
   * Chooses page, that is one before min of currently visible
   * pages.
   */
  handleMorePrevPages: function handleMorePrevPages() {
    this.handlePageChanged(this.props.current - 1);
  },

  /**
   * Chooses page, that is one after max of currently visible
   * pages.
   */
  handleMoreNextPages: function handleMoreNextPages() {
    var blocks = this.calcBlocks();
    this.handlePageChanged(blocks.current * blocks.size + 1);
  },
  handlePageChanged: function handlePageChanged(pageIndex) {
    this.props.onPageChanged && this.props.onPageChanged(pageIndex);
  },

  /* ========================= HELPERS ==============================*/

  /**
   * Calculates "blocks" of buttons with page numbers.
   */
  calcBlocks: function calcBlocks() {
    return {
      total: Math.ceil(this.props.total / this.props.visiblePages),
      current: Math.ceil(this.props.current / this.props.visiblePages),
      size: this.props.visiblePages
    };
  },
  isPrevDisabled: function isPrevDisabled() {
    return this.props.current <= 1;
  },
  isNextDisabled: function isNextDisabled() {
    return this.props.current >= this.props.total;
  },
  isPrevMoreHidden: function isPrevMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 1 || blocks.current === 1;
  },
  isNextMoreHidden: function isNextMoreHidden() {
    var blocks = this.calcBlocks();
    return blocks.total === 0 || blocks.current === blocks.total;
  },
  visibleRange: function visibleRange() {
    var blocks = this.calcBlocks(),
        start = (blocks.current - 1) * blocks.size,
        delta = this.props.total - start,
        end = start + (delta > blocks.size ? blocks.size : delta);
    return [start + 1, end + 1];
  },

  /**
      * ### renderPages()
      * Renders block of pages' buttons with numbers.
      * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
      * @return {React.Element[]} - array of React nodes.
      */
  renderPages: function renderPages(pair) {
    return range(pair[0], pair[1]).map(function (pageIndex, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement(Page, {
        key: index,
        isActive: this.props.current === pageIndex,
        className: "btn-numbered-page",
        onClick: function onClick() {
          return _this.handlePageChanged(pageIndex);
        }
      }, pageIndex);
    }.bind(this));
  },
  getTitles: function getTitles(key) {
    var pTitles = this.props.titles || {};
    return pTitles[key] || TITLES[key];
  },
  render: function render() {
    var titles = this.getTitles;
    return /*#__PURE__*/React.createElement("nav", {
      className: "zr-pager " + this.props.className
    }, /*#__PURE__*/React.createElement("ul", {
      className: "pages"
    }, /*#__PURE__*/React.createElement(Page, {
      className: "btn-first-page",
      key: "btn-first-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handleFirstPage
    }, titles('first')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-page",
      key: "btn-prev-page",
      isDisabled: this.isPrevDisabled(),
      onClick: this.handlePreviousPage
    }, titles('prev')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-prev-more",
      key: "btn-prev-more",
      isHidden: this.isPrevMoreHidden(),
      onClick: this.handleMorePrevPages
    }, titles('prevSet')), this.renderPages(this.visibleRange()), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-more",
      key: "btn-next-more",
      isHidden: this.isNextMoreHidden(),
      onClick: this.handleMoreNextPages
    }, titles('nextSet')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-next-page",
      key: "btn-next-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleNextPage
    }, titles('next')), /*#__PURE__*/React.createElement(Page, {
      className: "btn-last-page",
      key: "btn-last-page",
      isDisabled: this.isNextDisabled(),
      onClick: this.handleLastPage
    }, titles('last'))), !!this.props.total && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, this.props.current, " / ", this.props.total, " \u9875"), !!this.props.count && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, this.props.count, " \u6761"));
  }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(223);

var React = __webpack_require__(0);

var Search = __webpack_require__(21);

var ListView = __webpack_require__(6);

module.exports = React.createClass({
  displayName: 'SearchListView',
  getInitialState: function getInitialState() {
    return {
      filterValue: null
    };
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: "zr-search-list-view zr-flex-layout"
    }, /*#__PURE__*/React.createElement(Search, {
      onSearch: function onSearch(value) {
        return _this.setState({
          filterValue: value
        });
      },
      realtime: true,
      className: "search layout-header"
    }), /*#__PURE__*/React.createElement(ListView, _extends({
      filterValue: this.state.filterValue,
      className: "listview layout-header"
    }, this.props)));
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(240);

var React = __webpack_require__(0);

var AjaxUploader = __webpack_require__(10);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      editable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: ','
    };
  },
  __onChange: function __onChange(files) {
    var _file = files[0];
    this.props.onChange && this.props.onChange(_file);
  },
  __onComplete: function __onComplete(data, uploader) {
    var _values = (data || []).map(function (file) {
      return file.url;
    });

    this.state.value = this.state.value + _values.join(',') + ',';
    this.forceUpdate();
    this.props.onComplete && this.props.onComplete(data, uploader);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  __onPreview: function __onPreview(item) {
    zn.modal.full(this.__renderPreviewFileByType(item.split('.').pop().toLowerCase(), item));
  },
  __renderContent: function __renderContent(item) {
    var _this = this;

    var _temp = this.props.onFileRender && this.props.onFileRender(item);

    if (_temp) {
      return _temp;
    }

    return /*#__PURE__*/React.createElement("a", {
      onClick: function onClick() {
        return _this.__onPreview(item);
      }
    }, this.__renderFileByType(item.split('.').pop().toLowerCase(), item));
  },
  __renderPreviewFileByType: function __renderPreviewFileByType(type, value) {
    if (this.props.isImage) {
      return /*#__PURE__*/React.createElement("img", {
        width: "100%",
        height: "100%",
        src: zn.http.fixURL(value)
      });
    }

    switch (type) {
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'gif':
        return /*#__PURE__*/React.createElement("img", {
          width: "100%",
          height: "100%",
          src: zn.http.fixURL(value)
        });

      case 'mp4':
      case 'mpg':
      case 'mpeg':
      case 'mov':
      case 'ogg':
      case 'avi':
      case 'aac':
      case 'aiff':
      case 'qt':
      case 'viv':
        return /*#__PURE__*/React.createElement("video", {
          width: "100%",
          height: "100%",
          preload: "auto",
          loop: "loop",
          autoplay: "autoplay",
          controls: "controls"
        }, /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/ogg"
        }), /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/mp4"
        }), "Your browser does not support the video tag.");

      default:
        return value.split('/').pop();
    }
  },
  __renderFileByType: function __renderFileByType(type, value) {
    if (this.props.isImage) {
      return /*#__PURE__*/React.createElement("img", {
        src: zn.http.fixURL(value)
      });
    }

    switch (type) {
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'gif':
        return /*#__PURE__*/React.createElement("img", {
          src: zn.http.fixURL(value)
        });

      case 'mp4':
      case 'mpg':
      case 'mpeg':
      case 'mov':
      case 'ogg':
      case 'avi':
      case 'aac':
      case 'aiff':
      case 'qt':
      case 'viv':
        return /*#__PURE__*/React.createElement("video", {
          width: "96",
          height: "96"
        }, /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/ogg"
        }), /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/mp4"
        }), "Your browser does not support the video tag.");

      default:
        return value.split('/').pop();
    }
  },
  __onRemove: function __onRemove(item, index) {
    this.state.value = this.state.value.replace(item, '');
    this.forceUpdate();
  },
  render: function render() {
    var _values = this.state.value.split(',');

    var _editable = this.props.editable && !this.props.disabled && !this.props.readonly;

    return /*#__PURE__*/React.createElement("div", {
      className: "zr-file-uploader",
      style: this.props.style
    }, _editable && /*#__PURE__*/React.createElement(AjaxUploader, _extends({}, this.props, {
      style: this.props.uploaderStyle,
      onChange: this.__onChange,
      onComplete: this.__onComplete
    }), /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon fa fa-plus"
    }))), /*#__PURE__*/React.createElement("ul", {
      className: "file-list"
    }, _values.map(function (item, index) {
      var _this2 = this;

      if (item) {
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          className: "file"
        }, _editable && /*#__PURE__*/React.createElement("i", {
          className: "fa fa-remove zr-hover-self-loading",
          onClick: function onClick() {
            return _this2.__onRemove(item, index);
          }
        }), this.__renderContent(item));
      }
    }.bind(this))));
  }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(243);

var React = __webpack_require__(0);

var AjaxUploader = __webpack_require__(10);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      value: './images/DefaultAvatar.png'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  __onChange: function __onChange(files) {
    var _file = files[0];

    if (_file.type.indexOf('image') == -1) {
      alert('文件[' + _file.name + ']不是图片类型');
      return false;
    }
  },
  __onComplete: function __onComplete(data, uploader) {
    var _file = data[0];

    if (_file) {
      var _value = _file.url;

      if (_value.indexOf('/') != 0) {
        _value = "/" + _value;
      }

      console.log(_value);
      this.setValue(_value);
    }

    this.props.onComplete && this.props.onComplete(_file, this);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    }, function () {
      this.props.onChange && this.props.onChange(value, this);
    }.bind(this));
  },
  render: function render() {
    var _src = this.state.value;

    if (_src.indexOf('/') == 0) {
      _src = zn.http.fixURL(this.state.value);
    }

    return /*#__PURE__*/React.createElement(AjaxUploader, _extends({}, this.props, {
      className: "zr-image-uploader",
      onChange: this.__onChange,
      onComplete: this.__onComplete,
      multipart: false
    }), /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, !!_src ? /*#__PURE__*/React.createElement("img", {
      className: "img",
      src: _src
    }) : /*#__PURE__*/React.createElement("i", {
      className: "upload fa fa-plus"
    })));
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(260);

__webpack_require__(261);

__webpack_require__(262);

var React = __webpack_require__(0);

var RTFlexItem = __webpack_require__(20);

module.exports = React.createClass({
  displayName: 'FormItem',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      status: 'default'
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.value != undefined && this.refs.input) {
      if (this.refs.input.setValue) {
        this.refs.input.setValue(this.props.value);
      } else {
        zn.notification.error('The FormItem input component ' + this.props.title + ' has not setValue method.');
      }
    }
  },
  validate: function validate(callback) {
    if (!this.refs.input) {
      return zn.notification.error('Form item input component ' + this.props.title + ' is undefined.'), false;
    }

    var _value = this.refs.input.getValue();

    if (this.props.required && (_value === '' || _value === null || _value === undefined)) {
      this.setState({
        status: 'danger'
      });

      var _msg = this.props.error || (this.props.title || '字段') + '是必填项.';

      if (zn.react.isMobile()) {
        zn.notification.error(_msg);
      } else {
        zn.notification.error(_msg);
      }

      return false;
    }

    var _callback = callback && callback(_value, this);

    if (_callback == false) {
      return this.setState({
        status: 'danger'
      }), false;
    }

    return this.setState({
      status: 'success'
    }), _value;
  },
  __onInputChange: function __onInputChange(value, input) {
    if (value == null) {
      return;
    }

    this.props.onChange && this.props.onChange(value, input, this);
  },
  render: function render() {
    var _input = null,
        _type = this.props.type;

    if (zn.is(_type, 'string')) {
      if (zn.path(window, _type)) {
        _input = zn.path(window, _type);
      } else {
        _input = zn.react[_type];
      }
    } else {
      _input = _type;
    }

    if (_type == 'FormTitle') {
      return _input && /*#__PURE__*/React.createElement(_input, _extends({}, this.props, {
        ref: "input",
        className: this.props.inputClassName || '',
        onChange: this.__onInputChange
      }));
    }

    return /*#__PURE__*/React.createElement(RTFlexItem, _extends({}, this.props, {
      className: zn.react.classname('zr-form-item', this.props.className, this.state.status, this.props.required ? 'required' : '')
    }), /*#__PURE__*/React.createElement("div", {
      className: "zrfi-header"
    }, this.props.icon && /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + this.props.icon
    })), this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.title)), /*#__PURE__*/React.createElement("div", {
      className: "zrfi-body"
    }, !!_input && /*#__PURE__*/React.createElement(_input, _extends({}, this.props, {
      ref: "input",
      className: this.props.inputClassName || '',
      onChange: this.__onInputChange
    })), this.props.suffix && /*#__PURE__*/React.createElement("span", {
      className: "suffix"
    }, this.props.suffix)));
  }
});

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

if (!React.createClass) {
  React.createClass = __webpack_require__(41);
}

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(12);

zn.overwrite(zn.react, __webpack_require__(13));
zn.overwrite(zn.react, __webpack_require__(14));
zn.overwrite(zn.react, __webpack_require__(17));
zn.overwrite(zn.react, __webpack_require__(22));
zn.overwrite(zn.react, __webpack_require__(231));

if (!zn.plugin) {
  zn.plugin = {};
}

if (!zn.app) {
  zn.app = {};
}

module.exports = zn.react;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(0);
var factory = __webpack_require__(42);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(43);

var emptyObject = __webpack_require__(44);
var _invariant = __webpack_require__(45);

if (false) { var warning; }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = zn.react = {
  downloadDataURL: function downloadDataURL(dataURL, filename) {
    var blob = this.dataURLToBlob(dataURL);
    var url = window.URL.createObjectURL(blob);
    this.downloadURL(url, filename);
  },
  downloadURL: function downloadURL(url, filename) {
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;

    if (filename) {
      a.download = filename;
    }

    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  },
  dataURLToBlob: function dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    var parts = dataURL.split(';base64,');
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {
      type: contentType
    });
  },
  copyToClipboard: function copyToClipboard(value) {
    var _tempInput = document.createElement('input');

    _tempInput.value = value;
    _tempInput.style.width = '0px !important';
    _tempInput.style.height = '0px !important';
    document.body.appendChild(_tempInput);

    _tempInput.select();

    document.execCommand("Copy");
    document.body.removeChild(_tempInput);
    zn.notification.success('复制成功：' + value);
  },
  isAndroid: function isAndroid() {
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
  },
  isIOS: function isIOS() {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  },
  isMobile: function isMobile() {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) {
      try {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          return true;
        } else if (/iPad/i.test(navigator.userAgent)) {
          return true;
        } else {
          return true;
        }
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  },
  checkTime: function checkTime(beginTime, endTime) {
    var _begin = new Date(beginTime.replace(/-/g, '/')).getTime(),
        _end = new Date(endTime.replace(/-/g, '/')).getTime(),
        _now = new Date().getTime();

    if (_begin < _now && _end > _now) {
      return 0;
    }

    if (_begin > _now) {
      return -1;
    } else {
      return 1;
    }
  },
  classname: function classname() {
    var _items = [];
    zn.each(Array.prototype.slice.call(arguments), function (item, index) {
      if (item) {
        switch (zn.type(item)) {
          case 'string':
            _items.push(item);

            break;

          case 'function':
            _items.push(item.call(null) || '');

            break;
        }
      }
    });
    return _items.join(' ');
  },
  style: function style() {},
  extendPath: function extendPath(path, views) {
    var _views = {};

    for (var key in views) {
      _views[path + key] = views[key];
    }

    return _views;
  },
  loadPaths: function loadPaths(paths, handler, ifDeep) {
    var _exports = {},
        _temp = null;

    for (var key in paths) {
      _temp = handler && handler(paths[key]);
      _exports[key] = _temp;

      if (ifDeep && zn.is(_temp, 'object')) {
        for (var _tkey in _temp) {
          _exports[_tkey] = _temp[_tkey];
        }
      }
    }

    return _exports;
  },
  findTarget: function findTarget(target, options) {
    if (!target) {
      return;
    }

    var _options = options || {};

    for (var key in _options) {
      if (target[key] !== _options[key]) {
        return this.findTarget(target.parentNode, options);
      }
    }

    return target;
  },
  exports: function exports(config, handler) {}
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.react.Application = zn.Class({
  statics: {
    create: function create(argv) {
      var _props = {},
          _methods = {
        init: function init(argv) {
          this["super"](argv);
          this.sets(argv);
        }
      };
      zn.each(argv, function (value, key) {
        if (zn.type(value) == 'function' && !value.displayName) {
          _methods[key] = value;
        } else {
          _props[key] = value;
        }
      });

      var _Class = zn.Class(this, {
        methods: _methods,
        properties: _props
      });

      return new _Class(_props);
    }
  },
  properties: {
    container: 'container',
    absolute: true,
    home: null,
    main: null,
    host: window.location.origin,
    router: null,
    global: null,
    plugins: []
  },
  methods: {
    init: function init(argv) {
      this.sets(argv);

      this.__initArgv(argv);

      var _value = this.onInit && this.onInit.call(this, this.gets());

      if (_value !== false) {
        this.update(_value);
      }
    },
    __initArgv: function __initArgv(argv) {
      var _routers = {},
          _relativeRouters = {},
          _plugin = null,
          _path = this.get('path'),
          _self = this;

      this.get('plugins') && this.get('plugins').forEach(function (plugin) {
        if (zn.is(plugin, 'string')) {
          plugin = _self.onLoading(plugin);
        }

        if (zn.is(plugin, 'array')) {
          zn.extend(_routers, plugin[1]);
          plugin = plugin[0];
        }

        zn.extend(_relativeRouters, plugin);
      });

      if (argv.routers) {
        var __routers = zn.deepEachObject(argv.routers, this.onLoading.bind(this));

        zn.extend(_relativeRouters, __routers);

        if (_path) {
          var _temp = {},
              _index = _routers[_path] || _relativeRouters[_path];

          _relativeRouters['/'] = _index;
          _routers[_path] = _relativeRouters;
        } else {
          _routers = _relativeRouters;
          zn.extend(_routers, __routers);
        }
      }

      this._routers = _routers;
      this._relativeRouters = _relativeRouters;
      console.log(this._routers, this._relativeRouters);
      zn.react.session.setHome(this.get('home')).setMain(this.get('main')).setBasePath(this.get('path'));
      zn.http.setHost(this.get('host'), this.get('port'));
    },
    onLoading: function onLoading(value) {
      return value;
    },
    __getRenderView: function __getRenderView() {
      return this.render && this.render.call(this, this.gets());
    },
    update: function update(view) {
      var _Router = this.get('router');

      if (!_Router) {
        _Router = zn.react.isMobile() ? zn.react.WapRouter : zn.react.WebRouter;
      }

      if (!_Router) {
        return alert('只适合手机版本打开!'), false;
      }

      var _view = view || this.__getRenderView() || /*#__PURE__*/React.createElement(_Router, {
        home: this.get('home'),
        routers: this._routers
      }),
          _container = this.get('container');

      _container = zn.type(_container) == 'string' ? document.getElementById(_container) : _container;

      if (this.get('absolute')) {
        _container.style.position = 'absolute';
        _container.style.width = '100%';
        _container.style.height = '100%';
      }

      if (zn.react.isMobile()) {
        _container.classList.add('zr-mobile');
      } //require('react-dom').render(_view, _container)


      if (this.get('global')) {
        _view = /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: '100%'
          }
        }, _view, this.get('global'));
      }

      setTimeout(function () {
        return __webpack_require__(1).render(_view, _container);
      }, 50);
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);

__webpack_require__(74);

__webpack_require__(96);

__webpack_require__(113);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(55);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(67);

__webpack_require__(68);

__webpack_require__(69);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);

__webpack_require__(76);

__webpack_require__(77);

__webpack_require__(78);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(90);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(93);

__webpack_require__(94);

__webpack_require__(95);

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(101);

__webpack_require__(102);

__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);

__webpack_require__(115);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(119);

__webpack_require__(120);

__webpack_require__(121);

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Draggable.js": 123,
	"./RestfulHandler.js": 124,
	"./Router.js": 125,
	"./Session.js": 126,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 122;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = zn.Class({
  statics: {
    create: function create(target, argv) {
      return new this.prototype.constructor(target, argv);
    }
  },
  methods: {
    init: function init(target, argv) {
      var _argv = argv || {},
          _default = {
        source: target,
        vector: ['left', 'top'],
        //tl: top-left, br: bottom-right
        start: ['30', '30'],
        minX: 0,
        maxX: null,
        minY: 0,
        maxY: null,
        xHandler: null,
        yHandler: null,
        onDragStrat: function onDragStrat() {},
        onDrag: function onDrag() {},
        onDragEnd: function onDragEnd() {}
      };

      for (var key in _default) {
        if (!_argv.hasOwnProperty(key)) {
          _argv[key] = _default[key];
        }
      }

      var _source = _argv.source,
          _start = _argv.start,
          _vector = _argv.vector;
      _argv.DX = _vector[0];
      _argv.DY = _vector[1];
      _source.style.position = 'absolute';
      target.style.cursor = 'move';

      if (_start) {
        _source.style[_argv.DX] = (_start[0] || 0) + 'px';
        _source.style[_argv.DY] = (_start[1] || 0) + 'px';
      }

      this._argv = _argv;

      if (_argv.event) {
        this.__mousedown(_argv.event);
      }

      target.onmousedown = this.__mousedown.bind(this);
    },
    __mousedown: function __mousedown(event) {
      var _event = event || window.event,
          _argv = this._argv,
          _source = _argv.source; //event.stopPropagation();
      //event.preventDefault();


      var _x = parseFloat(_source.style[_argv.DX]) || 0,
          _y = parseFloat(_source.style[_argv.DY]) || 0,
          _px = _event.clientX || _event.x,
          _py = _event.clientY || _event.y;

      var _limit = _argv.onDragStrat && _argv.onDragStrat(_x, _y, _px, _py, _event);

      if (_limit) {
        for (var _key in _limit) {
          if (_limit[_key] !== undefined && _limit[_key] !== null) {
            _argv[_key] = _limit[_key];
          }
        }
      }

      _argv.currX = _x;
      _argv.currY = _y;
      _argv.mouseX = _px;
      _argv.mouseY = _py;

      var _return = !!_argv.onDragStart && _argv.onDragStart(event, _argv);

      if (_return !== false) {
        document.onmousemove = this.__mousemove.bind(this);
        document.onmouseup = this.__mouseup.bind(this);
      }

      return false;
    },
    __mousemove: function __mousemove(event) {
      var _event = event || window.event,
          _px = _event.clientX || _event.x,
          _py = _event.clientY || _event.y,
          _argv = this._argv; //event.stopPropagation();
      //event.preventDefault();


      var _dx = _px - _argv.mouseX,
          _dy = _py - _argv.mouseY;

      _argv.DX.toLowerCase() == 'right' && (_dx *= -1);
      _argv.DY.toLowerCase() == 'bottom' && (_dy *= -1);

      var _currX = _argv.currX + _dx,
          _currY = _argv.currY + _dy;

      _currX < _argv.minX && (_currX = _argv.minX);
      _argv.maxX && _currX > _argv.maxX && (_currX = _argv.maxX);
      _currY < _argv.minY && (_currY = _argv.minY);
      _argv.maxY && _currY > _argv.maxY && (_currY = _argv.maxY);

      if (_currX !== _argv.currX) {
        _argv.mouseX = _px;
        _argv.currX = _currX;
        _argv.source.style[_argv.DX] = _currX + 'px';
      }

      if (_currY !== _argv.currY) {
        _argv.mouseY = _py;
        _argv.currY = _currY;
        _argv.source.style[_argv.DY] = _currY + 'px';
      }

      _argv.onDrag && _argv.onDrag(event, _argv);
      return false;
    },
    __mouseup: function __mouseup(event) {
      //event.stopPropagation();
      this._argv.onDragEnd && this._argv.onDragEnd(event, this._argv);
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
});

/***/ }),
/* 124 */
/***/ (function(module, exports) {

var Request = zn.Class({
  properties: {
    data: {
      readonly: true,
      get: function get() {
        return this._data || {};
      }
    },
    path: {
      readonly: true,
      get: function get() {
        return this._path || '';
      }
    },
    search: {
      readonly: true,
      get: function get() {
        return this._search || {};
      }
    },
    notFound: true
  },
  methods: {
    init: function init(argv) {
      this.sets(argv);
      this.reset();
    },
    reset: function reset() {
      var _meta = location.hash.split('?');

      this._path = _meta[0].slice(1);
      this._paths = this._path.split('/');
      this._search = this._data = _meta[1] ? zn.querystring.parse(_meta[1]) : {};
    },
    get: function get(value) {
      return value ? this._data[value] : this._data;
    },
    parseRouterParameter: function parseRouterParameter(router) {
      var _data = {},
          _key = null,
          _value = null,
          _paths = this._paths;
      router.split('/').forEach(function (temp, index) {
        if (/^:\w[\w\d]*$/.test(temp)) {
          _key = temp.replace(/^:/, '');
          _value = _paths[index];
          _data[_key] = _value;
        }
      });
      return _data;
    },
    extend: function extend(value) {
      if (value) {
        zn.extend(this._data, value);
      }

      return this;
    },
    test: function test(router) {
      if (typeof router != 'string') {
        return false;
      }

      var __all = Boolean(router == '*'); //


      var _reg = router.replace(/\/:\w[^\/]+/g, '\/([^\/]+)');

      _reg = _reg.replace(/\//g, '\\/');

      if (router.slice(-3) == '{*}') {
        _reg = '^#' + _reg.slice(0, -3); // + '$';
      } else {
        _reg = '^#' + _reg + '$';
      }

      var __reg = Boolean(new RegExp(_reg).test('#' + this._path));

      var __index = Boolean(this._path == '' && router == '/');

      return Boolean(__all || __reg || __index);
    }
  }
});
module.exports = zn.Class({
  events: ['change'],
  methods: {
    init: function init(routers) {
      this._controllers = [];
      this._errors = [];
      window.addEventListener('hashchange', this.__onHashChange.bind(this), false);
    },
    fireHashChange: function fireHashChange() {
      this.__onHashChange();
    },
    __onHashChange: function __onHashChange() {
      var _req = new Request(),
          _len = this._controllers.length,
          _controller = null;

      for (var i = 0; i < _len; i++) {
        _controller = this._controllers[i];

        if (_req.test(_controller.router)) {
          _req.notFound = false;

          _req.extend(_req.parseRouterParameter(_controller.router));

          _controller.handler.call(_controller.context, _req);

          break;
        }
      }

      _req.notFound && this._errors.forEach(function (controller, index) {
        controller.handler.call(controller.context, _req);
      });
      this.fire('change', _req);
    },
    error: function error(handler, context) {
      return this._errors.push({
        handler: handler,
        context: context
      }), this;
    },
    use: function use(handler, context) {
      return this._controllers.push({
        router: '*',
        handler: handler,
        context: context
      }), this;
    },
    get: function get(router, handler, context) {
      return this._controllers.push({
        router: router,
        handler: handler,
        context: context
      }), this;
    }
  }
});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

module.exports = zn.Class({
  methods: {
    init: function init(argv) {
      this._search = new URLSearchParams(location.search.slice(1));
      this._hash = location.hash;

      var _argv = argv || {},
          _self = this,
          _onLoaded = _argv.onLoaded || function () {},
          _onHashChange = _argv.onHashChange || function () {},
          _onPopState = _argv.onPopState || function () {};

      window.addEventListener('DOMContentLoaded', function (event) {
        if (_onLoaded(event, _self) === false) {
          return false;
        }
      }, false);
      window.addEventListener('hashchange', function (event) {
        if (_onHashChange(event, _self) === false) {
          return false;
        }
      }, false);
      window.addEventListener('popstate', function () {
        if (_onPopState(event, _self) === false) {
          return false;
        }
      }, false);
    },
    setSearch: function setSearch(value) {
      var _obj = value || {};

      for (var key in _obj) {
        this._search.set(key, _obj[key]);
      }

      return this.refresh(), this;
    },
    getSearch: function getSearch(name) {
      if (name) {
        return this._search.get(name);
      }

      var _data = {};

      var _iterator = _createForOfIteratorHelper(this._search.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          _data[key] = this._search.get(key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _data;
    },
    setHash: function setHash(value) {
      this._hash = value;
      return location.hash = value, this;
    },
    getURL: function getURL(value) {
      return location.pathname + '?' + this._search.toString() + '#' + this._hash;
    },
    refresh: function refresh(value) {
      return window.history.pushState(null, null, this.getURL()), this;
    },
    pushState: function pushState(state, title, url) {
      return window.history.pushState(state, title, url), this;
    }
  }
});

/***/ }),
/* 126 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = zn.react.session = zn.Class({
  "static": true,
  methods: {
    fixRelativePath: function fixRelativePath(path) {
      var _basePath = this._basePath || '';

      if (path.indexOf(_basePath) == -1) {
        path = _basePath + path;
      }

      return path;
    },
    relativeURL: function relativeURL(path, argv) {
      var _argv = zn.querystring.stringify(argv);

      return '#' + this.fixRelativePath(path) + (_argv ? '?' + _argv : '');
    },
    relativeJump: function relativeJump(path, search, overwrite) {
      return this.jump(this.fixRelativePath(path), search, overwrite);
    },
    jump: function jump(path, search, overwrite) {
      var _search = zn.extend({}, search);

      if (!overwrite) {
        zn.overwrite(_search, this._globalSearch);
      }

      if (!search) {
        this._search = {};
      }

      this._search = zn.overwrite(_search, this._search);
      zn.react.global.fireJump();

      var _querystring = zn.querystring.stringify(this._search);

      location.hash = path + (_querystring ? '?' + _querystring : '');
      return this;
    },
    back: function back() {
      return window.history.back(), this;
    },
    setGlobalSearch: function setGlobalSearch(value) {
      return this._globalSearch = value, this;
    },
    setHome: function setHome(value) {
      return this._home = value, this;
    },
    setMain: function setMain(value) {
      return this._main = value, this;
    },
    setBasePath: function setBasePath(value) {
      return this._basePath = value, this;
    },
    fixPath: function fixPath(path) {
      return (this._basePath || '') + (path || '');
    },
    isPath: function isPath(value) {
      return window.location.hash.split('?')[0] === '#' + this.fixPath(value);
    },
    containPath: function containPath(value) {
      return window.location.hash.split('?')[0].indexOf('#' + this.fixPath(value)) !== -1;
    },
    doHome: function doHome() {
      if (this._home) {
        location.hash = this._home;
      }

      return this;
    },
    doMain: function doMain(data) {
      if (this._main) {
        if (data) {
          this.clear().set(data);
        }

        location.hash = this.fixRelativePath(this._main);
      }

      return this;
    },
    getPath: function getPath() {
      return location.hash.slice(1);
    },
    clear: function clear() {
      return this.getEngine().clear(), this;
    },
    reset: function reset() {
      return this.clear(), this;
    },
    setEngine: function setEngine(engine) {
      return this._engine = engine, this;
    },
    getEngine: function getEngine() {
      var _engine = this._engine || 'sessionStorage'; // Cookie, sessionStorage, localStorage


      if (_engine && typeof _engine == 'string') {
        _engine = window[_engine];
      }

      return _engine;
    },
    setKey: function setKey(key) {
      return this._key = key, this;
    },
    getKey: function getKey() {
      return this._key || 'WEB_LOGIN_SESSION';
    },
    setKeyValue: function setKeyValue(key, value, timeout) {
      var _value = _typeof(value) == 'object' ? JSON.stringify(value) : value;

      return this.getEngine().setItem(key, _value, timeout), this;
    },
    getKeyValue: function getKeyValue(key) {
      return this.getEngine().getItem(key);
    },
    removeKeyValue: function removeKeyValue(key) {
      return this.getEngine().removeItem(key), this;
    },
    jsonKeyValue: function jsonKeyValue(value) {
      var _value = this.getKeyValue(value);

      if (_value) {
        try {
          _value = JSON.parse(_value);
        } catch (e) {
          _value = {};
          console.log(e.stack);
        }
      }

      return _value;
    },
    set: function set(value, timeout) {
      return this.setKeyValue(this.getKey(), value, timeout);
    },
    get: function get() {
      return this.getKeyValue(this.getKey());
    },
    json: function json(name) {
      var _value = this.get();

      if (_value) {
        try {
          _value = JSON.parse(_value);
        } catch (e) {
          _value = null;
          console.log(e.stack);
        }
      }

      return _value;
    },
    validate: function validate() {
      if (this.json()) {
        return true;
      } else {
        return this.doHome(), false;
      }
    }
  }
});

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Alert.js": 130,
	"./Modal.js": 132,
	"./ModalBackup.js": 135,
	"./Modals.js": 136,
	"./Notification.js": 138,
	"./Notify.js": 140,
	"./Popover.js": 142,
	"./Popup.js": 144,
	"./Preloader.js": 146,
	"./Ripple.js": 148,
	"./Toast.js": 149,
	"./Tooltip.js": 151,
	"./index.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 129;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(131);

var React = __webpack_require__(0);

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

    if (this.props.onClick) {
      this.props.onClick(item, index, this);
    }

    if (item.onClick) {
      item.onClick(item, index, this);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-alert', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), /*#__PURE__*/React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
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
  zn.modal.open( /*#__PURE__*/React.createElement(Alert, _extends({
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

  zn.modal.open( /*#__PURE__*/React.createElement(Alert, {
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
  var _input = /*#__PURE__*/React.createElement("input", {
    className: "alert-input",
    type: "text"
  });

  zn.modal.open( /*#__PURE__*/React.createElement(Alert, {
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
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-dialog', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title)), /*#__PURE__*/React.createElement("div", {
      className: "dialog-body"
    }, this.props.content));
  }
});

zn.dialog = function (argv) {
  return zn.modal.middle( /*#__PURE__*/React.createElement(Dialog, argv));
};

zn.dialog.form = function (argv) {
  return zn.dialog({
    title: argv.title || '',
    content: /*#__PURE__*/React.createElement(zn.react.Form, argv)
  });
};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(133);

var ReactDOM = __webpack_require__(1);

var Animate = __webpack_require__(5);

module.exports = zn.modal = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-modal"
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
        if (this.child && this.child["in"]) {
          this.child["in"]();
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

      return this.open( /*#__PURE__*/React.createElement("div", {
        className: "modal-middle",
        style: zn.extend({
          visibility: 'hidden'
        }, _config.style)
      }, content, _config.closeable && /*#__PURE__*/React.createElement("i", {
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
      return this.open( /*#__PURE__*/React.createElement("div", {
        className: "modal-full"
      }, content, /*#__PURE__*/React.createElement("i", {
        onClick: this.close.bind(this),
        className: "close fa fa-times zr-hover-self-loading"
      })), config);
    },
    open: function open(content, config) {
      this.config = zn.extend({
        isMode: false,
        showOverlay: true
      }, config);

      if (this.config["in"] && this.config.out) {
        this.child = ReactDOM.render( /*#__PURE__*/React.createElement(Animate, _extends({}, config, {
          onOut: this.__out
        }), content), this._dom);
      } else {
        this.child = ReactDOM.render(content, this._dom);
      }

      this.content = this._dom.firstChild;

      if (this.content) {
        if (this.content.classList.contains('zr-animate')) {
          this.content = this.content.firstChild;
        }

        if (this.config.className) {
          this.content.classList.add(this.config.className);
        }
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
      if (this.content) {
        if (typeof styles == 'function') {
          styles = styles(this.content, this);
        }

        if (styles) {
          zn.dom.setStyles(this.content, styles);
        }
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

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ReactDOM = __webpack_require__(1);

var Animate = __webpack_require__(5);

module.exports = zn.modal = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-modal"
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
        if (this.child && this.child["in"]) {
          this.child["in"]();
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

      return this.open( /*#__PURE__*/React.createElement("div", {
        className: "modal-middle",
        style: zn.extend({
          visibility: 'hidden'
        }, _config.style)
      }, content, _config.closeable && /*#__PURE__*/React.createElement("i", {
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
      return this.open( /*#__PURE__*/React.createElement("div", {
        className: "modal-full"
      }, content, /*#__PURE__*/React.createElement("i", {
        onClick: this.close.bind(this),
        className: "close fa fa-times zr-hover-self-loading"
      })), config);
    },
    open: function open(content, config) {
      this.config = zn.extend({
        isMode: false,
        showOverlay: true
      }, config);

      if (this.config["in"] && this.config.out) {
        this.child = ReactDOM.render( /*#__PURE__*/React.createElement(Animate, _extends({}, config, {
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

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);

var ReactDOM = __webpack_require__(1);

var Animate = __webpack_require__(5);

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

      var _modal = ReactDOM.render( /*#__PURE__*/React.createElement(Notify, {
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

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

var TYPE_ICONS = {
  heart: 'fa-heart',
  secondary: 'fa-comment',
  success: 'fa-check',
  warning: 'fa-exclamation',
  error: 'fa-times',
  info: 'fa-info'
};
var Notification = React.createClass({
  displayName: 'Notification',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);
      }
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-notification notification-in', this.props.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + TYPE_ICONS[this.props.type || 'info']
    })), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content), /*#__PURE__*/React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = zn.notification = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": 'zr-notification-container'
      });
    },
    open: function open(type, content, delay) {
      var _dom = document.createElement('div');

      ReactDOM.render( /*#__PURE__*/React.createElement(Notification, {
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
    }
  }
});

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

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
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-notify notify-in', this.props.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + TYPE_ICONS[this.props.type || 'info']
    })), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content), /*#__PURE__*/React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = zn.notify = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": 'zr-notify-container'
      });
    },
    open: function open(type, content, delay) {
      var _dom = document.createElement('div');

      ReactDOM.render( /*#__PURE__*/React.createElement(Notify, {
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

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(143);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

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

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName, this.props.className),
      style: zn.extend(this.props.style, _style)
    }, this.props.closeable && /*#__PURE__*/React.createElement("i", {
      className: "popover-close fa fa-close zr-hover-self-loading"
    }), this.props.content);
  }
});
module.exports = zn.popover = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-popover-container"
      });
      zn.react.global.onJump(function () {
        this.close();
      }, this);
    },
    render: function render(content, options) {
      if (options && options.reset) {
        this.close('zn.popover:render');
      }

      return this._popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
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

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);

var React = __webpack_require__(0);

module.exports = zn.popup = zn.Class({
  "static": true,
  methods: {
    dialog: function dialog(title, content) {}
  }
});

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);

var React = __webpack_require__(0);

var Preloader = React.createClass({
  displayName: 'Preloader',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '正在加载中...'
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-preloader', this.props.className)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spinner zr-self-loading"
    }), /*#__PURE__*/React.createElement("span", null, this.props.content || this.props.title));
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
      zn.modal.open( /*#__PURE__*/React.createElement(Preloader, argv), {
        className: overlay ? 'overlay' : ''
      });
    },
    close: function close() {
      zn.modal.close();
    }
  }
});

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = zn.ripple = zn.Class({
  methods: {
    init: function init() {
      document.addEventListener('click', this.__addRippleEffect.bind(this), false);
    },
    __addRippleEffect: function __addRippleEffect(event) {
      var _target = event.target;

      if (!_target.classList.contains('zr-action-ripple')) {
        return false;
      }

      var _rect = _target.getBoundingClientRect(),
          _ripple = _target.querySelector('.zr-ripple');

      if (!_ripple) {
        _ripple = document.createElement('span');
        _ripple.className = 'zr-ripple';
        _ripple.style.height = _ripple.style.width = Math.max(_rect.width, _rect.height) + 'px';

        _target.appendChild(_ripple);
      }

      _ripple.classList.remove('show');

      var _top = event.pageY - _rect.top - _ripple.offsetHeight / 2 - document.body.scrollTop;

      var _left = event.pageX - _rect.left - _ripple.offsetWidth / 2 - document.body.scrollLeft;

      _ripple.style.top = _top + 'px';
      _ripple.style.left = _left + 'px';

      _ripple.classList.add('show');
    }
  }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

var Toast = React.createClass({
  displayName: 'Toast',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('toast-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-toast toast-in', this.props.type)
    }, this.props.content);
  }
});
module.exports = zn.toast = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-toast-container"
      });
    },
    open: function open(type, content, delay) {
      var _dom = document.createElement('div');

      ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
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
      return this.open('danger', content, delay);
    },
    info: function info(content, delay) {
      return this.open('info', content, delay);
    }
  }
});

/***/ }),
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(152);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

var Tooltip = React.createClass({
  displayName: 'Tooltip',
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);
    this.fixPosition(this.props.target);
  },
  fixPosition: function fixPosition(target) {
    var _domWidth = this._dom.offsetWidth,
        _domHeight = this._dom.offsetHeight,
        _target = zn.dom.getPosition(target),
        _left = null,
        _top = null,
        _className = '';

    if (_target.x + _domWidth > document.body.scrollWidth) {
      _left = _target.width - _domWidth;
    } else {
      _left = _target.x + (_target.width - _domWidth) / 2;
    }

    if (_target.y + _domHeight > document.body.scrollHeight) {
      _top = _target.y - _domHeight - 16;
      _className = 'zr-arrow-direction-bottom';
    } else {
      _top = _target.y + _target.height + 16;
      _className = 'zr-arrow-direction-top';
    }

    if (_left < 0) {
      _className = 'zr-arrow-direction-left';
      _left = _target.x + _target.width + 4;
      _top = _target.y + 4;
    }

    this._dom.style.top = _top + 'px';
    this._dom.style.left = _left + 'px';
    _className && this._dom.classList.add(_className);
  },
  close: function close() {
    if (this._dom) {
      if (this._dom.parentNode) {
        this._dom.parentNode.removeChild(this._dom);
      }

      this._dom = null;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className),
      style: this.props.style
    }, this.props.content);
  }
});
zn.tooltip = zn.Class({
  "static": true,
  methods: {
    init: function init() {
      this._dom = zn.dom.createRootElement("div", {
        "class": "zr-tooltip-container"
      });
      window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
      window.addEventListener('resize', this.__onWindowResize.bind(this), false);
    },
    __onWindowResize: function __onWindowResize() {
      zn.tooltip.close('tooltip:window.resizing');
      zn.popover.close('tooltip:window.resizing');
    },
    __onWindowMouseOver: function __onWindowMouseOver(event) {
      var _target = event.target;

      if (_target && _target.getAttribute && _target.getAttribute('data-tooltip')) {
        if (this._tooltip && this._tooltip.props.target !== _target) {
          this.close();
        }

        this.render(_target.getAttribute('data-tooltip'), {
          target: _target
        });
      } else {
        this.close();
      }
    },
    render: function render(content, options) {
      this._tooltip = ReactDOM.render( /*#__PURE__*/React.createElement(Tooltip, _extends({}, options, {
        content: content
      })), this._dom);
    },
    close: function close() {
      if (this._tooltip) {
        this._tooltip.close();

        this._tooltip = null;
      }

      return this;
    }
  }
});
module.exports = Tooltip;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ActivityLayout.js": 15,
	"./FixedLayout.js": 16,
	"./index.js": 14
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 153;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Animate.js": 5,
	"./Bubble.js": 159,
	"./Button.js": 18,
	"./ButtonGroup.js": 8,
	"./Card.js": 165,
	"./DataLoader.js": 167,
	"./DownPuller.js": 9,
	"./Dropdown.js": 4,
	"./DropdownList.js": 171,
	"./ErrorPage.js": 177,
	"./ExpressDetail.js": 179,
	"./Files.js": 181,
	"./FixedPage.js": 183,
	"./Group.js": 185,
	"./Icon.js": 19,
	"./Icons.js": 188,
	"./Image.js": 190,
	"./LoadingView.js": 192,
	"./Page.js": 194,
	"./Panel.js": 196,
	"./ProgressRing.js": 198,
	"./RTFlexItem.js": 20,
	"./RTItem.js": 2,
	"./RTList.js": 3,
	"./Search.js": 21,
	"./Slider.js": 202,
	"./Timer.js": 204,
	"./Title.js": 206,
	"./Uploader.js": 208,
	"./Watcher.js": 210,
	"./WebSpeech.js": 212,
	"./index.js": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 158;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Bubble',
  getInitialState: function getInitialState() {
    return {
      active: this.props.active || false,
      direction: 'top'
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-bubble"
    });
  }
});

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);

var React = __webpack_require__(0);

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
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-card', this.props.className),
      style: zn.extend({
        width: this.props.width
      }, this.props.style)
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-header"
    }, this.props.icon && /*#__PURE__*/React.createElement("i", {
      className: 'icon fa ' + this.props.icon
    }), this.props.title && /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, this.props.title), this.props.rightRender && /*#__PURE__*/React.createElement("div", {
      className: "right-content"
    }, this.__rightRender())), /*#__PURE__*/React.createElement("div", {
      className: "card-body"
    }, this.props.children));
  }
});

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(168);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'DataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      content: 'Loding......',
      className: ''
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-data-loader ' + this.props.className
    }, /*#__PURE__*/React.createElement("div", {
      className: "loader",
      "data-loader": this.props.loader
    }), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(172);

var React = __webpack_require__(0);

var Dropdown = __webpack_require__(4);

var ListView = __webpack_require__(6);

module.exports = React.createClass({
  displayName: 'DropdownList',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      autoFixPosition: true,
      triggerEvent: 'click',
      popoverWidth: 100
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, this.props, {
      className: "zr-dropdown-list " + this.props.className
    }), /*#__PURE__*/React.createElement("div", {
      className: "dropdown-list-trigger"
    }, this.props.children), /*#__PURE__*/React.createElement(ListView, _extends({}, this.props, {
      onItemClick: this.__onListItemClick
    })));
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'ErrorPage',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-error-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "title"
    }, "ERROR: 404 Not Found"), /*#__PURE__*/React.createElement("div", {
      className: "detail"
    }, "URI: ", /*#__PURE__*/React.createElement("a", {
      href: '#' + this.props.request.path
    }, this.props.request.path))));
  }
});

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'ExpressDetail',
  render: function render() {
    var _data = this.props.data.slice(0).sort(function (m, n) {
      return new Date(m.ftime).getTime() - new Date(n.ftime).getTime();
    });

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-express-detail", this.props.className)
    }, _data.map(function (item, index) {
      return /*#__PURE__*/React.createElement("ul", {
        className: "detail-item"
      }, /*#__PURE__*/React.createElement("li", {
        className: "time"
      }, item.ftime), /*#__PURE__*/React.createElement("li", {
        className: "dot"
      }), /*#__PURE__*/React.createElement("li", {
        className: "context"
      }, item.context));
    }));
  }
});

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(182);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Files',
  getInitialState: function getInitialState() {
    return {};
  },
  __onPreview: function __onPreview(item) {
    zn.modal.full( /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    }, this.__renderPreviewFileByType(item.split('.').pop().toLowerCase(), item)));
  },
  __renderContent: function __renderContent(item) {
    var _this = this;

    var _temp = this.props.onFileRender && this.props.onFileRender(item);

    if (_temp) {
      return _temp;
    }

    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return _this.__onPreview(item);
      }
    }, this.__renderFileByType(item.split('.').pop().toLowerCase(), item));
  },
  __renderPreviewFileByType: function __renderPreviewFileByType(type, value) {
    if (this.props.isImage) {
      return /*#__PURE__*/React.createElement("img", {
        src: zn.http.fixURL(value)
      });
    }

    switch (type) {
      case 'bmp':
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'gif':
        return /*#__PURE__*/React.createElement("img", {
          src: zn.http.fixURL(value)
        });

      case 'mp4':
      case 'mpg':
      case 'mpeg':
      case 'mov':
      case 'ogg':
      case 'avi':
      case 'aac':
      case 'aiff':
      case 'qt':
      case 'viv':
        return /*#__PURE__*/React.createElement("video", {
          width: "100%",
          height: "100%",
          preload: "auto",
          loop: "loop",
          autoplay: "autoplay",
          controls: "controls"
        }, /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/ogg"
        }), /*#__PURE__*/React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/mp4"
        }), "Your browser does not support the video tag.");

      default:
        return value.split('/').pop();
    }
  },
  __getFileTypeRender: function __getFileTypeRender(value, type) {
    var _this2 = this;

    var _file = value.split('/').pop();

    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(event) {
        return _this2.__onPreview(value);
      },
      className: "office-file"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon fa fa-" + (type || 'file')
    }), /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: zn.http.fixURL(value) + "?download=true",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      "data-tooltip": _file,
      className: "name"
    }, _file.substring(_file.length - 8, _file.length)));
  },
  __renderFileByType: function __renderFileByType(type, value) {
    if (this.props.isImage) {
      return /*#__PURE__*/React.createElement("img", {
        src: zn.http.fixURL(value)
      });
    }

    switch (type) {
      case 'doc':
      case 'docx':
        return this.__getFileTypeRender(value, 'file');

      case 'xls':
      case 'xlsx':
        return this.__getFileTypeRender(value, 'file');

      case 'ppt':
      case 'pptx':
        return this.__getFileTypeRender(value, 'file');

      case 'pdf':
        return this.__getFileTypeRender(value, 'file');

      case 'bmp':
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'gif':
        return /*#__PURE__*/React.createElement("img", {
          src: zn.http.fixURL(value)
        });

      case 'mp4':
      case 'mpg':
      case 'mpeg':
      case 'mov':
      case 'ogg':
      case 'avi':
      case 'aac':
      case 'aiff':
      case 'qt':
      case 'viv':
        return this.__getFileTypeRender(value, 'video-camera');

      default:
        return value.split('/').pop();
    }
  },
  __onRemove: function __onRemove(item, index) {
    this.state.value = this.state.value.replace(item, '');
    this.forceUpdate();
  },
  __fileRender: function __fileRender(file, index) {
    if (!file) {
      return null;
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "file"
    }, this.__renderContent(file));
  },
  render: function render() {
    var _value = this.props.value || [];

    if (zn.is(_value, 'string')) {
      _value = _value.split(',');
    }

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-files", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("ul", {
      className: "files"
    }, _value.map(this.__fileRender)));
  }
});

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);

var React = __webpack_require__(0);

var ButtonGroup = __webpack_require__(8);

var FixedLayout = __webpack_require__(16);

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

    return /*#__PURE__*/React.createElement(FixedLayout, {
      className: zn.react.classname('zr-fixed-page', zn.react.isMobile() ? 'page-mobile' : 'page-pc', this.props.className),
      direction: "top-bottom",
      begin: _begin,
      end: this.props.footerView ? this.props.end : 0,
      hStyle: this.props.hStyle,
      bStyle: this.props.bStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-header",
      style: {
        lineHeight: '30px'
      }
    }, this.props.canBack && /*#__PURE__*/React.createElement("i", {
      className: "back fa " + this.props.icon,
      onClick: this.__onBack
    }), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "btns"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      className: "zr-flex",
      items: this.props.toolbarItems,
      onClick: this.props.onToolbarClick
    }))), /*#__PURE__*/React.createElement("div", {
      className: "page-body"
    }, this.props.children), this.props.end && this.props.footerView && /*#__PURE__*/React.createElement("div", {
      className: "page-footer"
    }, this.props.footerView));
  }
});

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Group',
  getInitialState: function getInitialState() {
    return {
      active: true
    };
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      "data-active": this.state.active,
      style: this.props.style,
      className: zn.react.classname("zr-group", this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "g-header",
      on: true
    }, /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      },
      className: "title"
    }, this.props.title)), /*#__PURE__*/React.createElement("div", {
      className: "g-inner-content"
    }, this.props.children));
  }
});

/***/ }),
/* 186 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(189);

var React = __webpack_require__(0);

var Icon = __webpack_require__(19);

module.exports = React.createClass({
  displayName: 'Icons',
  __onClick: function __onClick(props, icon, event) {
    this.props.onClick && this.props.onClick(props, icon, this, event);
  },
  render: function render() {
    var _data = this.props.data || this.props.items || [];

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-icons', this.props.className)
    }, _data.map(function (item, index) {
      var _this = this;

      item.index = index;
      return /*#__PURE__*/React.createElement(Icon, _extends({
        key: index,
        onClick: function onClick(icon, event) {
          return _this.__onClick(item, icon, event);
        }
      }, item));
    }.bind(this)));
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191);

var React = __webpack_require__(0);

var LOADING = "";
module.exports = React.createClass({
  displayName: 'Image',
  getInitialState: function getInitialState() {
    return {
      src: LOADING
    };
  },
  getImageData: function getImageData(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      var reader = new FileReader();

      reader.onloadend = function () {
        callback(reader.result);
      };

      reader.readAsDataURL(xhr.response);
    };

    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  },
  componentDidMount: function componentDidMount() {
    /*
    var _image = new Image(),
    	_src = this.props.src;
    if(_src.charAt(0) == '/'){
    	_src = zn.http.fixURL(_src);
    }
    this.getImageData(_src, function (data){
    	this.setState({
    		src: data
    	});
    }.bind(this));*/
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("img", {
      className: zn.react.classname("zr-image", this.props.className),
      style: this.props.style,
      src: this.props.src
    });
  }
});

/***/ }),
/* 191 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);

var React = __webpack_require__(0);

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
      return /*#__PURE__*/React.createElement(zn.react.DataLoader, this.props);
    }
  }
});

/***/ }),
/* 193 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(195);

var React = __webpack_require__(0);

var Page = React.createClass({
  displayName: 'Page',
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
    var __props = this.props;
    var _begin = __props.height;

    if (zn.react.isIOS()) {//_begin += 10;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-page', __props.className),
      style: __props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-header",
      style: {
        height: _begin
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "header-left"
    }, __props.canBack && /*#__PURE__*/React.createElement("i", {
      className: "back fa " + __props.icon,
      onClick: this.__onBack
    }), /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, __props.title)), __props.headerCenter && /*#__PURE__*/React.createElement("div", {
      className: "header-center"
    }, __props.headerCenter), /*#__PURE__*/React.createElement("div", {
      className: "header-right"
    }, this.props.rightView, /*#__PURE__*/React.createElement(zn.react.ButtonGroup, {
      className: "zr-flex",
      items: __props.toolbarItems,
      onClick: __props.onToolbarClick
    }))), /*#__PURE__*/React.createElement("div", {
      className: "page-body"
    }, this.props.loading ? /*#__PURE__*/React.createElement(zn.react.DataLoader, {
      loader: "timer",
      content: "\u52A0\u8F7D\u4E2D..."
    }) : this.props.children), !this.props.loading && !!this.props.footerView && /*#__PURE__*/React.createElement("div", {
      className: "page-footer"
    }, this.props.footerView));
  }
});
Page.defaultProps = {
  icon: 'fa-angle-left',
  height: 32,
  end: 32,
  flex: false,
  canBack: true,
  loading: false
};
module.exports = Page;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);

var React = __webpack_require__(0);

var Panel = React.createClass({
  displayName: 'Panel',
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'c-default'
    };
  },
  __onClose: function __onClose() {
    this.props.onClose && this.props.onClose();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-panel  " + this.props.className,
      style: this.props.style
    }, this.props.enableClose && /*#__PURE__*/React.createElement("i", {
      onClick: this.props.onClose,
      className: "zr-panel-close fa fa-close"
    }), this.props.children);
  }
});
Panel.Header = React.createClass({
  displayName: 'PanelHeader',
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-panel-header " + this.props.className,
      style: this.props.style
    }, this.props.icon && /*#__PURE__*/React.createElement("i", {
      className: "icon fa " + this.props.icon
    }), this.props.title && /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, this.props.title), this.props.children);
  }
});
Panel.Body = React.createClass({
  displayName: 'PanelHeader',
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-panel-body " + this.props.className,
      style: this.props.style
    }, this.props.children);
  }
});
module.exports = Panel;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(199);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'ProgressRing',
  getDefaultProps: function getDefaultProps() {
    return {
      full: true,
      style: null,
      className: '',
      trackColor: '#f0f0f0',
      valueColor: '#6ec84e',
      value: 20,
      duration: 1500
    };
  },
  getInitialState: function getInitialState() {
    return {
      leftStyle: {},
      rightStyle: {},
      coverStyle: {}
    };
  },
  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this.refs.cover).getBoundingClientRect();
    this.setState({
      leftStyle: this.__leftStyle(),
      rightStyle: this.__rightStyle(),
      coverStyle: this.__coverStyle()
    });
  },
  getValue: function getValue() {
    return this.props.value;
  },
  __leftStyle: function __leftStyle() {
    var _value = this.props.value,
        _duration = this.props.duration;
    return {
      transform: 'rotate(' + _value * 3.6 + 'deg)',
      OTransform: 'rotate(' + _value * 3.6 + 'deg)',
      msTransform: 'rotate(' + _value * 3.6 + 'deg)',
      MozTransform: 'rotate(' + _value * 3.6 + 'deg)',
      WebkitTransform: 'rotate(' + _value * 3.6 + 'deg)',
      Transition: 'transform ' + _duration + 'ms linear',
      OTransition: '-o-transform ' + _duration + 'ms linear',
      msTransition: '-ms-transform ' + _duration + 'ms linear',
      MozTransition: '-moz-transform ' + _duration + 'ms linear',
      WebkitTransition: '-webkit-transform ' + _duration + 'ms linear'
    };
  },
  __rightStyle: function __rightStyle() {
    if (this.props.value > 50) {
      return {
        opacity: 1,
        animation: 'toggle ' + this.props.duration * 50 / this.props.value + 'ms',
        animationTimingFunction: 'step-end'
      };
    } else {
      return {};
    }
  },
  __coverStyle: function __coverStyle() {
    if (this.props.value > 50) {
      return {
        opacity: 0,
        animation: 'toggle ' + this.props.duration * 50 / this.props.value + 'ms',
        animationTimingFunction: 'step-start'
      };
    } else {
      return {};
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-progress-ring " + this.props.className,
      "data-full": this.props.full,
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-track",
      style: {
        borderColor: this.props.trackColor
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "progress-left",
      style: zn.extend({
        borderColor: this.props.valueColor
      }, this.state.leftStyle)
    }), /*#__PURE__*/React.createElement("div", {
      className: "progress-right",
      style: zn.extend({
        borderColor: this.props.valueColor
      }, this.state.rightStyle)
    }), /*#__PURE__*/React.createElement("div", {
      className: "progress-cover",
      ref: "cover",
      style: zn.extend({
        borderColor: this.props.trackColor
      }, this.state.coverStyle)
    }), /*#__PURE__*/React.createElement("div", {
      className: "progress-text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "progress-num"
    }, (+this.props.value || 0).toFixed(1)), /*#__PURE__*/React.createElement("span", {
      className: "progress-percent"
    }, "%")));
  }
});

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 200 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(203);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

var SliderItem = React.createClass({
  displayName: 'SliderItem',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('slider-item', this.props.className),
      style: this.props.style
    }, this.props.children);
  }
});
var Slider = React.createClass({
  displayName: 'Slider',
  getDefaultProps: function getDefaultProps() {
    return {
      loop: true,
      triggerValue: 60,
      autoPlayInterval: 2000,
      onSlidingStart: function onSlidingStart() {},
      onSliding: function onSliding() {},
      onSlidingEnd: function onSlidingEnd() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      step: 0,
      xValue: 0,
      yValue: 0,
      sliding: false,
      currentIndex: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this._touching = false;

    this.__bindEvents();

    if (this.props.autoPlayInterval) {
      this.startAutoPlay();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.stopAutoPlay();
  },
  size: function size() {
    return this._container.firstChild.childNodes.length - 2;
  },
  __bindEvents: function __bindEvents() {
    var _container = this._container = ReactDOM.findDOMNode(this);

    this._width = _container.clientWidth;
    this._height = _container.clientHeight; //touch event

    _container.addEventListener('touchstart', this.__startHandler, false);

    _container.addEventListener('touchmove', this.__moveHandler, false);

    _container.addEventListener("touchend", this.__endHandler, false);

    document.addEventListener('touchmove', function (event) {
      //event.preventDefault();
      event.stopPropagation();
    }, false); //mouse event

    _container.addEventListener('mousedown', this.__startHandler, false);

    _container.addEventListener('mousemove', this.__moveHandler, false);

    _container.addEventListener("mouseup", this.__endHandler, false);

    document.addEventListener('mousemove', function (event) {
      //event.preventDefault();
      event.stopPropagation();
    }, false);
  },
  __getEventPoint: function __getEventPoint(event) {
    var _x = event.pageX,
        _y = event.pageY;

    if (event.targetTouches) {
      _x = event.targetTouches[0].pageX;
      _y = event.targetTouches[0].pageY;
    }

    return {
      x: _x,
      y: _y
    };
  },
  __easing: function __easing(value, maxValue) {
    return maxValue / 2.5 * Math.sin(value / maxValue * (Math.PI / 2));
  },
  __fixIndex: function __fixIndex(index) {
    if (index < 0) {
      return this._size - 1;
    } else if (index > this._size - 1) {
      return 0;
    }

    return index;
  },
  __startHandler: function __startHandler(event) {
    /*
    if(this._touching || this.state.sliding){
        return false;
    }*/
    this._size = this.size();
    this.stopAutoPlay();

    if (this.state.xValue || this.state.yValue) {
      this.__onTransitionEnd();
    }

    this._touching = true;
    this._start = this.__getEventPoint(event);
    this.setState({
      sliding: false
    });
  },
  __moveHandler: function __moveHandler(event) {
    if (this._touching) {
      var _point = this.__getEventPoint(event);

      var _result = this.props.onMove && this.props.onMove(this._start, _point);

      if (_result !== false) {
        var _vx = _point.x - this._start.x,
            _vy = _point.y - this._start.y,
            _realX,
            _realY;
        /*
        if(_vy > this.props.triggerValue){
            _vy = this.props.triggerValue + (_vy - this.props.triggerValue)/3;
        }*/


        if (!this.props.loop) {
          if (this.state.currentIndex == 0) {
            if (_vx > 0) {
              _realX = this.__easing(_vx, this._width);
            }

            if (_vy > 0) {
              _realY = this.__easing(_vy, this._height);
            }
          } else if (this.state.currentIndex == this._size - 1) {
            if (_vx < 0) {
              _realX = -this.__easing(-_vx, this._width);
            }

            if (_vy < 0) {
              _realY = -this.__easing(-_vy, this._height);
            }
          }
        }

        if (Math.abs(_vx) > 5 && !_realX) {
          _realX = _vx;
        }

        if (Math.abs(_vy) > 5 && !_realY) {
          _realY = _vy;
        }

        if (_realX || _realY) {
          event.preventDefault();
          this.setState({
            xValue: _realX,
            yValue: _realY
          });
        }
      }
    }
  },
  __endHandler: function __endHandler(event) {
    if (this._touching) {
      this._touching = false; //return;

      var _able = Math.abs(this.state.xValue) > this.props.triggerValue;

      if (!this.props.loop) {
        if (this.state.currentIndex == 0 && this.state.xValue > 0 || this.state.currentIndex == this._size - 1 && this.state.xValue < 0) {
          if (_able) {
            this.props.onSlidingEnd && this.props.onSlidingEnd(this.state.currentIndex);
          }

          return this.step(0);
        }
      }

      if (_able) {
        this.step(this.state.xValue > 0 ? -1 : 1);
      } else {
        this.step(0);
      }
    }
  },
  stopAutoPlay: function stopAutoPlay() {
    if (!this.props.autoPlayInterval || !this._autoPlayIntervalId) {
      return;
    }

    clearInterval(this._autoPlayIntervalId);
    this._autoPlayIntervalId = 0;
  },
  startAutoPlay: function startAutoPlay() {
    if (this._autoPlayIntervalId || !this.props.autoPlayInterval) {
      return;
    }

    this._autoPlayIntervalId = setInterval(function () {
      if (this._size > 1) {
        this.step(1);
      }
    }.bind(this), this.props.autoPlayInterval);
  },
  step: function step(value) {
    if (this.state.step) {
      this.__onTransitionEnd();
    }

    var _update = {
      sliding: true
    };

    if (value) {
      _update.step = value;
    } else {
      _update.xValue = 0;
    }

    this.setState(_update);
  },
  __onTransitionEnd: function __onTransitionEnd() {
    this.setState({
      step: 0,
      xValue: 0,
      sliding: false,
      currentIndex: this.__fixIndex(this.state.currentIndex + this.state.step)
    });
    this.startAutoPlay();
  },
  __preChildrenHandler: function __preChildrenHandler() {
    var _children = this.props.children;

    if (!_children.length) {
      _children = [_children];
    }

    return _children.slice(-1).concat(_children).concat(_children[0]);
  },
  render: function render() {
    var _transitionX = this.state.step ? -this.state.step * 33.333 + '%' : this.state.xValue + 'px';

    var _children = this.__preChildrenHandler(),
        _currentIndex = this.state.currentIndex,
        _size = _children.length,
        _diff = null;

    if (_size < 2) {
      return;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-slider ' + (this.props.loop ? '' : 'no-loop'),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: 'slider-views ' + (this.state.sliding ? 'sliding' : ''),
      onTransitionEnd: this.__onTransitionEnd,
      style: {
        WebkitTransform: 'translate3d(' + _transitionX + ',0,0)'
      }
    }, _children.map(function (child, index) {
      _diff = index - _currentIndex;
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: _diff >= 0 && _diff <= 2 ? 'rs-item' : 'rs-hidden'
      }, child);
    })), /*#__PURE__*/React.createElement("div", {
      className: "slider-dots"
    }, Array(_size - 2).fill(1).map(function (value, index) {
      return /*#__PURE__*/React.createElement("i", {
        className: 'dot ' + (index == _currentIndex ? 'curr' : ''),
        key: index
      });
    })));
  }
});
Slider.Item = SliderItem;
module.exports = Slider;

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(205);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      hour: 0,
      minute: 5,
      second: 0,
      timing: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      hour: this.props.hour,
      minute: this.props.minute,
      second: this.props.second
    };
  },
  componentDidMount: function componentDidMount() {
    this.start();
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._interval) {
      window.clearInterval(this._interval);
      this._interval = null;
    }
  },
  start: function start() {
    var _this = this;

    if (this._interval) {
      window.clearInterval(this._interval);
    }

    this._interval = setInterval(function () {
      return _this.timing();
    }, 1000);
  },
  getText: function getText() {
    var _value = '';

    if (!!this.state.hour) {
      _value += this.__fixValue(this.state.hour) + ':';
    }

    if (!!this.state.minute) {
      _value += this.__fixValue(this.state.minute) + ':';
    }

    if (!!this.state.second) {
      _value += this.__fixValue(this.state.second) + ':';
    }

    return _value;
  },
  restart: function restart() {
    this.setState({
      hour: this.props.hour,
      minute: this.props.minute,
      second: this.props.second,
      timing: true
    });
    this.start();
  },
  getValue: function getValue() {},
  timing: function timing() {
    if (!this.props.timing) {
      return;
    }

    if (this.state.second == 0) {
      if (this.state.minute) {
        this.state.minute = this.state.minute - 1;
        this.state.second = 59;
      } else {
        if (this.state.hour) {
          this.state.hour = this.state.hour - 1;
          this.state.minute = 59;
          this.state.second = 59;
        } else {
          this.state.hour = 0;
          this.state.minute = 0;
          this.state.second = 0;
          window.clearInterval(this._interval);
          this._interval = null;
          this.props.onEnd && this.props.onEnd();
        }
      }
    } else {
      this.state.second = this.state.second - 1;
    }

    this.forceUpdate();
  },
  __fixValue: function __fixValue(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return value;
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-timer"
    }, !!this.state.hour && /*#__PURE__*/React.createElement("span", {
      className: "hour"
    }, this.__fixValue(this.state.hour) + ':'), /*#__PURE__*/React.createElement("span", {
      className: "minute"
    }, this.__fixValue(this.state.minute) + ':'), /*#__PURE__*/React.createElement("span", {
      className: "second"
    }, this.__fixValue(this.state.second)));
  }
});

/***/ }),
/* 205 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(207);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Title',
  render: function render() {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: zn.react.classname("zr-title", this.props.className, this.props.type)
    }, this.props.attrs), this.props.value);
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Uploader',
  getDefaultProps: function getDefaultProps() {
    return {
      placeholder: '选择文件',
      hiddens: {},
      multipart: false
    };
  },
  getInitialState: function getInitialState() {
    this._target = 'uploader-target_' + new Date().getTime();
    return {
      uploading: false,
      placeholder: this.props.placeholder,
      hiddens: this.props.hiddens,
      value: this.props.value,
      previewURL: null,
      files: []
    };
  },
  componentDidMount: function componentDidMount() {},
  setHidden: function setHidden(key, value) {
    this.state.hiddens[key] = value;
    this.setState({
      hiddens: this.state.hiddens
    });
  },
  __onIFrameLoad: function __onIFrameLoad(event) {
    var _target = event.target,
        _data = '';

    if (_target.contentWindow) {
      _data = _target.contentWindow.document.body ? _target.contentWindow.document.body.innerHTML : null;
    } else if (_target.contentDocument) {
      _data = _target.contentDocument.document.body ? _target.contentDocument.document.body.innerHTML : null;
    }

    var _search = _target.contentWindow.location.search;
    _data = decodeURI(_search.split('?').pop());

    var _file = _data.split('=');

    if (this.props.multipart) {
      this.state.files.push(_file[1]);
    }

    this.setState({
      placeholder: this.props.placeholder,
      files: this.state.files,
      uploading: false
    });
    this.props.onChange && this.props.onChange(event, _file[1], this);
    return this.props.onUploaderChange && this.props.onUploaderChange(event, data, this);
  },
  __onInputChange: function __onInputChange(event) {
    var _files = event.nativeEvent.target.files;
    var _value = _files[0].name;
    this.setState({
      uploading: true,
      previewURL: URL.createObjectURL(_files[0])
    });

    var _dom = ReactDOM.findDOMNode(this);

    _dom.submit();

    _dom.reset();
  },
  __onDeleteFile: function __onDeleteFile(item, index) {
    this.state.files.splice(index, 1);
    this.forceUpdate();
  },
  __inputRender: function __inputRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: "input choose-file"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-file"
    }), /*#__PURE__*/React.createElement("i", {
      className: "cancle fa fa-times",
      onClick: function onClick() {
        return _this.__onDeleteFile(item, index);
      }
    }), /*#__PURE__*/React.createElement("span", null, this.state.placeholder), /*#__PURE__*/React.createElement("input", {
      className: "input",
      type: "file",
      name: this.props.name,
      onChange: this.__onInputChange
    })));
  },
  __fileRender: function __fileRender(item, index) {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("li", {
      className: "file",
      key: index
    }, /*#__PURE__*/React.createElement("img", {
      src: item
    }), /*#__PURE__*/React.createElement("i", {
      className: "cancle fa fa-times",
      onClick: function onClick() {
        return _this2.__onDeleteFile(item, index);
      }
    }));
  },
  __onInputClick: function __onInputClick(event) {
    this.props.onUploaderClick && this.props.onUploaderClick(event, this);
  },
  __onUploadCancle: function __onUploadCancle() {},
  render: function render() {
    var _hiddens = this.state.hiddens || {};

    _hiddens['FORWORD_URL'] = window.location.origin + window.location.pathname + '_black.html'; //{this.state.uploading && <i className="cancle fa fa-times" onClick={this.__onUploadCancle} />}

    return /*#__PURE__*/React.createElement("form", {
      className: "zr-uploader",
      method: "POST",
      encType: "multipart/form-data",
      target: this._target,
      action: Store.fixURL(this.props.action || ''),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("iframe", {
      onLoad: this.__onIFrameLoad,
      className: "uploader-target",
      name: this._target
    }), /*#__PURE__*/React.createElement("div", {
      className: "input choose-file"
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon fa fa-upload " + (this.state.uploading ? 'uploading' : '')
    }),  false && /*#__PURE__*/false, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, this.state.placeholder), this.state.previewURL && /*#__PURE__*/React.createElement("img", {
      className: "preview",
      src: this.state.previewURL
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      type: "file",
      name: this.props.name || 'upload_file_' + new Date().getTime(),
      onChange: this.__onInputChange,
      onClick: this.__onInputClick
    })), Object.keys(_hiddens).map(function (hidden, index) {
      return /*#__PURE__*/React.createElement("input", {
        key: 'hidden_' + index,
        type: "hidden",
        name: hidden,
        value: _hiddens[hidden]
      });
    }), /*#__PURE__*/React.createElement("ul", {
      className: "files"
    }, this.state.files.map(this.__fileRender)));
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(211);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Watcher',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-watcher", this.props.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "frame-face"
    }), /*#__PURE__*/React.createElement("ul", null, new Array(48).map(function () {})));
  }
});

/***/ }),
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(213);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'WebSpeech',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {
      langs: [['Afrikaans', ['af-ZA']], ['Bahasa Indonesia', ['id-ID']], ['Bahasa Melayu', ['ms-MY']], ['Català', ['ca-ES']], ['Čeština', ['cs-CZ']], ['Deutsch', ['de-DE']], ['English', ['en-AU', 'Australia'], ['en-CA', 'Canada'], ['en-IN', 'India'], ['en-NZ', 'New Zealand'], ['en-ZA', 'South Africa'], ['en-GB', 'United Kingdom'], ['en-US', 'United States']], ['Español', ['es-AR', 'Argentina'], ['es-BO', 'Bolivia'], ['es-CL', 'Chile'], ['es-CO', 'Colombia'], ['es-CR', 'Costa Rica'], ['es-EC', 'Ecuador'], ['es-SV', 'El Salvador'], ['es-ES', 'España'], ['es-US', 'Estados Unidos'], ['es-GT', 'Guatemala'], ['es-HN', 'Honduras'], ['es-MX', 'México'], ['es-NI', 'Nicaragua'], ['es-PA', 'Panamá'], ['es-PY', 'Paraguay'], ['es-PE', 'Perú'], ['es-PR', 'Puerto Rico'], ['es-DO', 'República Dominicana'], ['es-UY', 'Uruguay'], ['es-VE', 'Venezuela']], ['Euskara', ['eu-ES']], ['Français', ['fr-FR']], ['Galego', ['gl-ES']], ['Hrvatski', ['hr_HR']], ['IsiZulu', ['zu-ZA']], ['Íslenska', ['is-IS']], ['Italiano', ['it-IT', 'Italia'], ['it-CH', 'Svizzera']], ['Magyar', ['hu-HU']], ['Nederlands', ['nl-NL']], ['Norsk bokmål', ['nb-NO']], ['Polski', ['pl-PL']], ['Português', ['pt-BR', 'Brasil'], ['pt-PT', 'Portugal']], ['Română', ['ro-RO']], ['Slovenčina', ['sk-SK']], ['Suomi', ['fi-FI']], ['Svenska', ['sv-SE']], ['Türkçe', ['tr-TR']], ['български', ['bg-BG']], ['Pусский', ['ru-RU']], ['Српски', ['sr-RS']], ['한국어', ['ko-KR']], ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'], ['cmn-Hans-HK', '普通话 (香港)'], ['cmn-Hant-TW', '中文 (台灣)'], ['yue-Hant-HK', '粵語 (香港)']], ['日本語', ['ja-JP']], ['Lingua latīna', ['la']]],
      recognizing: false
    };
  },
  startSpeech: function startSpeech() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  },
  __onStart: function __onStart() {},
  componentDidMount: function componentDidMount() {
    var dom = ReactDOM.findDOMNode(this);
    dom.addEventListener("animationend", this.__onAnimationEnd, false);
    dom.addEventListener("oAnimationEnd", this.__onAnimationEnd, false);
    dom.addEventListener("MSAnimationEnd", this.__onAnimationEnd, false);
    dom.addEventListener("webkitAnimationEnd", this.__onAnimationEnd, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-web-speech", this.props.className)
    }, this.props.children);
  }
});

/***/ }),
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Cascader.js": 215,
	"./ListView.js": 6,
	"./Pager.js": 23,
	"./PagerView.js": 217,
	"./PagingList.js": 219,
	"./PullRefreshList.js": 221,
	"./SearchListView.js": 24,
	"./Steps.js": 224,
	"./Tree.js": 226,
	"./TreeListView.js": 229,
	"./index.js": 22
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 214;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var RTList = __webpack_require__(3);

var CascaderItem = React.createClass({
  displayName: 'TreeListViewItem',
  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      active: this.props.active || this.props.parent.props.activeAll,
      selected: false,
      checked: false,
      loading: false,
      data: this.props.parent.props.data.clone({
        where: {
          zn_tree_pid: this.props.data.id
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {//this.__onCheckboxChange(this.props.checked);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.checked != this.props.checked) {
      this.__onCheckboxChange(nextProps.checked);
    }
  },
  active: function active(_active) {
    this.setState({
      active: _active
    });
  },
  renderIcon: function renderIcon() {
    return /*#__PURE__*/React.createElement("div", {
      className: "seps",
      style: {
        width: (this.props.parent.props.sep + 1) * 16
      }
    }, this.__isTreeRow() && /*#__PURE__*/React.createElement("i", {
      className: 'icon fa ' + (!!this.state.active ? 'fa-caret-down' : 'fa-caret-right'),
      onClick: this.__onIconClick
    }));
  },
  __onIconClick: function __onIconClick(event) {
    event.stopPropagation();
    this.active(!this.state.active);
  },
  __isTreeRow: function __isTreeRow() {
    var _return = this.props.isTreeRow && this.props.isTreeRow(this.props, this);

    if (_return === undefined) {
      _return = !!this.props.data.zn_tree_son_count;
    }

    return _return;
  },
  __onClick: function __onClick(event) {
    if (this.state.loading) {
      return;
    }

    this.setState({
      selected: true
    });
    this.props.onClick(this, event);
  },
  __onCheckboxChange: function __onCheckboxChange(value) {
    this.setState({
      checked: value
    });
    this.props.onChange && this.props.onChange(value, this.props.data);
    this.props.onCheckboxChange && this.props.onCheckboxChange(value, this.props.data);
  },
  renderContent: function renderContent() {
    var _this = this;

    var _content = null;

    if (this.props.parent.props.itemContentRender) {
      _content = this.props.parent.props.itemContentRender(this.props);
    }

    if (!_content) {
      _content = this.props.data[this.props.parent.props.textKey];
    }

    if (this.props.parent.props.enableCheckbox) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: this.props.checked,
        disabled: this.props.parent.props.disabled,
        onChange: function onChange(event, value) {
          return _this.__onCheckboxChange(value);
        }
      }), _content);
    }

    return _content;
  },
  __renderChildren: function __renderChildren() {
    if (this.__isTreeRow() && this.state.active) {
      var _sep = this.props.parent.props.sep;
      _sep++;
      return /*#__PURE__*/React.createElement(TreeListView, _extends({}, this.props.parent.props, {
        checked: this.props.parent.props.cascade ? this.state.checked : undefined,
        parentTreeMenu: this.props.parent,
        sep: _sep,
        autoLoad: true,
        data: this.state.data
      }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, {
      className: "zr-tree-list-view-item " + this.props.className
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-row-title",
      "data-selected": this.state.selected,
      onClick: this.__onClick
    }, this.renderIcon(), this.renderContent()), this.__renderChildren());
  }
});
var TreeListView = React.createClass({
  displayName: 'TreeListView',
  getDefaultProps: function getDefaultProps() {
    return {
      sep: 0,
      isTreeRow: null,
      autoLoad: true,
      textKey: 'zn_title',
      valueKey: 'id',
      className: '',
      checked: false,
      disabled: false,
      enableCheckbox: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      currIndex: null,
      data: null,
      value: this.props.value || ','
    };
  },
  setValue: function setValue(value) {
    return this.setState({
      value: value
    }), this;
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __onItemClick: function __onItemClick(item, event) {
    if (this._selectedItem === item) {
      return;
    }

    if (this.props.parentTreeMenu) {
      this.props.parentTreeMenu.__onItemClick(item, event);
    } else {
      if (this._selectedItem && this._selectedItem.isMounted()) {
        this._selectedItem.setState({
          selected: false
        });
      }

      this._selectedItem = item;
      this.props.onClick && this.props.onClick(item, event);
    }
  },
  __onItemCheckboxChange: function __onItemCheckboxChange(value, data) {
    if (this.props.parentTreeMenu) {
      this.props.parentTreeMenu.__onItemCheckboxChange(value, data);
    } else {
      if (!data) {
        return;
      }

      var _value = this.state.value || ',',
          _itemValue = data[this.props.valueKey] + ',';

      if (value) {
        if (_value.indexOf(',' + _itemValue) == -1) {
          _value = _value + _itemValue;
        }
      } else {
        _value = _value.replace(new RegExp(',' + _itemValue, 'gi'), ',');
      } //console.log('value: ', _value, 'itemValue: ', _itemValue);


      this.state.value = _value;
      this.setState({
        value: _value
      });
      this.props.onItemCheckboxChange && this.props.onItemCheckboxChange(_value, value, data);
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _content = this.props.itemRender && this.props.itemRender(item, index);

    if (!_content && item) {
      var _checked = this.props.checked,
          _itemValue = item[this.props.valueKey] + ',';

      if (!_checked) {
        _checked = this.state.value.indexOf(',' + _itemValue) != -1;
      }

      _content = /*#__PURE__*/React.createElement(TreeListViewItem, {
        key: index,
        checked: _checked,
        parent: this,
        data: item,
        onClick: this.__onItemClick,
        onCheckboxChange: this.__onItemCheckboxChange
      });
    }

    return _content;
  },
  refresh: function refresh() {
    return this.props.data.refresh(), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-tree-list-view ' + this.props.className,
      onClick: null,
      itemRender: this.__itemRender,
      onLoaded: this.__onLoaded
    }));
  }
});
module.exports = TreeListView;

/***/ }),
/* 216 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(218);

var React = __webpack_require__(0);

var Pager = __webpack_require__(23);

var ActivityLayout = __webpack_require__(15);

module.exports = React.createClass({
  displayName: 'PagerView',
  getDefaultProps: function getDefaultProps() {
    return {
      pageIndex: 1,
      pageSize: 10,
      visiblePage: 3,
      dataFixed: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      total: 0,
      current: this.props.pageIndex
    };
  },
  componentDidMount: function componentDidMount() {},
  __handlePageChanged: function __handlePageChanged(newPage) {
    this.setState({
      current: newPage
    });
    this.props.data.extend({
      pageIndex: newPage
    });
    this.props.data.refresh();
  },
  __dataHandler: function __dataHandler(data) {
    if (!data.result) {
      return zn.notification.error('空数据'), -1;
    }

    if (data.result[1]) {
      var _count = data.result[1][0].count;

      if (this.isMounted()) {
        this.setState({
          count: _count,
          total: Math.ceil(_count / this.props.pageSize)
        });
      }
    }

    return data.result[0];
  },
  getValue: function getValue() {
    return this.refs.view.getValue();
  },
  setValue: function setValue(value) {
    return this.refs.view.setValue(value), this;
  },
  render: function render() {
    var _this = this;

    var View = this.props.view;

    if (typeof this.props.view == 'string') {
      View = zn.react[this.props.view];
    }

    if (!View || !this.props.data) {
      return null;
    }

    this.props.data.extend({
      pageIndex: this.state.current,
      pageSize: this.props.pageSize
    });
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-pager-view", this.props.className),
      "data-fixed": this.props.dataFixed
    }, /*#__PURE__*/React.createElement("div", {
      className: "content-view"
    }, /*#__PURE__*/React.createElement(View, _extends({
      showLoading: true
    }, this.props, {
      onFilter: function onFilter() {
        return _this.setState({
          current: 1
        });
      },
      className: this.props.viewClassName,
      dataHandler: this.__dataHandler,
      ref: "view"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "action-view"
    }, /*#__PURE__*/React.createElement(zn.react.Icons, {
      className: "ios",
      items: this.props.toolbarItems,
      onClick: this.props.onToolbarClick
    }), /*#__PURE__*/React.createElement(Pager, {
      total: this.state.total,
      count: this.state.count,
      current: this.state.current,
      visiblePages: this.props.visiblePage,
      onPageChanged: this.__handlePageChanged
    })));
  }
});

/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(220);

var React = __webpack_require__(0);

var DownPuller = __webpack_require__(9);

module.exports = React.createClass({
  displayName: 'PagingList',
  getDefaultProps: function getDefaultProps() {
    return {
      pageIndex: 1,
      pageSize: 10,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      total: 0,
      loading: false,
      loadingMore: false,
      current: this.props.pageIndex,
      data: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.data.extend({
      pageIndex: this.state.current,
      pageSize: this.props.pageSize
    });
    this._dataSource = zn.store.dataSource(this.props.data, {
      autoLoad: true,
      onExec: function () {
        var _result = this.props.onLoading && this.props.onLoading();

        if (_result !== false && this.isMounted()) {
          this.setState({
            loading: true
          });
        }
      }.bind(this),
      onSuccess: function (data) {
        this.__onDataLoaded(this.__dataHandler(data));

        this.props.onData && this.props.onData(data);
      }.bind(this)
    });
  },
  __onDataLoaded: function __onDataLoaded(data) {
    if (!this.isMounted()) {
      return false;
    }

    if (data.length == undefined) {
      var temp = [];

      for (var key in data) {
        temp.push(data[key]);
      }

      data = temp;
    }

    if (this.state.current > 1) {
      this.state.data = this.state.data.concat(data);
    } else {
      this.state.data = data;
    }

    this.setState({
      data: this.state.data,
      loading: false,
      loadingMore: false
    }, function () {
      this.props.onLoaded && this.props.onLoaded(data, this);
    }.bind(this));
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        data: null
      });

      this._dataSource.reset(nextProps.data);
    }
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    this.setState({
      current: newPage
    });
    this.props.data.extend({
      pageIndex: newPage
    });
    this.props.data.refresh();
  },
  __dataHandler: function __dataHandler(data) {
    if (this.props.dataHandler) {
      return this.props.dataHandler(data);
    }

    if (data.result && data.result[1] && data.result[1][0]) {
      var _count = data.result[1][0].count;

      if (this.isMounted()) {
        this.setState({
          count: _count,
          total: Math.ceil(_count / this.props.pageSize)
        });
      }

      return data.result[0];
    } else {
      return [];
    }
  },
  __onItemRender: function __onItemRender(item, index) {
    var _view = this.props.itemRender && this.props.itemRender(item, index);

    if (_view === false) {
      return null;
    }

    if (!_view) {
      _view = /*#__PURE__*/React.createElement("span", null, item.title);
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "data-list-item",
      key: index
    }, _view);
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return /*#__PURE__*/React.createElement("ul", {
        className: "data-list"
      }, !!this.state.data.map && this.state.data.map(this.__onItemRender));
    } else {
      return null;
    }
  },
  __renderLoading: function __renderLoading() {
    return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
      loader: "timer",
      content: "\u52A0\u8F7D\u6570\u636E\u4E2D..."
    });
  },
  __renderNoData: function __renderNoData() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-no-data"
    }, "\u6682\u65E0\u6570\u636E");
  },
  __render: function __render() {
    if (this.state.loading || !this.state.data) {
      return this.__renderLoading();
    }

    if (this.state.data.length) {
      return this.__renderData();
    } else {
      return this.__renderNoData();
    }
  },
  __onDownPullEnd: function __onDownPullEnd() {
    this.__handlePageChanged(1);
  },
  __onUpPullEnd: function __onUpPullEnd() {
    this.loadingMore();
  },
  loadingMore: function loadingMore() {
    this.state.current++;
    this.setState({
      current: this.state.current,
      loadingMore: true
    });

    this.__handlePageChanged(this.state.current);
  },
  __renderFooter: function __renderFooter() {
    var _this = this;

    if (this.state.loadingMore) {
      return /*#__PURE__*/React.createElement("div", {
        className: "footer"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-spinner zr-self-loading"
      }), /*#__PURE__*/React.createElement("span", null, "\u6B63\u5728\u52A0\u8F7D\u4E2D..."));
    }

    if (this.state.data && this.state.data.length) {
      if (this.state.current < this.state.total) {
        return /*#__PURE__*/React.createElement("div", {
          onClick: function onClick() {
            return _this.loadingMore();
          },
          className: "data-footer"
        }, "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A \u5171 (", this.state.current, "/", this.state.total, ") \u9875 ", this.state.count, " \u6761");
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "data-footer"
        }, "\u5171 (", this.state.current, "/", this.state.total, ") \u9875 ", this.state.count, " \u6761");
      }
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-paging-list " + this.props.className
    }, this.__render(), this.__renderFooter());
  }
});

/***/ }),
/* 220 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);

var React = __webpack_require__(0);

var DownPuller = __webpack_require__(9);

module.exports = React.createClass({
  displayName: 'PullRefreshList',
  getDefaultProps: function getDefaultProps() {
    return {
      pageIndex: 1,
      pageSize: 10,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      total: 0,
      loading: false,
      loadingMore: false,
      current: this.props.pageIndex,
      data: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.data.extend({
      pageIndex: this.state.current,
      pageSize: this.props.pageSize
    });
    this._dataSource = zn.store.dataSource(this.props.data, {
      autoLoad: true,
      onExec: function () {
        var _result = this.props.onLoading && this.props.onLoading();

        if (_result !== false && this.isMounted()) {
          this.setState({
            loading: true
          });
        }
      }.bind(this),
      onSuccess: function (data) {
        this.refs.owner.reset();

        this.__onDataLoaded(this.__dataHandler(data));

        this.props.onData && this.props.onData(data);
      }.bind(this)
    });
  },
  __onDataLoaded: function __onDataLoaded(data) {
    if (!this.isMounted()) {
      return false;
    }

    if (data.length == undefined) {
      var temp = [];

      for (var key in data) {
        temp.push(data[key]);
      }

      data = temp;
    }

    if (this.state.current > 1) {
      this.state.data = this.state.data.concat(data);
    } else {
      this.state.data = data;
    }

    this.setState({
      data: this.state.data,
      loading: false,
      loadingMore: false
    }, function () {
      this.props.onLoaded && this.props.onLoaded(data, this);
    }.bind(this));
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        data: null
      });

      this._dataSource.reset(nextProps.data);
    }
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    this.setState({
      current: newPage
    });
    this.props.data.extend({
      pageIndex: newPage
    });
    this.props.data.refresh();
  },
  __dataHandler: function __dataHandler(data) {
    if (this.props.dataHandler) {
      return this.props.dataHandler(data);
    }

    if (data.result && data.result[1] && data.result[1][0]) {
      var _count = data.result[1][0].count;

      if (this.isMounted()) {
        this.setState({
          count: _count,
          total: Math.ceil(_count / this.props.pageSize)
        });
      }

      return data.result[0];
    } else {
      return [];
    }
  },
  __onItemRender: function __onItemRender(item, index) {
    var _view = this.props.itemRender && this.props.itemRender(item, index);

    if (_view === false) {
      return null;
    }

    if (!_view) {
      _view = /*#__PURE__*/React.createElement("span", null, item.title);
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "data-list-item",
      key: index
    }, _view);
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return /*#__PURE__*/React.createElement("ul", {
        className: "data-list"
      }, !!this.state.data.map && this.state.data.map(this.__onItemRender));
    } else {
      return null;
    }
  },
  __renderLoading: function __renderLoading() {
    return /*#__PURE__*/React.createElement(zn.react.DataLoader, {
      loader: "timer",
      content: "\u52A0\u8F7D\u6570\u636E\u4E2D..."
    });
  },
  __renderNoData: function __renderNoData() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-no-data"
    }, "\u6682\u65E0\u6570\u636E");
  },
  __render: function __render() {
    if (this.state.loading || !this.state.data) {
      return this.__renderLoading();
    }

    if (this.state.data.length) {
      return this.__renderData();
    } else {
      return this.__renderNoData();
    }
  },
  __onDownPullEnd: function __onDownPullEnd() {
    this.__handlePageChanged(1);
  },
  __onUpPullEnd: function __onUpPullEnd() {
    this.loadingMore();
  },
  loadingMore: function loadingMore() {
    this.state.current++;
    this.setState({
      current: this.state.current,
      loadingMore: true
    });

    this.__handlePageChanged(this.state.current);
  },
  __renderFooter: function __renderFooter() {
    var _this = this;

    if (this.state.loadingMore) {
      return /*#__PURE__*/React.createElement("div", {
        className: "footer"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-spinner zr-self-loading"
      }), /*#__PURE__*/React.createElement("span", null, "\u52A0\u8F7D\u4E2D..."));
    }

    if (this.state.data && this.state.data.length) {
      if (this.state.current < this.state.total) {
        return /*#__PURE__*/React.createElement("div", {
          onClick: function onClick() {
            return _this.loadingMore();
          },
          className: "footer"
        }, "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A \u5F53\u524D (", this.state.current, "/", this.state.total, ") \u9875 ", this.state.count, " \u6761");
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "footer"
        }, "\u5171 (", this.state.current, "/", this.state.total, ") \u9875 ", this.state.count, " \u6761");
      }
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(DownPuller, {
      ref: "owner",
      onDownPullEnd: this.__onDownPullEnd
    }, /*#__PURE__*/React.createElement("div", {
      className: "zr-pull-refresh-list " + this.props.className
    }, this.__render(), this.__renderFooter()));
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(225);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

var RTList = __webpack_require__(3);

module.exports = React.createClass({
  displayName: 'Steps',
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'zr-steps',
      itemClassName: 'zr-steps-item',
      "float": 'none',
      disabled: false,
      value: null,
      textKey: 'text',
      valueKey: 'value',
      noborder: true,
      selectMode: 'radio' //radio, checkbox, none

    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      currIndex: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  __valueHandler: function __valueHandler(item, index) {
    if (!item) {
      return;
    }

    var _value = this.state.value,
        _itemValue = item[this.props.valueKey];

    switch (this.props.selectMode) {
      case 'radio':
        _value = _itemValue;
        break;

      case 'checkbox':
        _value = _value || ',';
        _itemValue = _itemValue + ',';

        if (_value.indexOf(_itemValue) == -1) {
          _value = _value + _itemValue;
        } else {
          _value = _value.replace(new RegExp(_itemValue, 'gi'), '');
        }

        break;

      case 'none':
        break;
    }

    return _value;
  },
  isCurrent: function isCurrent(item, index) {
    var _value = this.state.value,
        _itemValue = item[this.props.valueKey];

    if (_itemValue == undefined) {
      if (this.state.currIndex == index) {
        return true;
      }

      return false;
    }

    switch (this.props.selectMode) {
      case 'radio':
        if (_value == _itemValue) {
          return true;
        }

        break;

      case 'checkbox':
        _value = _value || ',';

        if (_value.indexOf(_itemValue) !== -1) {
          return true;
        }

        break;

      case 'none':
        break;
    }

    return false;
  },
  __onItemClick: function __onItemClick(item, index, rtitem, event) {
    this.setState({
      value: this.__valueHandler(item, index),
      currIndex: index
    }, function () {
      this.props.onClick && this.props.onClick(this.state.value, rtitem, this, event);
      this.props.onItemClick && this.props.onItemClick(this.state.value, rtitem, this, event);
    }.bind(this));
  },
  __itemRender: function __itemRender(item, index, rtlist) {
    var _this = this;

    var _content = /*#__PURE__*/React.createElement("span", null, item[this.props.textKey]);

    if (this.props.itemRender) {
      _content = this.props.itemRender(item, index, this);
    }

    return /*#__PURE__*/React.createElement(RTItem, _extends({
      className: this.props.itemClassName,
      disabled: this.props.disabled,
      "float": this.props["float"]
    }, item, {
      checked: this.isCurrent(item, index),
      onClick: function onClick(self, event) {
        return _this.__onItemClick(item, index, self, event);
      }
    }), _content);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, callback) {
    this.setState({
      value: value
    }, callback);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-list-view ' + (this.props.noborder ? 'noborder' : '') + ' ' + this.props.className,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),
/* 225 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(227);

var React = __webpack_require__(0);

var Checkbox = __webpack_require__(7);

var RTList = __webpack_require__(3);

var TreeColumn = React.createClass({
  displayName: 'TreeColumn',
  getInitialState: function getInitialState() {
    return {
      data: this.initData(),
      active: this.props.parent.props.activeAll,
      selected: this.props.selected || false,
      loading: false,
      hasChildren: false
    };
  },
  initData: function initData() {
    var _data = this.props.item.data || this.props.item.children;

    if (!_data && this.props.parent.props.data && this.props.parent.props.data.clone) {
      _data = this.props.parent.props.data.clone({
        pid: this.props.item.id
      });
    }

    return _data;
  },
  componentDidMount: function componentDidMount() {
    if (this.props.selected) {
      this.props.onClick(this.props.item, this, null);
    }
  },
  __hasChildren: function __hasChildren() {
    if (typeof this.props.item.data == 'array' && !!this.props.item.data.length) {
      return true;
    }

    if (!!this.props.item.zn_tree_son_count) {
      return true;
    }

    if (this.state.hasChildren) {
      return true;
    }

    return false;
  },
  active: function active(_active) {
    this.setState({
      active: _active
    });
  },
  __onIconClick: function __onIconClick(event) {
    if (this.state.loading) {
      return;
    }

    event.stopPropagation();
    this.active(!this.state.active);
  },
  __getIconClassName: function __getIconClassName() {
    if (this.state.loading) {
      return 'fa-spinner zr-self-loading';
    }

    return !!this.state.active ? 'fa-caret-down' : 'fa-caret-right';
  },
  __onCheckboxChange: function __onCheckboxChange(value) {
    this.state.checked = value;
    this.props.onChange && this.props.onChange(value, this.props.item, this);
    this.props.onCheckboxChange && this.props.onCheckboxChange(value, this.props.item, this);
  },
  __renderContent: function __renderContent() {
    var _content = this.props.parent.props.contentRender && this.props.parent.props.contentRender(this.props.item, this);

    if (!_content) {
      _content = this.props.item[this.props.parent.props.textKey];
    }

    return _content;
  },
  __onClick: function __onClick(event) {
    if (this.state.loading) {
      return;
    }

    this.setState({
      selected: true
    });
    this.props.onClick(this.props.item, this, event);
  },
  refresh: function refresh() {
    this.setState({
      hasChildren: true,
      active: true
    });
  },
  render: function render() {
    var _this = this;

    var _hasChildren = this.__hasChildren();

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-tree-column", this.props.className, this.state.selected ? 'column-selected' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner-content",
      onClick: this.__onClick
    }, /*#__PURE__*/React.createElement("span", {
      className: "tabs",
      style: {
        width: this.props.depth * 16
      }
    }, !!_hasChildren && /*#__PURE__*/React.createElement("i", {
      onClick: this.__onIconClick,
      className: "icon fa " + this.__getIconClassName()
    })), this.props.parent.props.checkboxEnabled && /*#__PURE__*/React.createElement(Checkbox, {
      checked: this.props.checked,
      disabled: this.props.parent.props.disabled,
      onChange: function onChange(event, value) {
        return _this.__onCheckboxChange(value);
      }
    }), this.__renderContent()), !!_hasChildren && /*#__PURE__*/React.createElement(Tree, _extends({}, this.props.parent.props, this.props, {
      active: this.state.active,
      data: this.state.data
    })));
  }
});
var Tree = React.createClass({
  displayName: 'Tree',
  getDefaultProps: function getDefaultProps() {
    return {
      depth: 0,
      textKey: 'zn_title',
      valueKey: 'id',
      checked: false,
      disabled: false,
      activeAll: false,
      checkboxEnabled: false
    };
  },
  __onItemClick: function __onItemClick(data, item, event) {
    if (this._selectedItem === item) {
      return;
    }

    if (this.props.parent) {
      this.props.parent.__onItemClick(data, item, event);
    } else {
      if (this._selectedItem && this._selectedItem.isMounted()) {
        this._selectedItem.setState({
          selected: false
        });
      }

      this._selectedItem = item;

      if (!this.props.checkboxEnabled) {
        var _value = data[this.props.valueKey],
            _text = data[this.props.textKey];
        this.props.onValueChange && this.props.onValueChange({
          text: _text,
          value: _value,
          data: data,
          treeitem: item,
          tree: this
        });
      }

      this.props.onItemClick && this.props.onItemClick(data, item, this, event);
    }
  },
  __onItemCheckboxChange: function __onItemCheckboxChange(checked, data) {
    if (this.props.parent) {
      this.props.parent.__onItemCheckboxChange(checked, data);
    } else {
      if (!data) {
        return;
      }

      var _value = this.props.value || ',',
          _text = this.props.text || ',',
          _itemValue = data[this.props.valueKey] + ',',
          _itemText = data[this.props.textKey] + ',';

      if (checked) {
        if (_value.indexOf(',' + _itemValue) == -1) {
          _value = _value + _itemValue;
        }

        if (_text.indexOf(',' + _itemText) == -1) {
          _text = _text + _itemText;
        }
      } else {
        _value = _value.replace(new RegExp(',' + _itemValue, 'gi'), ',');
        _text = _text.replace(new RegExp(',' + _itemText, 'gi'), ',');
      }

      var _obj = {
        text: _text,
        value: _value,
        checked: checked,
        data: data
      };
      this.props.onValueChange && this.props.onValueChange(_obj);
      this.props.onItemCheckboxChange && this.props.onItemCheckboxChange(_obj);
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _content = this.props.itemRender && this.props.itemRender(item, index);

    if (!_content && item) {
      var _checked = null,
          _selected = null,
          _value = item[this.props.valueKey];

      if (this.props.checkboxEnabled) {
        _checked = this.props.checked;

        if (!_checked) {
          _checked = (this.props.value || ',').indexOf(',' + _value + ',') != -1;
        }
      } else {
        _selected = this.props.value === _value;
      }

      _content = /*#__PURE__*/React.createElement(TreeColumn, {
        parent: this,
        key: index,
        depth: this.props.depth + 1,
        checked: _checked,
        selected: _selected,
        item: item,
        onClick: this.__onItemClick,
        onCheckboxChange: this.__onItemCheckboxChange
      });
    }

    return _content;
  },
  refresh: function refresh() {
    return this.props.data.refresh && this.props.data.refresh(), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: zn.react.classname("zr-tree", this.props.className),
      itemRender: this.__itemRender,
      onLoaded: this.__onLoaded
    }));
  }
});
module.exports = Tree;

/***/ }),
/* 227 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 228 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(230);

var React = __webpack_require__(0);

var RTList = __webpack_require__(3);

var RTItem = __webpack_require__(2);

var Checkbox = __webpack_require__(7);

var TreeListViewItem = React.createClass({
  displayName: 'TreeListViewItem',
  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      active: this.props.active || this.props.parent.props.activeAll,
      selected: false,
      checked: false,
      loading: false,
      data: this.props.parent.props.data.clone({
        where: {
          zn_tree_pid: this.props.data.id
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {//this.__onCheckboxChange(this.props.checked);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.checked != this.props.checked) {
      this.__onCheckboxChange(nextProps.checked);
    }
  },
  active: function active(_active) {
    this.setState({
      active: _active
    });
  },
  renderIcon: function renderIcon() {
    return /*#__PURE__*/React.createElement("div", {
      className: "seps",
      style: {
        width: (this.props.parent.props.sep + 1) * 16
      }
    }, this.__isTreeRow() && /*#__PURE__*/React.createElement("i", {
      className: 'icon fa ' + (!!this.state.active ? 'fa-caret-down' : 'fa-caret-right'),
      onClick: this.__onIconClick
    }));
  },
  __onIconClick: function __onIconClick(event) {
    event.stopPropagation();
    this.active(!this.state.active);
  },
  __isTreeRow: function __isTreeRow() {
    var _return = this.props.isTreeRow && this.props.isTreeRow(this.props, this);

    if (_return === undefined) {
      _return = !!this.props.data.zn_tree_son_count;
    }

    return _return;
  },
  __onClick: function __onClick(event) {
    if (this.state.loading) {
      return;
    }

    this.setState({
      selected: true
    });
    this.props.onClick(this, event);
  },
  __onCheckboxChange: function __onCheckboxChange(value) {
    this.setState({
      checked: value
    });
    this.props.onChange && this.props.onChange(value, this.props.data);
    this.props.onCheckboxChange && this.props.onCheckboxChange(value, this.props.data);
  },
  renderContent: function renderContent() {
    var _this = this;

    var _content = null;

    if (this.props.parent.props.itemContentRender) {
      _content = this.props.parent.props.itemContentRender(this.props);
    }

    if (!_content) {
      _content = this.props.data[this.props.parent.props.textKey];
    }

    if (this.props.parent.props.enableCheckbox) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: this.props.checked,
        disabled: this.props.parent.props.disabled,
        onChange: function onChange(event, value) {
          return _this.__onCheckboxChange(value);
        }
      }), _content);
    }

    return _content;
  },
  __renderChildren: function __renderChildren() {
    if (this.__isTreeRow() && this.state.active) {
      var _sep = this.props.parent.props.sep;
      _sep++;
      return /*#__PURE__*/React.createElement(TreeListView, _extends({}, this.props.parent.props, {
        checked: this.props.parent.props.cascade ? this.state.checked : undefined,
        parentTreeMenu: this.props.parent,
        sep: _sep,
        autoLoad: true,
        data: this.state.data
      }));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, {
      className: "zr-tree-list-view-item " + this.props.className
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-row-title",
      "data-selected": this.state.selected,
      onClick: this.__onClick
    }, this.renderIcon(), this.renderContent()), this.__renderChildren());
  }
});
var TreeListView = React.createClass({
  displayName: 'TreeListView',
  getDefaultProps: function getDefaultProps() {
    return {
      sep: 0,
      isTreeRow: null,
      autoLoad: true,
      textKey: 'zn_title',
      valueKey: 'id',
      className: '',
      checked: false,
      disabled: false,
      enableCheckbox: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      currIndex: null,
      data: null,
      value: this.props.value || ','
    };
  },
  setValue: function setValue(value) {
    return this.setState({
      value: value
    }), this;
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __onItemClick: function __onItemClick(item, event) {
    if (this._selectedItem === item) {
      return;
    }

    if (this.props.parentTreeMenu) {
      this.props.parentTreeMenu.__onItemClick(item, event);
    } else {
      if (this._selectedItem && this._selectedItem.isMounted()) {
        this._selectedItem.setState({
          selected: false
        });
      }

      this._selectedItem = item;
      this.props.onClick && this.props.onClick(item, event);
    }
  },
  __onItemCheckboxChange: function __onItemCheckboxChange(value, data) {
    if (this.props.parentTreeMenu) {
      this.props.parentTreeMenu.__onItemCheckboxChange(value, data);
    } else {
      if (!data) {
        return;
      }

      var _value = this.state.value || ',',
          _itemValue = data[this.props.valueKey] + ',';

      if (value) {
        if (_value.indexOf(',' + _itemValue) == -1) {
          _value = _value + _itemValue;
        }
      } else {
        _value = _value.replace(new RegExp(',' + _itemValue, 'gi'), ',');
      } //console.log('value: ', _value, 'itemValue: ', _itemValue);


      this.state.value = _value;
      this.setState({
        value: _value
      });
      this.props.onItemCheckboxChange && this.props.onItemCheckboxChange(_value, value, data);
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _content = this.props.itemRender && this.props.itemRender(item, index);

    if (!_content && item) {
      var _checked = this.props.checked,
          _itemValue = item[this.props.valueKey] + ',';

      if (!_checked) {
        _checked = this.state.value.indexOf(',' + _itemValue) != -1;
      }

      _content = /*#__PURE__*/React.createElement(TreeListViewItem, {
        key: index,
        checked: _checked,
        parent: this,
        data: item,
        onClick: this.__onItemClick,
        onCheckboxChange: this.__onItemCheckboxChange
      });
    }

    return _content;
  },
  refresh: function refresh() {
    return this.props.data.refresh(), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-tree-list-view ' + this.props.className,
      onClick: null,
      itemRender: this.__itemRender,
      onLoaded: this.__onLoaded
    }));
  }
});
module.exports = TreeListView;

/***/ }),
/* 230 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_module$exports = {
  AjaxUploader: __webpack_require__(10),
  AutoComplete: __webpack_require__(233),
  Checkbox: __webpack_require__(7),
  CheckboxGroup: __webpack_require__(235),
  DropdownSelector: __webpack_require__(236),
  DateTime: __webpack_require__(238),
  FileUploader: __webpack_require__(25),
  FormTitle: __webpack_require__(241),
  ImageUploader: __webpack_require__(26),
  Radio: __webpack_require__(244),
  RichEditor: __webpack_require__(246),
  RichSelector: __webpack_require__(248),
  Select: __webpack_require__(250)
}, _defineProperty(_module$exports, "ImageUploader", __webpack_require__(26)), _defineProperty(_module$exports, "Menu", __webpack_require__(252)), _defineProperty(_module$exports, "MultiInput", __webpack_require__(254)), _defineProperty(_module$exports, "OrderCode", __webpack_require__(256)), _defineProperty(_module$exports, "Form", __webpack_require__(258)), _defineProperty(_module$exports, "FormItem", __webpack_require__(27)), _defineProperty(_module$exports, "FileUploader", __webpack_require__(25)), _defineProperty(_module$exports, "Input", __webpack_require__(263)), _defineProperty(_module$exports, "Label", __webpack_require__(265)), _defineProperty(_module$exports, "Textarea", __webpack_require__(267)), _defineProperty(_module$exports, "ToggleSwitch", __webpack_require__(269)), _module$exports);

/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(234);

var React = __webpack_require__(0);

var ListView = __webpack_require__(6);

module.exports = React.createClass({
  displayName: 'AutoComplete',
  getDefaultProps: function getDefaultProps() {
    return {
      textKey: 'text',
      valueKey: 'value'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: [],
      value: this.props.value,
      text: this.props.text,
      autoLoad: true,
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {
    this._dataSource = zn.store.dataSource(this.props.items || this.props.data, {
      autoLoad: this.props.autoLoad || true,
      onExec: function () {
        var _result = this.props.onLoading && this.props.onLoading();

        if (_result !== false && this.isMounted()) {
          this.setState({
            loading: true
          });
        }
      }.bind(this),
      onSuccess: function (data) {
        this.__onDataLoaded(this.__dataHandler(data));

        this.props.onData && this.props.onData(data);
      }.bind(this)
    });
  },
  __dataHandler: function __dataHandler(data) {
    if (this.props.dataHandler) {
      return this.props.dataHandler(data);
    }

    return data.result || data;
  },
  __onDataLoaded: function __onDataLoaded(data) {
    if (!this.isMounted()) {
      return false;
    }

    if (data.length == undefined) {
      var temp = [];

      for (var key in data) {
        temp.push(data[key]);
      }

      data = temp;
    }

    this.state.data = data;
    this.setState({
      data: data,
      loading: false
    });
    this.props.onLoaded && this.props.onLoaded(data, this);
  },
  __onListItemClick: function __onListItemClick(value) {
    var _text = value.item[value.self.props.textKey],
        _value = value.item[value.self.props.valueKey];
    this.setState({
      value: _value,
      text: _text
    });
    this.props.onChange && this.props.onChange({
      text: _text,
      value: _value,
      item: value.item
    }, this);
    zn.popover.close('AutoComplete:listitem.click');
  },
  __renderView: function __renderView(target) {
    var _value = target.value;

    if (_value) {
      _value = this.__filterData(_value);

      if (_value.length) {
        zn.popover.render( /*#__PURE__*/React.createElement(ListView, _extends({}, this.props, {
          onClick: this.__onListItemClick,
          data: _value
        })), zn.extend({
          event: 'click',
          target: target,
          popoverWidth: '100%'
        }, this.props));
      } else {
        zn.popover.close('AutoComplete:empty.review');
      }
    } else {
      zn.popover.close('AutoComplete:empty.review');
    }
  },
  __filterData: function __filterData(value) {
    var _data = [];
    this.state.data.map(function (item, index) {
      var _callback = this.props.itemFilter && this.props.itemFilter(item, value, this);

      if (_callback === false) {
        return;
      }

      var _value = typeof item == 'string' ? item : item[this.props.textKey];

      if (_value && _value.indexOf(value) != -1) {
        _data.push(item);
      }
    }.bind(this));
    return _data;
  },
  __onInputChange: function __onInputChange(event) {
    this.setState({
      text: event.target.value
    });
    event.stopPropagation();

    this.__renderView(event.target);
  },
  __onClearClick: function __onClearClick(event) {
    this.setState({
      value: -1,
      text: ''
    });
    event.target.parentNode.nextSibling.focus();
    zn.popover.close('AutoComplete:clear.click');
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-auto-complete", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "status"
    }, this.state.loading && /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spinner zr-self-loading"
    }), this.state.text && /*#__PURE__*/React.createElement("i", {
      className: "fa fa-times-circle",
      onClick: this.__onClearClick
    })), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: this.state.text,
      name: this.props.name,
      disabled: this.state.loading,
      onChange: this.__onInputChange
    }));
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var Checkbox = __webpack_require__(7);

var RTList = __webpack_require__(3);

module.exports = React.createClass({
  displayName: 'CheckboxGroup',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      value: ',',
      valueKey: 'value',
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  __onCheckboxChecked: function __onCheckboxChecked(checked, checkbox) {
    var _value = this.state.value || ',',
        _itemValue = checkbox.props[this.props.valueKey] + ',';

    _value.indexOf(',') == -1;

    if (_value.charAt(_value.length - 1) != ',') {
      _value = _value + ',';
    }

    if (checked) {
      _value = _value + _itemValue;
    } else {
      _value = _value.replace(new RegExp(_itemValue, 'gi'), '');
    }

    this.setValue(_value);
  },
  __itemRender: function __itemRender(item, index, rtlist) {
    //console.log('Value: ', item[this.props.valueKey]);
    //console.log(this.state.value);
    return /*#__PURE__*/React.createElement(Checkbox, _extends({
      disabled: this.props.disabled,
      "float": this.props["float"]
    }, item, {
      onChecked: this.__onCheckboxChecked,
      checked: this.state.value.indexOf(item[this.props.valueKey]) !== -1
    }));
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    }, function () {
      this.props.onChange && this.props.onChange(value, this);
    }.bind(this));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-checkbox-group ' + this.props.className,
      itemRender: this.__itemRender
    }));
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(237);

var React = __webpack_require__(0);

var Dropdown = __webpack_require__(4);

module.exports = React.createClass({
  displayName: 'DropdownSelector',
  getDefaultProps: function getDefaultProps() {
    return {
      eventType: 'click'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || ''
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    return this.state.text || this.props.placeholder;
  },
  __onSelectorChange: function __onSelectorChange(value) {
    //this.setValue(value, item[rtlist.props.textKey]);
    zn.popover.close('DropdownSelector:selector.onchange');
  },
  __popoverRender: function __popoverRender() {
    if (!this.props.selector) {
      return zn.toast.error('selector is null.'), false;
    }

    var _props = this.props.props || this.props;

    return /*#__PURE__*/React.createElement(this.props.selector, _extends({}, _props, {
      className: zn.react.classname("zr-dropdown-selector-selector-view", _props.selectorClassName || _props.className),
      style: _props.selectorStyle || _props.style,
      value: this.state.value,
      onChange: this.__onSelectorChange
    }));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, this.props, {
      popoverRender: this.__popoverRender,
      popoverWidth: '100%',
      popoverHeight: 200,
      className: zn.react.classname("zr-dropdown-selector", this.props.className)
    }), /*#__PURE__*/React.createElement("div", {
      className: "zr-dropdown-selector-text-view"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, this.__textRender()), /*#__PURE__*/React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })));
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(239);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'DateTime',
  getDefaultProps: function getDefaultProps() {
    return {
      className: ''
    };
  },
  getValue: function getValue() {
    var _date = ReactDOM.findDOMNode(this.refs.date).value,
        _time = ReactDOM.findDOMNode(this.refs.time).value;
    return (_date + ' ' + _time).trim();
  },
  setValue: function setValue(value) {
    if (value) {
      var _data = value.split(' ');

      if (_data[0]) {
        ReactDOM.findDOMNode(this.refs.date).value = _data[0];
      }

      if (_data[1]) {
        ReactDOM.findDOMNode(this.refs.time).value = _data[1];
      }
    }

    return this;
  },
  __onChange: function __onChange(event) {
    this.props.onChange && this.props.onChange(this.getValue(), this, event);
  },
  render: function render() {
    var _data = (this.props.value || '').split(' ');

    return /*#__PURE__*/React.createElement("div", {
      className: "zr-date-time " + this.props.className
    }, /*#__PURE__*/React.createElement("input", {
      type: "date",
      defaultValue: _data[0],
      ref: "date",
      className: "timer-date",
      name: this.props.name + '_date',
      required: this.props.required,
      onChange: this.__onChange
    }), /*#__PURE__*/React.createElement("input", {
      type: "time",
      defaultValue: _data[1],
      ref: "time",
      className: "timer-time",
      name: this.props.name + '_time',
      required: this.props.required,
      onChange: this.__onChange
    }));
  }
});

/***/ }),
/* 239 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 240 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(242);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'FormTitle',
  getValue: function getValue() {
    return null;
  },
  setValue: function setValue(value) {
    return this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-form-title', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("span", {
      className: "zf-title"
    }, this.props.title));
  }
});

/***/ }),
/* 242 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 243 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(245);

var React = __webpack_require__(0);

var RTItem = __webpack_require__(2);

var RTList = __webpack_require__(3);

var RadioItem = React.createClass({
  displayName: 'RadioItem',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      checked: false,
      disabled: false
    };
  },
  __renderContent: function __renderContent() {
    var _content = this.props.contentRender && this.props.contentRender(this);

    if (!_content) {
      _content = /*#__PURE__*/React.createElement("span", null, this.props.text || '');
    }

    return _content;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTItem, _extends({}, this.props, {
      className: 'zr-radio-item ' + this.props.className
    }), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: this.props.name,
      value: this.props.value,
      defaultChecked: this.props.checked
    }), /*#__PURE__*/React.createElement("i", {
      className: "icon fa fa-circle"
    }), this.__renderContent());
  }
});
var Radio = React.createClass({
  displayName: 'Radio',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      "float": 'none',
      value: null,
      valueKey: 'value',
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  __onRadioItemClick: function __onRadioItemClick(rtitem, event) {
    this.setValue(rtitem.props[this.props.valueKey], function (value) {
      this.props.onItemClick && this.props.onItemClick(value, this, event);
    }.bind(this));
  },
  __itemRender: function __itemRender(item, index, rtlist) {
    return /*#__PURE__*/React.createElement(RadioItem, _extends({
      disabled: this.props.disabled,
      "float": this.props["float"]
    }, item, {
      onClick: this.__onRadioItemClick,
      checked: this.state.value === item[this.props.valueKey]
    }));
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, callback) {
    this.setState({
      value: value
    }, function () {
      this.props.onChange && this.props.onChange(value, this);
      callback && callback(value, this);
    }.bind(this));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(RTList, _extends({}, this.props, {
      className: 'zr-radio ' + this.props.className,
      itemRender: this.__itemRender
    }));
  }
});
module.exports = Radio;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(247);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'RichEditor',
  componentDidMount: function componentDidMount() {
    this._editor = KindEditor.create(ReactDOM.findDOMNode(this), {
      minWidth: 100,
      autoHeightMode: true,
      afterCreate: function afterCreate() {
        this.loadPlugin('autoheight');
      }
    });
    this.setValue(this.props.value);
  },
  getValue: function getValue() {
    return this._editor.html();
  },
  setValue: function setValue(value) {
    if (value !== undefined) {
      return this._editor.html(value);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("textarea", {
      className: zn.react.classname("zr-rich-editor", this.props.className),
      style: this.props.style,
      name: this.props.name
    });
  }
});

/***/ }),
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(249);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'RichInput',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || '',
      active: this.props.active || false
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text || value
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    var _result = this.props.textRender && this.props.textRender(this.state.text);

    if (!_result) {
      _result = this.state.text || this.props.placeholder;
    }

    return _result;
  },
  __onSelectorChange: function __onSelectorChange(value, text) {
    this.setState({
      value: value,
      text: text,
      active: false
    });
    this.props.onChange && this.props.onChange(value, text);
  },
  __selectorRender: function __selectorRender() {
    if (!this.props.selector) {
      return zn.toast.error('selector is null.'), false;
    }

    return /*#__PURE__*/React.createElement(this.props.selector, _extends({}, this.props, {
      style: this.props.selectorStyle,
      value: this.state.value,
      onChange: this.__onSelectorChange
    }));
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname("zr-rich-selector", this.props.className),
      "data-active": this.state.active
    }, /*#__PURE__*/React.createElement("div", {
      className: "display-view",
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, this.__textRender()), /*#__PURE__*/React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })), /*#__PURE__*/React.createElement("div", {
      className: "rich-selector zr-arrow zr-arrow-color-white zr-arrow-placement-left zr-arrow-direction-top zn-animate-scale-up"
    }, this.__selectorRender()));
  }
});

/***/ }),
/* 249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Select',
  getDefaultProps: function getDefaultProps() {
    return {
      dataType: 'int',
      className: '',
      autoLoad: true,
      textKey: 'text',
      valueKey: 'value',
      placeholder: "select ..."
    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false,
      selected: false,
      currIndex: null,
      value: this.props.value,
      data: []
    };
  },
  componentDidMount: function componentDidMount() {
    var _source = this.props.data || this.props.items;

    this._dataSource = zn.store.dataSource(_source, {
      autoLoad: this.props.autoLoad,
      onExec: function () {
        var _result = this.props.onLoading && this.props.onLoading();

        if (_result !== false && this.isMounted()) {
          this.state.loading = true;
        }
      }.bind(this),
      onSuccess: function (data) {
        this.__onDataLoaded(this.__dataHandler(data));

        this.props.onData && this.props.onData(data);
      }.bind(this)
    });
  },
  __dataHandler: function __dataHandler(data) {
    if (this.props.dataHandler) {
      return this.props.dataHandler(data);
    }

    return data.result || data;
  },
  __onDataLoaded: function __onDataLoaded(data) {
    if (!this.isMounted()) {
      return false;
    }

    var _value = this.props.value,
        _valueKey = this.props.valueKey;

    if (data.length == undefined) {
      var temp = [];

      for (var key in data) {
        temp.push(data[key]);
      }

      data = temp;
    }

    this.state.data = data;
    this.setState({
      data: data,
      loading: false
    }, function () {
      if (_value && !this.state.value) {
        this.setValue(_value);
      }

      this.props.onLoaded && this.props.onLoaded(data, this);
    }.bind(this));
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {//this._dataSource.reset(nextProps.data);
    }
  },
  request: function request(data, argv) {
    this._dataSource.reset(data, argv);
  },
  filter: function filter(handler) {
    var _data = [];
    this.state.data.forEach(function (item, index, array) {
      if (handler(item, index, array) !== false) {
        _data.push(item);
      }
    });
    this.setState({
      data: _data
    });
  },
  refresh: function refresh() {
    this._dataSource.refresh();
  },
  __onSelectClick: function __onSelectClick(event) {
    if (!this.props.autoLoad) {
      this._dataSource.exec();
    }

    event.stopPropagation();
    event.preventDefault();
  },
  __parseExp: function __parseExp(item, exp) {
    if (typeof exp == 'string') {
      if (exp.indexOf('{') != -1) {
        return zn.format(exp, item);
      } else {
        return item[exp];
      }
    } else if (typeof exp == 'function') {
      return exp(item);
    }
  },
  __itemRender: function __itemRender(item, index) {
    item = item || {};

    if (typeof item === 'string') {
      var _temp = {};
      _temp[this.props.valueKey] = _temp[this.props.textKey] = item;
      this.state.data[index] = item = _temp;
    }

    item.index = index;

    var _value = this.__parseExp(item, this.props.valueKey),
        _text = this.__parseExp(item, this.props.textKey);

    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: _value
    }, _text);
  },
  __onSelectChange: function __onSelectChange(event) {
    var _target = event.target,
        _selectedIndex = +_target.selectedIndex - 1,
        _item = this.state.data[_selectedIndex],
        _value = this.__parseExp(_item, this.props.valueKey),
        _text = this.__parseExp(_item, this.props.textKey);

    var _data = {
      selectedIndex: _selectedIndex,
      text: _text,
      value: _value,
      item: _item
    };
    this.setValue(_value, event);
  },
  getValue: function getValue() {
    var _value = this.state.value || ReactDOM.findDOMNode(this).value;

    if (isNaN(_value)) {
      return _value;
    } else {
      return +_value;
    } //return this.props.dataType=='int'?(+_value):_value;

  },
  setValue: function setValue(value, event) {
    this.setState({
      value: value,
      selected: value ? true : false
    }, function () {
      var _item = null,
          _valueKey = this.props.valueKey;

      if (this.state.data && this.state.data.length) {
        for (var i = 0, _len = this.state.data.length; i < _len; i++) {
          if (value == this.state.data[i][_valueKey]) {
            _item = this.state.data[i];
          }
        }
      }

      this.props.onChange && this.props.onChange(_item, this, value);
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("select", {
      className: zn.react.classname("zr-select", this.state.selected ? '' : 'no-selected'),
      style: this.props.style,
      name: this.props.name,
      required: this.props.required,
      disabled: this.props.disabled || this.props.readonly,
      value: this.state.value,
      onChange: this.__onSelectChange,
      onClick: this.__onSelectClick
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, this.props.placeholder), this.state.data && this.state.data.map && this.state.data.map(this.__itemRender));
  }
});

/***/ }),
/* 251 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(253);

var React = __webpack_require__(0);

var Dropdown = __webpack_require__(4);

var SearchListView = __webpack_require__(24);

module.exports = React.createClass({
  displayName: 'Menu',
  getDefaultProps: function getDefaultProps() {
    return {
      eventType: 'click',
      editable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || ''
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text || value
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    return this.state.text || this.props.placeholder;
  },
  __onListItemClick: function __onListItemClick(value, rtlistitem, rtlist, item) {
    this.setValue(value, item[rtlist.props.textKey]);
    zn.popover.close('Menu:item.click');
  },
  __onInputChange: function __onInputChange(event) {
    this.state.value = event.target.value;
    this.forceUpdate();
    zn.popover.close('Menu:item.click');
  },
  __popoverRender: function __popoverRender() {
    return /*#__PURE__*/React.createElement(SearchListView, _extends({}, this.props, {
      style: this.props.listStyle,
      className: zn.react.classname("zr-list-view-popover", this.props.listClassName),
      emptyView: true,
      value: this.state.value,
      onItemClick: this.__onListItemClick
    }));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, this.props, {
      popoverRender: this.__popoverRender,
      popoverWidth: "100%",
      className: zn.react.classname("zr-menu", this.props.className)
    }), /*#__PURE__*/React.createElement("div", {
      className: "menu-view"
    }, this.props.editable ? /*#__PURE__*/React.createElement("input", {
      value: this.state.value,
      onChange: this.__onInputChange
    }) : /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, this.__textRender()), /*#__PURE__*/React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })));
  }
});

/***/ }),
/* 253 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'MultiInput',
  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      split: '/'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  getValue: function getValue() {
    var _values = [],
        _value = null;

    for (var key in this.refs) {
      _value = ReactDOM.findDOMNode(this.refs[key]).value;

      if (_value) {
        _values.push(_value);
      }
    }

    return _values.join(this.props.split);
  },
  setValue: function setValue(value) {
    var _values = value.split(this.props.split);

    Object.keys(this.refs).forEach(function (key, index) {
      if (_values[index]) {
        ReactDOM.findDOMNode(this.refs[key]).value = _values[index];
      }
    }.bind(this));
    return this.setState({
      value: value
    }), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-multi-input', this.props.className),
      style: this.props.style
    }, (this.props.data || []).map(function (item, index) {
      return /*#__PURE__*/React.createElement("input", {
        ref: index,
        key: index,
        placeholder: item,
        type: "text"
      });
    }));
  }
});

/***/ }),
/* 255 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(257);

var React = __webpack_require__(0);

var Dropdown = __webpack_require__(4);

module.exports = React.createClass({
  displayName: 'OrderCode',
  getDefaultProps: function getDefaultProps() {
    return {
      eventType: 'click',
      editable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || '',
      text: this.props.text || ''
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value, text) {
    this.setState({
      value: value,
      text: text || value
    }, function () {
      this.props.onChange && this.props.onChange(value, text, this);
    });
  },
  __textRender: function __textRender() {
    return this.state.text || this.props.placeholder;
  },
  __onListItemClick: function __onListItemClick(value, rtlistitem, rtlist, item) {
    this.setValue(value, item[rtlist.props.textKey]);
    zn.popover.close('Menu:item.click');
  },
  __onInputChange: function __onInputChange(event) {
    this.state.value = event.target.value;
    this.forceUpdate();
    zn.popover.close('Menu:item.click');
  },
  __popoverRender: function __popoverRender() {
    return null;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, this.props, {
      popoverRender: this.__popoverRender,
      popoverWidth: "100%",
      className: zn.react.classname("zr-order-code", this.props.className)
    }), /*#__PURE__*/React.createElement("div", {
      className: "code-view"
    }, this.props.editable ? /*#__PURE__*/React.createElement("input", {
      value: this.state.value,
      onChange: this.__onInputChange
    }) : /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, this.__textRender()), /*#__PURE__*/React.createElement("i", {
      className: "trigger fa fa-angle-down"
    })));
  }
});

/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(259);

var React = __webpack_require__(0);

var FormItem = __webpack_require__(27);

var ButtonGroup = __webpack_require__(8);

module.exports = React.createClass({
  displayName: 'Form',
  getDefaultProps: function getDefaultProps() {
    return {
      sync: false,
      method: 'POST',
      value: {},
      buttons: [{
        text: '取消',
        type: 'cancle',
        status: 'danger'
      }, {
        text: '确定',
        type: 'submit',
        status: 'primary'
      }],
      buttonsClassName: 'right',
      itemClassName: zn.react.isMobile() ? 'column' : '',
      submitCallback: function submitCallback(data) {
        if (data.status == 200) {
          return true;
        } else {
          return false;
        }
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      hiddens: zn.extend({}, this.props.hiddens),
      value: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.setValue(this.props.value);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.props.value) {
      this.setValue(nextProps.value);
    }
  },
  __parseItemValue: function __parseItemValue(value) {
    if (value.indexOf("javascript:") == 0) {
      return eval(value);
    }

    return value;
  },
  __onBtnsClick: function __onBtnsClick(props, btn, event) {
    if (!props) {
      return false;
    }

    switch (props.type) {
      case 'submit':
        if (btn.state.status == 'disabled' || btn.state.loading) {
          return;
        }

        this._submit = btn;
        this.submit();
        break;

      case 'reset':
        this.reset();
        break;

      case 'cancle':
        zn.modal.close('Form:cancle.click');
        zn.popover.close('Form:cancle.click');
        break;
    }
  },
  __onSubmitCallbackHandler: function __onSubmitCallbackHandler(data, xhr) {
    this.loading(false);

    if (this.props.submitCallback(data) !== false) {
      var _result = this.props.onSubmitSuccess && this.props.onSubmitSuccess(data, this, xhr);

      if (_result !== false) {
        zn.modal.close();
        zn.notification.success(data.result || '操作成功');
      }
    } else {
      var _result = this.props.onSubmitError && this.props.onSubmitError(data, this, xhr);

      if (_result !== false) {
        zn.notification.error(data.result || '操作失败！');
      }
    }
  },
  setValue: function setValue(value) {
    var _this = this;

    if (!value) {
      return this;
    }

    if (zn.isZNObject(value)) {
      return value.exec().then(function (data) {
        return _this.setValue(data.result);
      }), this;
    }

    if (zn.is(value, 'object')) {
      var _item = null,
          _value = null,
          _text = null;
      setTimeout(function () {
        for (var key in this.state.hiddens) {
          this.state.hiddens[key] = value[key] || this.state.hiddens[key];
        }

        for (var key in this.refs) {
          _item = this.refs[key];
          _value = value[key];
          _text = value[key + '_convert'];

          if (_item && _value !== undefined && _item.refs.input) {
            _item.refs.input.setValue(_value, _text);
          }
        }
      }.bind(this), 0);
      this.setState({
        value: value
      });
    }

    return this;
  },
  getValue: function getValue() {
    var _result = this.validate();

    if (_result === false) {
      _result = {};
    }

    return _result;
  },
  validate: function validate(callback) {
    var _data = {},
        _value = null;

    for (var name in this.refs) {
      if (!this.refs[name]) {
        continue;
      }

      if (this.refs[name].validate) {
        _value = this.refs[name].validate(callback);
      } else {
        _value = this.refs[name].getValue(callback);
      }

      if (_value === false) {
        return false;
      }

      if (_value !== null && _value !== undefined) {
        if (this.props.valueKey) {
          _data[this.refs[name].props[this.props.valueKey]] = _value;
        } else {
          _data[name] = _value;
        }
      } else {
        continue;
      }
    }

    for (var key in this.state.hiddens) {
      if (this.state.hiddens[key] !== null && this.state.hiddens[key] !== undefined) {
        _data[key] = _data[key] || this.state.hiddens[key];
      }
    }

    return _data;
  },
  submit: function submit() {
    var _result = this.validate();

    if (_result === false) {
      return false;
    }

    if (zn.DEBUG) {//zn.debug("Form Data", JSON.stringify(_result));
    }

    var _temp = this.props.onSubmitBefore && this.props.onSubmitBefore(_result, this);

    if (_temp !== false) {
      _result = _temp || _result;
    } else {
      return;
    }

    if (!this.props.action) {
      return zn.alert('Form action is undefined.'), false;
    }

    this.loading(true);

    if (this.props.sync) {
      ReactDOM.findDOMNode(this).submit();
    } else {
      if (this.props.merge) {
        var _temp = {};
        _temp[this.props.merge] = _result;
        _result = _temp;
      }

      var _exts = this.props.exts;

      if (_exts) {
        for (var _key in _exts) {
          _result[_key] = _exts[_key];
        }
      }

      zn.http[this.props.method.toLowerCase()](this.props.action, _result).then(this.__onSubmitCallbackHandler, function (data, xhr) {
        this.loading(false);
        this.props.onSubmitError && this.props.onSubmitError(data, this);
      }.bind(this));
    }
  },
  loading: function loading(_loading) {
    if (this._submit) {
      this._submit.loading(_loading);
    }
  },
  reset: function reset() {
    for (var name in this.refs) {
      if (!this.refs[name]) {
        continue;
      }

      this.refs[name].refs.input.setValue('', '');
    }
  },
  __renderItems: function __renderItems(items) {
    if (items && items.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "form-items"
      }, items.map(function (item, index) {
        item.index = index;

        if (item.type == 'Hidden') {
          return this.state.hiddens[item.name] = item.value != null ? this.__parseItemValue(item.value) : null, null;
        }

        return /*#__PURE__*/React.createElement(FormItem, _extends({
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          "float": this.props["float"],
          value: this.state.value[item.name] || '',
          onChange: this.props.onChange
        }, item, {
          className: zn.react.classname(this.props.itemClassName, item.className),
          form: this,
          ref: item.name
        }));
      }.bind(this)));
    }
  },
  __renderGroups: function __renderGroups(groups) {
    if (groups && groups.length) {
      return /*#__PURE__*/React.createElement("div", {
        className: "form-groups"
      }, groups.map(function (group, index) {
        return /*#__PURE__*/React.createElement(zn.react.Group, group, this.__renderItems(group.items));
      }.bind(this)));
    }
  },
  __renderButtons: function __renderButtons() {
    var _btns = this.props.buttons || this.props.btns;

    if (_btns) {
      if (zn.is(_btns, 'array')) {
        _btns = {
          items: _btns
        };
      }

      return /*#__PURE__*/React.createElement(ButtonGroup, _extends({}, _btns, {
        className: zn.react.classname("form-buttons flex", this.props.buttonsClassName),
        onClick: this.__onBtnsClick
      }));
    }
  },
  render: function render() {
    if (this.props.sync) {
      var _hiddens = this.state.hiddens;
      return /*#__PURE__*/React.createElement("form", {
        className: zn.react.classname('zr-form', this.props.className),
        style: this.props.style,
        encType: "multipart/form-data",
        method: "POST"
      }, Object.keys(_hiddens).map(function (hidden, index) {
        return /*#__PURE__*/React.createElement("input", {
          key: 'hidden_' + hidden,
          type: "hidden",
          name: hidden,
          value: _hiddens[hidden]
        });
      }), this.__renderItems(this.props.items), this.__renderGroups(this.props.groups), this.__renderButtons());
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: zn.react.classname('zr-form', this.props.className),
        style: this.props.style
      }, this.__renderItems(this.props.items), this.__renderGroups(this.props.groups), this.__renderButtons());
    }
  }
});

/***/ }),
/* 259 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 260 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 262 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(264);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Input',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: '',
      disabled: false,
      readonly: null
    };
  },
  getValue: function getValue() {
    var _value = ReactDOM.findDOMNode(this).value;

    if (this.props.attrs && this.props.attrs.type == 'number') {
      _value = +_value;
    }

    if (this.props.attrs && this.props.attrs.type == 'date') {
      if (!_value) {
        return null;
      }
    }

    return _value;
  },
  setValue: function setValue(value) {
    if (this.props.attrs && this.props.attrs.type == 'date' && value) {
      value = value.split(' ')[0];
    }

    return ReactDOM.findDOMNode(this).value = value, this;
  },
  __onChange: function __onChange(event) {
    this.props.onChange && this.props.onChange(event.target.value, this, event);
  },
  __onBlur: function __onBlur(event) {
    this.props.onBlur && this.props.onBlur(event.target.value, this, event);
  },
  __onKeyUp: function __onKeyUp(event) {
    if (event.nativeEvent.keyCode == 13) {
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("input", _extends({
      className: zn.react.classname('zr-input', this.props.className),
      required: this.props.required,
      style: this.props.style
    }, this.props.attrs, {
      name: this.props.name,
      type: this.props.attrs.type || 'text',
      defaultValue: this.props.value,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onChange: this.__onChange,
      onBlur: this.__onBlur,
      onKeyUp: this.__onKeyUp
    }));
  }
});

/***/ }),
/* 264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(266);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: 'Label',
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    return this.setState({
      value: value
    }), this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: zn.react.classname('zr-label', this.props.className),
      style: this.props.style,
      dangerouslySetInnerHTML: {
        __html: this.state.value
      }
    });
  }
});

/***/ }),
/* 266 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(268);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'Textarea',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: ''
    };
  },
  getValue: function getValue() {
    //placeholder="ex.&#13;&#10;test1@test.com&#13;&#10;test2@test.com&#13;&#10;..."
    var _value = ReactDOM.findDOMNode(this).value; //console.log(_value.replace(/\u000A/g, '\n'));

    return _value;
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = value, this;
  },
  __onChange: function __onChange(event) {
    this.props.onChange && this.props.onChange(event.target.value, this, event);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("textarea", _extends({
      className: "zr-textarea " + this.props.className,
      required: this.props.required,
      placeholder: this.props.placeholder
    }, this.props.attrs, {
      defaultValue: this.props.value,
      readonly: this.props.readonly,
      disabled: this.props.disabled || this.props.readonly,
      onChange: this.__onChange,
      name: this.props.name
    }));
  }
});

/***/ }),
/* 268 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(270);

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: 'ToggleSwitch',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      disabled: false
    };
  },
  __onChange: function __onChange(event) {
    event.stopPropagation();
    this.props.onChange && this.props.onChange(event.target.checked, event);
  },
  __onInputClick: function __onInputClick(event) {
    event.stopPropagation();
  },
  getValue: function getValue() {
    return ReactDOM.findDOMNode(this.refs.input).value;
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this.refs.input).value = value, this;
  },
  render: function render() {
    var _uuid = 'c_toggle_switch_input_' + new Date().getTime();

    return /*#__PURE__*/React.createElement("div", {
      className: "zr-toggle-switch " + this.props.className + ' ' + (this.props.disabled ? 'disabled' : ''),
      "data-ts-color": this.props.color || 'red'
    }, /*#__PURE__*/React.createElement("input", {
      ref: "input",
      id: _uuid,
      disabled: this.props.disabled,
      type: "checkbox",
      defaultChecked: this.props.value,
      onClick: this.__onInputClick,
      onChange: this.__onChange
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: _uuid,
      className: "ts-helper"
    }));
  }
});

/***/ }),
/* 270 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);