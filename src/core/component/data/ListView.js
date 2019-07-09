require('./ListView.less');
require('./ListView.Popover.less');
require('./ListView.Border.less');
require('./ListView.Default.less');
var React = require('react');
var RTItem = require('../basic/RTItem');
var RTList = require('../basic/RTList');

var ListView = React.createClass({
	displayName:'ListView',
	getInitialState: function(){
		return {
			value: this.props.value,
			currIndex: null
		}
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.value!==this.props.value){
			this.state.value = nextProps.value;
			this.forceUpdate();
		}
	},
	__getItemValue: function (item){
		var _itemValue = item[this.props.valueKey];
		if(_itemValue===undefined){
			_itemValue = item[this.props.textKey];
		}

		return _itemValue;
	},
	__valueHandler: function (item, index){
		if(!item){ return; }
		var _value = this.state.value,
			_itemValue = this.__getItemValue(item);

		switch (this.props.selectMode) {
			case 'radio':
				_value = _itemValue;
				break;
			case 'checkbox':
				_value = _value || ',';
				_itemValue = _itemValue + ',';
				if(_value.indexOf(_itemValue) == -1){
					_value = _value + _itemValue;
				}else {
					_value = _value.replace(new RegExp(_itemValue, 'gi'), '');
				}
				break;
			case 'none':

				break;
		}

		return _value;
	},
	isCurrent: function (item, index){
		var _value = this.state.value,
			_itemValue = this.__getItemValue(item);

		switch (this.props.selectMode) {
			case 'radio':
				if(_itemValue==undefined){
					if(this.state.currIndex==index){return true;}
					return false;
				}
				if(_value == _itemValue){
					return true;
				}
				break;
			case 'checkbox':
				_value = _value || ',';
				if(_value.indexOf(_itemValue)!==-1){
					return true;
				}
				break;
			case 'none':

				break;
		}

		return false;
	},
	__onItemClick: function (item, index, rtitem, event){
		this.setState({
			value: this.__valueHandler(item, index),
			currIndex: index
		}, function (){
			var _obj = {
				value: this.state.value,
				self: this,
				rtitem: rtitem,
				item: item,
				index: index,
				event: event
			};
			this.props.onClick && this.props.onClick(_obj);
			this.props.onItemClick && this.props.onItemClick(this.state.value, rtitem, this, item, event);
		}.bind(this));
	},
	__itemRender: function (item, index, rtlist){
		var _content = (
			<div style={{display: 'flex'}}>
				{!!item.icon && <i className={'fa ' + item.icon} style={{padding: 3}} />}
				<span>{item[this.props.textKey]}</span>
			</div>
		);
		if(this.props.itemRender){
			_content = this.props.itemRender(item, index, this);
		}
		return <RTItem
			disabled={this.props.disabled}
			float={this.props.float}
			{...item}
			className={zn.react.classname(this.props.itemClassName, item.className)}
			checked={this.isCurrent(item, index)}
			onClick={(self, event)=>this.__onItemClick(item, index, self, event)} >
			{_content}
		</RTItem>;
	},
	getValue: function (){
		return this.state.value;
	},
	setValue: function (value, callback){
		this.setState({ value: value }, callback);
	},
	__onEachItem: function (item, rtlist){
		if(this.props.filterValue){
			if(item[this.props.textKey].indexOf(this.props.filterValue)==-1){
				return false;
			}
		}
	},
	render: function(){
		return (
			<RTList {...this.props}
				onEachItem={this.__onEachItem}
				className={zn.react.classname('zr-list-view', this.props.className, (this.props.noborder?'noborder':''))}
				itemRender={this.__itemRender} />
		);
	}
});

ListView.defaultProps = {
	className: 'zr-list-view-default',
	itemClassName: '',
	float: 'none',
	filterValue: null,
	disabled: false,
	value: null,
	textKey: 'text',
	valueKey: 'value',
	noborder: false,
	selectMode: 'radio'  //radio, checkbox, none
};

module.exports = ListView;
