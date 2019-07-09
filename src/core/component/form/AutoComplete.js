require('./AutoComplete.less');
var React = require('react');
var ListView = require('../data/ListView');

module.exports = React.createClass({
	displayName:'AutoComplete',
	getDefaultProps: function (){
		return {
			textKey: 'text',
			valueKey: 'value'
		}
	},
	getInitialState: function (){
		return {
			data: [],
			value: this.props.value,
			text: this.props.text,
			autoLoad: true,
			loading: false
		}
	},
	componentDidMount: function (){
		this._dataSource = zn.store.dataSource(this.props.items || this.props.data, {
			autoLoad: this.props.autoLoad || true,
			onExec: function (){
				var _result = this.props.onLoading && this.props.onLoading();
				if(_result !== false && this.isMounted()){
					this.setState({
						loading: true
					});
				}
			}.bind(this),
			onSuccess: function (data){
				this.__onDataLoaded(this.__dataHandler(data));
				this.props.onData && this.props.onData(data);
			}.bind(this)
		});
	},
	__dataHandler: function (data){
		if(this.props.dataHandler){
			return this.props.dataHandler(data);
		}

		return data.result || data;
	},
	__onDataLoaded: function (data){
		if(!this.isMounted()){
			return false;
		}
		if(data.length==undefined){
			var temp = [];
			for(var key in data){
				temp.push(data[key]);
			}
			data = temp;
		}

		this.state.data = data;
		this.setState({ data: data, loading: false });
		this.props.onLoaded && this.props.onLoaded(data, this);
	},
	__onListItemClick: function (value){
		var _text = value.item[value.self.props.textKey],
			_value = value.item[value.self.props.valueKey];

		this.setState({
			value: _value,
			text: _text
		});

		this.props.onChange && this.props.onChange({
			text: _text,
			value: _value,
			item: value.item
		}, this);

		zn.popover.close('AutoComplete:listitem.click');
	},
	__renderView: function (target){
		var _value = target.value;
		if(_value){
			_value = this.__filterData(_value);
			if(_value.length){
				zn.popover.render(<ListView {...this.props} onClick={this.__onListItemClick} data={_value} />, zn.extend({
					event: 'click',
					target: target,
					popoverWidth: '100%'
				}, this.props));
			}else {
				zn.popover.close('AutoComplete:empty.review');
			}
		}else {
			zn.popover.close('AutoComplete:empty.review');
		}
	},
	__filterData: function (value){
		var _data = [];
		this.state.data.map(function (item, index){
			var _callback = this.props.itemFilter && this.props.itemFilter(item, value, this);
			if(_callback===false){
				return;
			}
			var _value = (typeof item == 'string') ? item : item[this.props.textKey];
			if(_value && _value.indexOf(value) != -1){
				_data.push(item);
			}
		}.bind(this));

		return _data;
	},
	__onInputChange: function (event){
		this.setState({
			text: event.target.value
		});
		event.stopPropagation();
		this.__renderView(event.target);
	},
	__onClearClick: function (event){
		this.setState({
			value: -1,
			text: ''
		});
		event.target.parentNode.nextSibling.focus();
		zn.popover.close('AutoComplete:clear.click');
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
			<div className={zn.react.classname("zr-auto-complete", this.props.className)} style={this.props.style} >
				<div className="status">
					{this.state.loading && <i className="fa fa-spinner zr-self-loading" />}
					{this.state.text && <i className="fa fa-times-circle" onClick={this.__onClearClick} />}
				</div>
				<input type="text" value={this.state.text}
					name={this.props.name}
					disabled={this.state.loading}
					onChange={this.__onInputChange} />
			</div>
		);
	}
});
