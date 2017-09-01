var React = require('react');
var ListView = require('../data/ListView');

var AutoComplete = React.createClass({
	displayName: 'AutoComplete',
	getDefaultProps: function getDefaultProps() {
		return {
			data: null
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value,
			text: this.props.text,
			loading: false
		};
	},
	componentDidMount: function componentDidMount() {},
	__onEachListItem: function __onEachListItem(item, value, rtlist) {
		var _callback = this.props.itemHandler && this.props.itemHandler(item, value, rtlist, this);
		if (_callback === false) {
			return _callback;
		}
		var _value = rtlist.getItemText(item);
		if (_value && _value.indexOf(value) == -1) {
			return false;
		}
	},
	__onListItemClick: function __onListItemClick(value, rtitem, rtlist, event) {
		var _text = rtitem.props[rtlist.props.textKey],
		    _value = rtitem.props[rtlist.props.valueKey];

		this.setState({
			value: _value,
			text: _text
		});

		this.props.onChange && this.props.onChange({
			text: _text,
			value: _value,
			item: rtitem.props
		}, this);

		zn.popover.close('AutoComplete:listitem.click');
	},
	__renderView: function __renderView(target) {
		var _value = target.value;
		if (_value) {
			this.setState({ loading: true });
			this.props.data.exec().then(function (data) {
				console.log(data);
				this.setState({ loading: false });
				zn.popover.render(React.createElement(ListView, { data: data, onClick: this.__onListItemClick }), zn.extend({
					event: 'click',
					target: target,
					popoverWidth: '100%'
				}, this.props));
			}.bind(this));
		} else {
			zn.popover.close('AutoComplete:empty.review');
		}
	},
	__onInputChange: function __onInputChange(event) {
		this.setState({
			text: event.target.value
		});
		event.stopPropagation();
		this.__renderView(event.target);
	},
	__onClearClick: function __onClearClick() {
		this.setState({
			value: -1,
			text: ''
		});
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
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-auto-complete", this.props.className), style: this.props.style },
			React.createElement(
				'div',
				{ className: 'status' },
				this.state.loading && React.createElement('i', { className: 'fa fa-spinner zr-self-loading' }),
				React.createElement('i', { className: 'fa fa-times-circle', onClick: this.__onClearClick })
			),
			React.createElement('input', { value: this.state.text,
				name: this.props.name,
				type: 'text',
				onChange: this.__onInputChange })
		);
	}
});

module.exports = AutoComplete;