var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Dropdown = require('../basic/Dropdown');
var ListView = require('../data/ListView');

module.exports = React.createClass({
	displayName: 'Menu',
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
	__onListItemClick: function __onListItemClick(value, rtlistitem, rtlist, item) {
		this.setValue(value, item[rtlist.props.textKey]);
		zn.popover.close('Menu:item.click');
	},
	__popoverRender: function __popoverRender() {
		return React.createElement(ListView, _extends({}, this.props, { style: this.props.listStyle, className: zn.react.classname("zr-list-view-popover", this.props.listClassName), emptyView: true, value: this.state.value, onItemClick: this.__onListItemClick }));
	},
	render: function render() {
		return React.createElement(
			Dropdown,
			_extends({}, this.props, { popoverRender: this.__popoverRender, className: zn.react.classname("zr-menu", this.props.className) }),
			React.createElement(
				'div',
				{ className: 'menu-view' },
				React.createElement(
					'span',
					{ className: 'text' },
					this.__textRender()
				),
				React.createElement('i', { className: 'trigger fa fa-angle-down' })
			)
		);
	}
});