var React = require('react');
var TableRow = require('./TableRow');

var TableBody = React.createClass({
	displayName:'TableBody',
	getInitialState:function(){
		return {
			curr: null,
			data: null,
			loading: false,
			value: this.props.value,
			values: []
		}
	},
	componentDidMount:function(){
		if(this.props.data && this.props.data.on){
			var _self = this;
			this.props.data.on('before', function (){
				if(_self.props.showLoading){
					zn.preloader.open({title: '加载中...'});
				}
			}).on('complete', function (){
				if(_self.props.showLoading){
					zn.preloader.close();
				}
			});
		}
		this._dataSource = Store.dataSource(this.props.data, {
			autoLoad: this.props.autoLoad||true,
			onExec: ()=>this.setState({loading: true}),
			onSuccess: function (data){
				this.__onDataLoaded(this.dataHandler(data));
				this.props.onData && this.props.onData(data);
			}.bind(this)
		});
	},
	componentWillUnmount: function (){

	},
	dataHandler: function (data){
		if(this.props.dataHandler){
			return this.props.dataHandler(data);
		}

		return data.result || data;
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.data!==this.props.data){
			this._dataSource.reset(nextProps.data);
		}
	},
	request: function (data, argv){
		this._dataSource.reset(data, argv);
	},
	refresh: function (){
		this._dataSource.refresh();
	},
	setData: function (data, argv){
		this._dataSource.reset(data, argv);
	},
	getData: function (){
		return this.state.data;
	},
	setValue: function (value){
		if(this.props.editable){
			return this.setData(value);
		}else {
			return this.setState({
				value: value
			});
		}
	},
	getValue: function (){
		if(this.props.editable){
			return this.getData();
		}else {
			return this.state.value;
		}
	},
	insertRow: function (row, index){
		if(index===undefined){
			this.state.data.push(row);
		} else {
			this.state.data.splice(index, 0, row);
		}
		this.forceUpdate();
	},
	deleteRow: function (row){
		this.state.data.splice(this.state.data.indexOf(row), 1);
		this.forceUpdate();
	},
	filter: function (filter) {
		this.setState({
			data: this.state.data.filter(filter||function (){})
		});
	},
	search: function (handler) {
		if(!this._data){
			this._data = this.state.data.slice(0);
		}
		this.setState({ data: this._data.filter(handler) });
	},
	checkedAll: function (value){
		if(value){
			this.setState({
				value: this.state.values
			});
		}else {
			this.setState({
				value: []
			});
		}
	},
	__onDataLoaded: function (data){
		if(!this.isMounted()){
			return false;
		}
		this.setState({ data: data, loading: false });
		if(this.props.fireIndex != undefined){
			this.fireClick(this.props.fireIndex);
		}
		this.props.onLoaded && this.props.onLoaded(data, this);
	},
	fireClick: function (index){

	},
	getSelectedRow: function (){
		return this.state.curr;
	},
	__onTableRowClick: function (event, data, row) {
		if(this.props.singleSelect){
			if(this.state.curr){
				this.state.curr.selected(false);
			}
			row.selected(true);
			this.state.curr = row;
		}
		this.props.onTableRowClick && this.props.onTableRowClick(event, data, row, this);
	},
	__onRowCheckBoxChange: function (value, row, checkbox){
		var _value = row.props.data[this.props.valueKey];
		if (!!value) {
			this.state.value.push(_value);
		} else {
			this.state.value.splice(this.state.value.indexOf(_value), 1);
		}
		this.props.onCheckBoxChange && this.props.onCheckBoxChange(value, row, checkbox, this);
	},
	render: function(){
		if(this.state.loading){
			return <tbody>
				<tr style={{ position: 'relative', height: 180 }}>
					<td style={{position:'absolute', width: '100%'}}>
						<zn.react.DataLoader style={{width: 100}} loader="arrow-circle" content="Loading ......" />
					</td>
				</tr>
			</tbody>;
		}
		this.state.values = [];
		return (
			<tbody style={this.props.tbodyStyle}>
				{
					this.state.data && this.state.data.map && this.state.data.map(function (item, index){
						var _result = this.props.onRowRender && this.props.onRowRender(item, index, this.state.data.length);
						if(_result){
							return _result;
						}
						var _value = item[this.props.valueKey];
						this.state.values.push(_value);
						return (typeof item === 'object')?<TableRow
									index={index}
									key={index + '_' + zn.uuid()}
									data={item}
									style={this.props.rowStyleValidate && this.props.rowStyleValidate(item, index, this.state.data.length)}
									items={this.props.items}
									checked={this.state.value.indexOf(_value)!=-1}
									editable={this.props.editable !== undefined ? this.props.editable: item._editable}
									checkbox={this.props.checkbox}
									rowRender={this.props.rowRender}
									columnRender={this.props.columnRender}
									draggable={!!this.props.onRowDragStart}
									onDidMount={this.__onRowDidMount}
									onRowClick={this.__onTableRowClick}
									onDragStart={(event)=>this.props.onRowDragStart(event, item, index)}
									onCheckBoxChange={this.__onRowCheckBoxChange}
									onRowColumnChange={this.props.onRowColumnChange} />:null;
					}.bind(this))
				}
			</tbody>
		);
	}
});

TableBody.defaultProps = {
	showLoading: true,
	singleSelect: true,
	rowStyleValidate: function (){},
	value: [],
	valueKey: 'id'
};

module.exports = TableBody;
