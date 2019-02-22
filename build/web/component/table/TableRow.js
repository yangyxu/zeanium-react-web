"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: 'TableRow',
  getDefaultProps: function getDefaultProps() {
    return {
      checked: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      selected: this.props.selected,
      editable: this.props.editable,
      checked: this.props.checked,
      data: this.props.data || {},
      vars: [],
      exps: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onDidMount && this.props.onDidMount(this);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data != this.props.data) {
      this.state.data = nextProps.data;
      this.forceUpdate();
    }
  },
  checked: function checked(value) {
    if (this.isMounted()) {
      this.setState({
        checked: value
      });
    }
  },
  selected: function selected(_selected) {
    if (this.isMounted()) {
      this.setState({
        selected: _selected
      });
    }
  },
  editable: function editable(_editable) {
    if (this.isMounted()) {
      this.setState({
        editable: _editable
      });
    }
  },
  __onCheckBoxChange: function __onCheckBoxChange(event, value, cb) {
    this.state.checked = value;
    this.props.onCheckBoxChange && this.props.onCheckBoxChange(value, this, cb);
  },
  __onRowClick: function __onRowClick(event) {
    var _td = this.__getTargetTD(event.target),
        _tr = ReactDOM.findDOMNode(this);

    this.props.onRowClick && this.props.onRowClick(event, {
      tr: _tr,
      td: _td,
      data: this.state.data,
      items: this.props.items
    }, this);
  },
  __getTargetTD: function __getTargetTD(target) {
    if (target.tagName !== 'TD') {
      return this.__getTargetTD(target.parentNode);
    } else {
      return target;
    }
  },
  __onTableColumnChange: function __onTableColumnChange(rowIndex, columnIndex, value, input, event, props) {
    var _value = props.onChange && props.onChange(value, input, this, event, props, rowIndex, columnIndex);

    if (_value !== undefined || _value !== null) {
      this.state.data[props.name] = input.getValue();
    }

    var _vars = [];
    this.state.vars.map(function (_var, _index) {
      if (zn.is(this.state.data[_var], 'number')) {
        _vars.push(_var + " = " + (this.state.data[_var] || 0));
      } else {
        _vars.push(_var + " = '" + (this.state.data[_var] || '') + "'");
      }
    }.bind(this));
    _vars = _vars.join(',');
    Object.keys(this.state.exps).map(function (key, index) {
      this.state.data[key] = eval.call(null, "(function () { var " + _vars + "; return " + this.state.exps[key] + "; })()");
    }.bind(this));
    this.props.onRowColumnChange && this.props.onRowColumnChange(rowIndex, columnIndex, value, this.state.data, props);
    this.forceUpdate();
  },
  setRowValue: function setRowValue(value) {
    switch (arguments.length) {
      case 1:
        zn.overwrite(this.state.data, value);
        break;

      case 2:
        this.state.data[arguments[0]] = arguments[1];
        break;
    }

    return this;
  },
  getRowValue: function getRowValue() {
    if (arguments.length) {
      return this.state.data[arguments[0]];
    } else {
      return this.state.data;
    }
  },
  __columnRender: function __columnRender(item, index) {
    var _this = this;

    var _value = this.state.data,
        _content = null;

    if (item.type != 'action' && item.type != 'checkbox' && this.state.vars.indexOf(item.name) == -1) {
      this.state.vars.push(item.name);
    }

    if (Object.prototype.toString.call(_value) === '[object Array]') {
      if (this.props.checkbox) {
        _value = _value[index - 1];
      } else {
        _value = _value[index];
      }
    } else {
      _value = this.state.data[item.convert || item.name];

      if (_value == undefined) {
        _value = this.state.data[item.name];
      }
    }

    if (this.props.columnRender) {
      _content = this.props.columnRender(this.props.index, index, this.state.data, item, _value);
    }

    if (_content == null) {
      var _type = item.type;

      if (zn.is(_type, 'string')) {
        if (_type[0] == '{' && _type[_type.length - 1] == '}') {
          if (!this.state.exps[item.name]) {
            this.state.exps[item.name] = _type.substring(1, _type.length - 1);
          }

          _content = React.createElement("span", {
            style: {
              padding: '0px 5px'
            }
          }, _value);
        } else {
          if (_type == 'checkbox') {
            _value = _value == undefined ? this.props.checked : _value;
            _content = this.state.editable ? React.createElement(zn.react.Icon, {
              icon: "fa-edit"
            }) : React.createElement(zn.react.Checkbox, {
              onChange: this.__onCheckBoxChange,
              checked: _value
            });
          } else {
            if (zn.path(window, _type)) {
              _input = zn.path(window, _type);
            } else {
              _input = zn.react[_type];
            }
          }
        }
      } else {
        _input = _type;
      }

      if (!_content) {
        var _Input = _input || zn.react.Input;

        if (item.props && item.props[0] == '{') {
          item.attrs = JSON.parse(item.props);
        }

        _content = React.createElement("span", null, _value);

        if (this.state.editable) {
          if (_Input == zn.react.Input) {
            _content = React.createElement(_Input, _extends({}, item, {
              value: _value,
              text: _value,
              onBlur: function onBlur(value, input, event) {
                return _this.__onTableColumnChange(_this.props.index, index, value, input, event, item);
              }
            }));
          } else {
            _content = React.createElement(_Input, _extends({}, item, {
              value: _value,
              text: _value,
              onChange: function onChange(value, input, event) {
                return _this.__onTableColumnChange(_this.props.index, index, value, input, event, item);
              }
            }));
          }
        }
      }
    }

    return React.createElement("td", {
      key: index,
      title: _value,
      className: 'text-align-' + (item.textAlign || 'left')
    }, _content);
  },
  render: function render() {
    return React.createElement("tr", {
      style: this.props.style,
      className: "table-row " + (this.state.editable ? 'editable' : '') + " " + (this.state.selected ? 'selected' : ''),
      onClick: this.__onRowClick
    }, (this.props.items || []).map(this.__columnRender));
  }
});