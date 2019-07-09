"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      headers: [],
      data: []
    };
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    this._tableBody = this.refs.dstable.refs.body;
  },
  getValue: function getValue() {
    return this._tableBody.getData();
  },
  setValue: function setValue(data) {
    this._tableBody.setData(data);
  },
  getText: function getText() {},
  __onRowAdd: function __onRowAdd() {
    this._tableBody.insertRow({
      _editable: true
    });
  },
  __onRowDelete: function __onRowDelete(rowIndex, columnIndex, data, item, value) {
    console.log('delete', data);

    this._tableBody.deleteRow(data);
  },
  __onRowAppend: function __onRowAppend(rowIndex, columnIndex, data, item, value) {
    console.log('append', data);

    this._tableBody.insertRow({
      _editable: true
    }, rowIndex);
  },
  __tableHeaderRender: function __tableHeaderRender(item, index, columnSize) {
    if (index == 0) {
      return React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, React.createElement(zn.react.Icon, {
        tooltip: "Add Row(Insert Last Row)",
        icon: "fa-plus",
        onClick: this.__onRowAdd
      }));
    }
  },
  __tableColumnRender: function __tableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this = this;

    if (item.type == "action") {
      return React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, React.createElement(zn.react.Icon, {
        tooltip: "Delete Row(Delete This Row)",
        icon: "fa-minus",
        onClick: function onClick() {
          return _this.__onRowDelete(rowIndex, columnIndex, data, item, value);
        }
      }));
    }
  },
  render: function render() {
    return React.createElement(zn.react.Table, _extends({
      ref: "dstable"
    }, this.props, {
      singleSelect: false,
      editable: true,
      enableFilter: false,
      checkbox: false,
      showHeader: true,
      items: [{
        title: 'Actions',
        name: 'Actions',
        type: 'action',
        width: 50,
        textAlign: 'center'
      }].concat(this.props.headers),
      data: this.props.data,
      headerRender: this.__tableHeaderRender,
      columnRender: this.__tableColumnRender
    }));
  }
});