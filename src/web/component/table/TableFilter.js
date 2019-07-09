var React = require('react');

module.exports = React.createClass({
	displayName:'TableFilter',
	getDefaultProps: function () {
		return {
			filterData: {},
			onFilterSearch: function (){}
		};
	},
	getInitialState:function(){
		return {

		}
	},
	componentDidMount:function(){
		this.search(this.props.filterData);
	},
	__onFilter: function (){
		this.search(this.props.filterData);
	},
	search: function (data){
		data && this.props.onFilterSearch(data, this);
	},
	__onFilterChange: function (value, item){
		if(this.props.filterData[item.name]){
			this.props.filterData[item.name].opt = value.value;
		} else {
			this.props.filterData[item.name] = {
				key: item.name,
				opt: value.value
			}
		}
	},
	__onFilterOptChange: function (opt, name){
		if(this.props.filterData[name]){
			this.props.filterData[name].opt = opt;
		} else {
			this.props.filterData[name] = {
				key: name,
				opt: opt
			}
		}

		this.props.onFilter && this.props.onFilter(this.validate());
	},
	__onFilterItemChange: function (value, input){
		this.props.onFilter && this.props.onFilter(this.validate(), input);
	},
	validate: function (){
		var _value = {}, _ref = null;
		for(var key in this.refs){
			_ref = this.refs[key];
			//if(item.state.opt && item.validate()){

			if(_ref.state.opt){
				_value[key.split('_convert')[0]] = {
					opt: _ref.state.opt,
					value: _ref.validate()
				};
			}
		}

		return _value;
	},
	__onFilterItemCancle: function (){
		this.props.onFilter && this.props.onFilter(this.validate());
	},
	__itemRender: function (item, index){
		var _content = null;
		switch (item.type) {
			case 'checkbox':
				_content = <zn.react.Icon icon="fa-filter" />;
				break;
			case 'action':
				item.textAlign = 'center';
				_content = <zn.react.Icon onClick={this.__onFilter} icon="fa-search" />
				break;
			default:
				if(item.filter){
					var _filter = zn.overwrite(item.filter||{}, { type:'Input', fullWidth: true });
					var _events = {
						onChange: this.__onFilterItemChange
					};
					if(_filter.type=='Input'){
						_events = {
							onEnter: this.__onFilterItemChange
						}
					}
					_content = <zn.react.FilterItem
									popoverWidth={80}
									opts={['like','=']}
									name={item.name}
									ref={item.name}
									{..._filter}
									onOptChange={(opt)=>this.__onFilterOptChange(opt, item.name)}
									onCancle={this.__onFilterItemCancle}
									{..._events} />;
				}else {
					_content = null;
				}

				break;
		}

		return <td key={index} className={'text-align-'+(item.textAlign||'left')} width={(item.width?item.width:0)}>{_content}</td>
	},
	render:function(){
		return (
			<tr className="table-row editable filter">
				{
					(this.props.items||[]).map(this.__itemRender)
				}
			</tr>
		);
	}
});
