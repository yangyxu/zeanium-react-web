var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var RTList = require('../basic/RTList');
var RTFlexItem = require('../basic/RTFlexItem');

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
				zn.toast.error('The FormItem input component has not setValue method.');
			}
		}
		this.props.onFormItemDidMount && this.props.onFormItemDidMount(this);
	},
	validate: function validate() {
		if (!this.refs.input) {
			return zn.toast.error('Form item input component is undefined.'), false;
		}
		var _value = this.refs.input.getValue();
		if (this.props.required && (_value == '' || _value == null || _value == undefined)) {
			this.setState({
				status: 'danger'
			});
			return zn.toast.error(this.props.error || (this.props.title || '字段') + '是必填项.'), null;
		} else {
			this.setState({
				status: 'success'
			});
		}

		return _value;
	},
	__onInputChange: function __onInputChange(value, rtlist) {
		this.props.onChange && this.props.onChange(value, rtlist, this);
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

		return React.createElement(
			RTFlexItem,
			_extends({}, this.props, {
				className: zn.react.classname('zr-form-item', this.props.className, this.state.status, this.props.required ? 'required' : '') }),
			this.props.icon && React.createElement(
				'div',
				{ className: 'icon' },
				React.createElement('i', { className: "fa " + this.props.icon })
			),
			this.props.title && React.createElement(
				'div',
				{ className: 'title' },
				this.props.title
			),
			_input && React.createElement(_input, _extends({ ref: 'input' }, this.props, { className: this.props.inputClassName || '', onChange: this.__onInputChange })),
			this.props.suffix && React.createElement(
				'div',
				{ className: 'suffix' },
				this.props.suffix
			)
		);
	}
});