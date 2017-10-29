var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

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
		if (this.props.realtime) {
			this.props.onSearch && this.props.onSearch(_value);
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
		this.setState({ value: '' });
		event.target.nextSibling.focus();
		event.stopPropagation();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-search", this.props.className, this.state.focus ? 'foucs' : '') },
			React.createElement('i', { onClick: this.__onIconClick, className: "search-icon fa " + (this.state.searching ? "searching" : "fa-search") }),
			this.state.value && React.createElement('i', { className: 'search-clear fa fa-times-circle', onClick: this.__onClearClick }),
			React.createElement('input', _extends({}, this.props, {
				value: this.state.value,
				onFocus: this.__onInputFoucs,
				onBlur: this.__onInputBlur,
				onChange: this.__onInputChange,
				onClick: function onClick(event) {
					return event.stopPropagation();
				},
				className: 'search-input',
				type: 'text',
				name: 'value' }))
		);
	}
});