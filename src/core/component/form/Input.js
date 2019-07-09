require('./Input.less');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'Input',
	getDefaultProps: function (){
		return {
			attrs: {},
			className: '',
			disabled: false,
			readonly: null
		};
	},
	getValue: function () {
		var _value = ReactDOM.findDOMNode(this).value;
		if(this.props.attrs && this.props.attrs.type=='number'){
			_value = +_value;
		}

		if(this.props.attrs && this.props.attrs.type=='date'){
			if(!_value){
				return null;
			}
		}

		return _value;
	},
	setValue: function (value) {
		if(this.props.attrs && this.props.attrs.type=='date' && value){
			value = value.split(' ')[0];
		}
		return ReactDOM.findDOMNode(this).value = value, this;
	},
	__onChange: function (event){
		this.props.onChange && this.props.onChange(event.target.value, this, event);
	},
	__onBlur: function (event){
		this.props.onBlur && this.props.onBlur(event.target.value, this, event);
	},
	__onKeyUp: function (event){
		if(event.nativeEvent.keyCode==13){
			this.props.onEnter && this.props.onEnter(event, this);
		}
		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	render: function(){
		return (
			<input className={zn.react.classname('zr-input', this.props.className)}
				required={this.props.required}
				style={this.props.style}
				{...this.props.attrs}
				name={this.props.name}
				type={this.props.attrs.type||'text'}
				defaultValue={this.props.value}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				readOnly={this.props.readonly}
				onChange={this.__onChange}
				onBlur={this.__onBlur}
				onKeyUp={this.__onKeyUp} />
		);
	}
});
