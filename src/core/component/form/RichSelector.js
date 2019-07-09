require('./RichSelector.less');
var React = require('react');
module.exports = React.createClass({
	displayName: 'RichInput',
	getInitialState: function (){
		return {
			value: this.props.value||'',
			text: this.props.text||'',
			active: this.props.active||false
		}
	},
	getValue: function () {
		return this.state.value;
	},
	setValue: function (value, text) {
		this.setState({
			value: value,
			text: text || value
		}, function (){
			this.props.onChange && this.props.onChange(value, text, this);
		});
	},
	__textRender: function (){
		var _result = this.props.textRender && this.props.textRender(this.state.text);
		if(!_result){
			_result = this.state.text||this.props.placeholder;
		}

		return _result
	},
	__onSelectorChange: function (value, text) {
		this.setState({
			value: value,
			text: text,
			active: false
		});
		this.props.onChange && this.props.onChange(value, text);
	},
	__selectorRender: function (){
		if(!this.props.selector){
			return zn.toast.error('selector is null.'), false;
		}
		return <this.props.selector {...this.props}
					style={this.props.selectorStyle}
					value={this.state.value}
					onChange={this.__onSelectorChange} />;
	},
	render: function(){
		return (
			<div className={zn.react.classname("zr-rich-selector", this.props.className)} data-active={this.state.active}>
				<div className="display-view" onClick={()=>this.setState({ active: !this.state.active })}>
					<span className="text">{this.__textRender()}</span>
					<i className="trigger fa fa-angle-down" />
				</div>
				<div className="rich-selector zr-arrow zr-arrow-color-white zr-arrow-placement-left zr-arrow-direction-top zn-animate-scale-up">
					{this.__selectorRender()}
				</div>
			</div>
		);
	}
});
