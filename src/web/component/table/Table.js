require('./Table.less');
var React = require('react');
var TableHeader = require('./TableHeader');
var TableBody = require('./TableBody');
var TableColgroup = require('./TableColgroup');

module.exports = React.createClass({
	displayName:'Table',
	getDefaultProps: function (){
		return {
			items: [],
			fixed: false,
			className: ''
		};
	},
	getInitialState: function(){
		return {
			searchWhereKeys: []
		}
	},
	__onHeaderCheckBoxChange: function (value){
		this.refs.body.checkedAll(value);
	},
	__onBodyCheckBoxChange: function (value, row, checkbox){
		this.props.onBodyCheckBoxChange && this.props.onBodyCheckBoxChange(value, row, checkbox, this);
	},
	__onFilter: function (data, filter){
		if(Object.keys(data).length){
			var _where = this.props.data._data.where || {},
				_key = null,
				_value = null;
			this.state.searchWhereKeys.map(function (key, index){
				_where[key] = null;
				delete _where[key];
			}.bind(this));
			this.state.searchWhereKeys = [];
			zn.each(data, function (value, key){
				_key = key+'&'+value.opt;
				_value = value.value;
				if(_value !== null && _value != ''){
					_where[_key] = _value;
					this.state.searchWhereKeys.push(_key);
				}else {
					_where[_key] = null;
					delete _where[_key];
				}
			}.bind(this));
			this.props.onFilter && this.props.onFilter();
			this.props.data._data.pageIndex = 1;
			if(Object.keys(_where).length){
				this.props.data._data.where = _where;
			}else {
				this.props.data._data.where = null;
				delete this.props.data._data.where;
			}
			this.props.data.exec();
		}
	},
	getCheckedItems: function (filter){
		return this.refs.body.getCheckedItems(filter);
	},
	setData: function (data, argv){
		this.refs.body.setData(data, argv);
	},
	insertRow: function (data, argv){
		this.refs.body.insertRow(data);
	},
	refresh: function (){
		this.refs.body.refresh();
	},
	getValue: function (){
		return this.refs.body.getValue();
	},
	setValue: function (value){
		this.refs.body.setValue(value);
	},
	render: function(){
		var _items = this.props.items.slice(0);
		if(this.props.checkbox&&_items.length&&_items[0].type!='checkbox'){
			_items.unshift({
				type: 'checkbox',
				textAlign: 'center',
				width: this.props.checkbox
			});
		}
		this._columnSize = _items.length;
		return (
			<table style={this.props.style} className={"zr-table " + this.props.className} data-fixed={this.props.fixed} cellPadding="0" cellSpacing="0">
				<TableColgroup {...this.props} items={_items} />
				{this.props.showHeader && <TableHeader
					{...this.props}
					items={_items}
					columnSize={this._columnSize}
					onCheckBoxChange={this.__onHeaderCheckBoxChange}
					onFilter={this.__onFilter}/>}
				<TableBody
					ref="body"
					{...this.props}
					items={_items}
					columnSize={this._columnSize}
					onCheckBoxChange={this.__onBodyCheckBoxChange}/>
			</table>
		);
	}
});
