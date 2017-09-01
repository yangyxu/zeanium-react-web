var React = require('react');
var ListView = require('../data/ListView');

var AutoComplete = React.createClass({
	displayName:'AutoComplete',
	getDefaultProps: function (){
		return {
			data: null
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value,
			text: this.props.text,
			loading: false
		}
	},
	componentDidMount: function (){

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

		zn.popover.close('AutoComplete:listitem.click');
	},
	__renderView: function (target){
		var _value = target.value;
		if(_value){
			this.setState({ loading: true });
			this.props.data.exec().then(function (data){
				console.log(data);
				this.setState({ loading: false });
				zn.popover.render(<ListView data={data} onClick={this.__onListItemClick} />, zn.extend({
					event: 'click',
					target: target,
					popoverWidth: '100%'
				}, this.props));
			}.bind(this));
		}else {
			zn.popover.close('AutoComplete:empty.review');
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
					<i className="fa fa-times-circle" onClick={this.__onClearClick} />
				</div>
				<input value={this.state.text}
					name={this.props.name}
					type="text"
					onChange={this.__onInputChange} />
			</div>
		);
	}
});


module.exports = AutoComplete;
