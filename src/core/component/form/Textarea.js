require('./Textarea.less');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'Textarea',
	getDefaultProps: function (){
		return {
			attrs: {},
			className: ''
		};
	},
	getValue: function () {
		//placeholder="ex.&#13;&#10;test1@test.com&#13;&#10;test2@test.com&#13;&#10;..."
		var _value = ReactDOM.findDOMNode(this).value;
		//console.log(_value.replace(/\u000A/g, '\n'));
		return _value;
	},
	setValue: function (value) {
		return ReactDOM.findDOMNode(this).value = value, this;
	},
	__onChange: function (event){
		this.props.onChange && this.props.onChange(event.target.value, this, event);
	},
	render: function(){
		return (
			<textarea className={"zr-textarea " + this.props.className}
						required={this.props.required}
						placeholder={this.props.placeholder}
						{...this.props.attrs}
						defaultValue={this.props.value}
						readonly={this.props.readonly}
						disabled={this.props.disabled||this.props.readonly}
						onChange={this.__onChange}
						name={this.props.name} />
		);
	}
});
