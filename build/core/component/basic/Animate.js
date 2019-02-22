"use strict";

var React = require('react');

var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: 'Animate',
  getDefaultProps: function getDefaultProps() {
    return {
      in: 'zn-animate-move-from-right',
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
  in: function _in(animation, onIn) {
    this.state.animating = true;
    this.state.active = true;
    return this.setState({
      animation: animation || this.props.in
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
    return React.createElement("div", {
      className: zn.react.classname("zr-animate", this.state.active || this.state.animating ? 'active' : '', !!this.props.onTop && this.state.animation ? 'ontop' : '', this.props.className, this.state.animation)
    }, this.props.children);
  }
});