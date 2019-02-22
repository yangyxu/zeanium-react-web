"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var ReactDOM = require('react-dom');

var Search = require('../basic/Search');

var ListView = require('./ListView');

module.exports = React.createClass({
  displayName: 'SearchListView',
  getInitialState: function getInitialState() {
    return {
      filterValue: null
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: "zr-search-list-view zr-flex-layout"
    }, React.createElement(Search, {
      onSearch: function onSearch(value) {
        return _this.setState({
          filterValue: value
        });
      },
      realtime: true,
      className: "search layout-header"
    }), React.createElement(ListView, _extends({
      filterValue: this.state.filterValue,
      className: "listview layout-header"
    }, this.props)));
  }
});