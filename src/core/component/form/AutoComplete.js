var React = require('react');
var ListView = require('../data/ListView');

var AutoComplete = React.createClass({
	displayName:'AutoComplete',
	getDefaultProps: function (){
		return {
			className: '',
			popoverWidth: 200,
			data: null
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			text: this.props.text
		}
	},
	__onEachListItem: function (item, value, rtlist){
		var _callback = this.props.itemHandler && this.props.itemHandler(item, value, rtlist, this);
		if(_callback===false){
			return _callback;
		}
		var _value = rtlist.getItemText(item);
		if(_value && _value.indexOf(value) == -1){
			return false;
		}
	},
	__onListItemClick: function (value, rtitem, rtlist, event){
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
		zn.react.Popover.close('_click');
	},
	__renderView: function (target){
		var _value = target.value;
		if(_value){
			zn.react.Popover.render({
				name: '_click',
				content: <ListView selectMode="none" {...this.props}
					className="rt-list-view-popover"
					onEachItem={(item, rtlist)=>this.__onEachListItem(item, _value, rtlist)}
					onItemClick={this.__onListItemClick} />
			}, function (popover, argv){
				popover.fixPosition(target);
			}.bind(this));
		}else {
			zn.react.Popover.close('_click');
		}
	},
	__onInputChange: function (event){
		this.setState({
			text: event.target.value
		});
		event.stopPropagation();
		this.__renderView(event.target);
	},
	__onClearClick: function (){
		this.setState({
			value: -1,
			text: ''
		});
		zn.react.Popover.close('_click');
	},
	getValue: function (){
		return this.state.value;
	},
	setValue: function (value){
		this.setState({
			value: value
		});
	},
	render: function(){
		return (
			<div className={'rt-auto-complete ' + this.props.className} >
				<i className="clear fa fa-times-circle" onClick={this.__onClearClick} />
				<input value={this.state.text}
					name={this.props.name}
					type="text"
					onChange={this.__onInputChange} />
			</div>
		);
	}
});


module.exports = AutoComplete;
