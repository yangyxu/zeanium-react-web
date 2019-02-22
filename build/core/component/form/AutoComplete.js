"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var ListView = require('../data/ListView');

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
        zn.popover.render(React.createElement(ListView, _extends({}, this.props, {
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
    return React.createElement("div", {
      className: zn.react.classname("zr-auto-complete", this.props.className),
      style: this.props.style
    }, React.createElement("div", {
      className: "status"
    }, this.state.loading && React.createElement("i", {
      className: "fa fa-spinner zr-self-loading"
    }), this.state.text && React.createElement("i", {
      className: "fa fa-times-circle",
      onClick: this.__onClearClick
    })), React.createElement("input", {
      type: "text",
      value: this.state.text,
      name: this.props.name,
      disabled: this.state.loading,
      onChange: this.__onInputChange
    }));
  }
});