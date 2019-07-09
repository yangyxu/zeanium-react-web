require('./DropdownSelector.less');
var React = require('react');
var Dropdown = require('../basic/Dropdown');
module.exports = React.createClass({
	displayName: 'DropdownSelector',
	getDefaultProps: function (){
		return {
			eventType: 'click'
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value||'',
			text: this.props.text||''
		}
	},
	getValue: function () {
		return this.state.value;
	},
	setValue: function (value, text) {
		this.setState({
			value: value,
			text: text
		}, function (){
			this.props.onChange && this.props.onChange(value, text, this);
		});
	},
	__textRender: function (){
		return this.state.text||this.props.placeholder;
	},
	__onSelectorChange: function (value){
		//this.setValue(value, item[rtlist.props.textKey]);
		zn.popover.close('DropdownSelector:selector.onchange');
	},
	__popoverRender: function (){
		if(!this.props.selector){
			return zn.toast.error('selector is null.'), false;
		}
		var _props = this.props.props || this.props;
		return <this.props.selector {..._props}
					className={zn.react.classname("zr-dropdown-selector-selector-view", _props.selectorClassName || _props.className)}
					style={_props.selectorStyle || _props.style}
					value={this.state.value}
					onChange={this.__onSelectorChange} />;
	},
	render: function(){
		return (
			<Dropdown {...this.props} popoverRender={this.__popoverRender} popoverWidth={'100%'} popoverHeight={200} className={zn.react.classname("zr-dropdown-selector", this.props.className)} >
				<div className="zr-dropdown-selector-text-view">
					<span className="text">{this.__textRender()}</span>
					<i className="trigger fa fa-angle-down" />
				</div>
			</Dropdown>
		);
	}
});
