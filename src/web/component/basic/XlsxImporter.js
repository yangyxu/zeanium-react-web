require('./XlsxImporter.less');
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		var _hiddens = this.props.hiddens||{};
		if(!this.props.editable){
			zn.overwrite(_hiddens, {
				model: this.props.model,
				fields: this.props.fields
			});
		}

    	return {
			value: '',
			hiddens: _hiddens,
			data: []
		};
  	},
	__onChange: function (files){
		var _file = files[0];
		this.setState({
			value: _file.name
		});
		if(_file.name.indexOf('xls')==-1){
			return (zn.notification.error || window.alert).call(null, '文件[' + _file.name + ']不是 xlsx / xls 类型'), false;
		}

		if(!this.props.action){
			return (zn.notification.error || window.alert).call(null, 'The action is empty'), false;
		}

		if(this.props.editable){
			return {
				model: this.refs.model.refs.input.getValue(),
				fields: this.refs.fields.refs.input.getValue()
			}
		}
	},
	__onComplete: function (data, uploader){
		this.setState({
			data: data
		});
		this.props.onComplete && this.props.onComplete(data, uploader);
	},
	getValue: function (){
		return this.state.value;
	},
	setValue: function (value){
		this.setState({ value: value });
	},
	__renderEditer: function (){
		if(this.props.editable){
			return <div>
				<zn.react.FormItem ref="model" value={this.props.model} title="Model:" type="Input" />
				<zn.react.FormItem ref="fields" value={this.props.fields} title="Fields:" type="Input" />
			</div>;
		}
	},
	__renderSheet: function (item){
		var _data = item.data,
			_items = _data.shift();
		if(!_items){
			return null;
		}
		_items = _items.map(function (value){
			return { title: value };
		});
		return <zn.react.Table items={_items} showHeader={true} data={_data} />;
	},
	__renderTables: function (){
		if(this.state.data.length){
			return (
				<ul className="xlsx-importer-list">
					{
						this.state.data.map(function (item, index){
							return <li key={index}>
								<zn.react.Card title={item.title} >
									{this.__renderSheet(item)}
								</zn.react.Card>
							</li>;
						}.bind(this))
					}
				</ul>
			);
		}
	},
	__onError: function (msg){
		zn.notification.error('Import Error: ' + msg);
		this.props.onError && this.props.onError(msg);
	},
	render:function(){
		return (
			<div className='zr-xlsx-importer'>
				<zn.react.AjaxUploader
					{...this.props}
					hiddens={this.state.hiddens}
					className='xlsx-importer-uploader'
					onChange={this.__onChange}
					onError={this.__onError}
					onComplete={this.__onComplete}
					multipart={false} >
					<div className="container">
						<i className="fa fa-file-excel-o" />
						{this.state.value}
					</div>
				</zn.react.AjaxUploader>
				{this.__renderEditer()}
				{this.__renderTables()}
			</div>
		);
	}
});
