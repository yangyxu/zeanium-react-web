var React = require('react');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			headers: [],
			data: []
		};
	},
	getInitialState: function () {
		return {

		}
	},
	componentDidMount:function(){
		this._tableBody = this.refs.dstable.refs.body;
	},
	getValue: function (){
		return this._tableBody.getData();
	},
	setValue: function (data){
		this._tableBody.setData(data);
	},
	getText: function (){

	},
	__onRowAdd: function (){
		this._tableBody.insertRow({ _editable: true });
	},
	__onRowDelete: function (rowIndex, columnIndex, data, item, value){
		console.log('delete', data);
		this._tableBody.deleteRow(data);
	},
	__onRowAppend: function (rowIndex, columnIndex, data, item, value){
		console.log('append', data);
		this._tableBody.insertRow({ _editable: true }, rowIndex);
	},
	__tableHeaderRender: function (item, index, columnSize){
		if(index == 0){
			return <div style={{textAlign: 'center'}}>
				<zn.react.Icon tooltip='Add Row(Insert Last Row)' icon="fa-plus" onClick={this.__onRowAdd} />
			</div>;
		}
	},
	__tableColumnRender: function (rowIndex, columnIndex, data, item, value){
		if(item.type == "action"){
			return <div style={{textAlign: 'center'}}>
				<zn.react.Icon tooltip="Delete Row(Delete This Row)" icon="fa-minus" onClick={()=>this.__onRowDelete(rowIndex, columnIndex, data, item, value)} />
				{
					/*
						<zn.react.Icon title="Append Row(Append To This Row Before)" icon="fa-plus" onClick={()=>this.__onRowAppend(rowIndex, columnIndex, data, item, value)} />
					*/
				}
			</div>;
		}
	},
	render: function(){
		return (
			<zn.react.Table
				ref="dstable"
				{...this.props}
				singleSelect={false}
				editable={true}
				enableFilter={false}
				checkbox={false}
				showHeader={true}
				items={[{ title: 'Actions', name: 'Actions', type: 'action', width: 50, textAlign: 'center' }].concat(this.props.headers)}
				data={this.props.data}
				headerRender={this.__tableHeaderRender}
				columnRender={this.__tableColumnRender}/>
		);
	}
});
