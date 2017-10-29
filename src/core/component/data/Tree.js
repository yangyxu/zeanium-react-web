var React = require('react');
var Checkbox = require('../form/Checkbox');
var RTList = require('../basic/RTList');

var TreeColumn = React.createClass({
	displayName: 'TreeColumn',
	getInitialState: function (){
		return {
			data: this.initData(),
			active: this.props.parent.props.activeAll,
			selected: this.props.selected || false,
			loading: false,
			hasChildren: false
		};
	},
	initData: function (){
		var _data = this.props.item.data || this.props.item.children;
		if(!_data && this.props.parent.props.data && this.props.parent.props.data.clone){
			_data = this.props.parent.props.data.clone({ pid: this.props.item.id });
		}

		return _data;
	},
	componentDidMount: function (){
		if(this.props.selected) {
			this.props.onClick(this.props.item, this, null);
		}
	},
	__hasChildren: function (){
		if(typeof this.props.item.data == 'array' && !!this.props.item.data.length){
			return true;
		}
		if(!!this.props.item.zn_tree_son_count){
			return true;
		}

		if(this.state.hasChildren){
			return true;
		}

		return false;
	},
	active: function(active){
		this.setState({
			active: active
		});
	},
	__onIconClick: function (event){
		if(this.state.loading){
			return;
		}

		event.stopPropagation();
		this.active(!this.state.active);
	},
	__getIconClassName: function (){
		if(this.state.loading){
			return 'fa-spinner zr-self-loading';
		}

		return (!!this.state.active?'fa-caret-down':'fa-caret-right');
	},
	__onCheckboxChange: function (value){
		this.state.checked = value;
		this.props.onChange && this.props.onChange(value, this.props.item, this);
		this.props.onCheckboxChange && this.props.onCheckboxChange(value, this.props.item, this);
	},
	__renderContent: function (){
		var _content = this.props.parent.props.contentRender && this.props.parent.props.contentRender(this.props.item, this);
		if(!_content){
			_content = this.props.item[this.props.parent.props.textKey];
		}

		return _content;
	},
	__onClick: function (event){
		if(this.state.loading){
			return;
		}
		this.setState({ selected: true });
		this.props.onClick(this.props.item, this, event);
	},
	refresh: function (){
		this.setState({
			hasChildren: true,
			active: true
		});
	},
	render: function (){
		var _hasChildren = this.__hasChildren();
		return (
			<div className={zn.react.classname("zr-tree-column", this.props.className, (this.state.selected?'column-selected':''))}>
				<div className="inner-content" onClick={this.__onClick}>
					<span className="tabs" style={{width: this.props.depth * 16}}>
						{!!_hasChildren && <i onClick={this.__onIconClick} className={"icon fa " + this.__getIconClassName()} />}
					</span>
					{this.props.parent.props.checkboxEnabled && <Checkbox checked={this.props.checked} disabled={this.props.parent.props.disabled} onChange={(event, value)=>this.__onCheckboxChange(value)} />}
					{this.__renderContent()}
				</div>
				{ !!_hasChildren && <Tree {...this.props.parent.props} {...this.props} active={this.state.active} data={this.state.data} />}
			</div>
		);
	}
});

var Tree = React.createClass({
	displayName: 'Tree',
	getDefaultProps: function (){
		return {
			depth: 0,
			textKey: 'zn_title',
			valueKey: 'id',
			checked: false,
			disabled: false,
			activeAll: false,
			checkboxEnabled: false
		}
	},
	__onItemClick: function (data, item, event){
		if(this._selectedItem === item){
			return;
		}
		if(this.props.parent){
			this.props.parent.__onItemClick(data, item, event);
		} else {
			if(this._selectedItem&&this._selectedItem.isMounted()){
				this._selectedItem.setState({ selected: false });
			}
			this._selectedItem = item;
			if(!this.props.checkboxEnabled){
				var _value = data[this.props.valueKey],
					_text = data[this.props.textKey];

				this.props.onValueChange && this.props.onValueChange({
					text: _text,
					value: _value,
					data: data,
					treeitem: item,
					tree: this
				});
			}
			this.props.onItemClick && this.props.onItemClick(data, item, this, event);
		}
	},
	__onItemCheckboxChange: function (checked, data){
		if(this.props.parent){
			this.props.parent.__onItemCheckboxChange(checked, data);
		} else {
			if(!data){ return; }
			var _value = this.props.value || ',',
				_text = this.props.text || ',',
				_itemValue = (data[this.props.valueKey]) + ',',
				_itemText = (data[this.props.textKey]) + ',';
			if(checked){
				if(_value.indexOf(',' + _itemValue) == -1) {
					_value = _value + _itemValue;
				}
				if(_text.indexOf(',' + _itemText) == -1) {
					_text = _text + _itemText;
				}
			}else {
				_value = _value.replace(new RegExp(',' + _itemValue, 'gi'), ',');
				_text = _text.replace(new RegExp(',' + _itemText, 'gi'), ',');
			}

			var _obj = {
				text: _text,
				value: _value,
				checked: checked,
				data: data
			};
			this.props.onValueChange && this.props.onValueChange(_obj);
			this.props.onItemCheckboxChange && this.props.onItemCheckboxChange(_obj);
		}
	},
	__itemRender: function (item, index){
		var _content = this.props.itemRender && this.props.itemRender(item, index);
		if(!_content && item){
			var _checked = null,
				_selected = null,
				_value = item[this.props.valueKey];
			if(this.props.checkboxEnabled){
				_checked = this.props.checked;
				if(!_checked){
					_checked = (this.props.value||',').indexOf(',' + _value + ',')!=-1;
				}
			}else {
				_selected = this.props.value === _value;
			}
			_content = <TreeColumn parent={this} key={index}
								depth={this.props.depth + 1}
								checked={_checked}
								selected={_selected}
								item={item}
								onClick={this.__onItemClick}
								onCheckboxChange={this.__onItemCheckboxChange} />;
		}

		return _content;
	},
	refresh: function (){
		return this.props.data.refresh && this.props.data.refresh(), this;
	},
	render:function(){
		return (
			<RTList {...this.props} className={zn.react.classname("zr-tree", this.props.className)} itemRender={this.__itemRender} onLoaded={this.__onLoaded} />
		);
	}
});

module.exports = Tree;
