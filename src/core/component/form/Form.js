require('./Form.less');
var React = require('react');
var FormItem = require('./FormItem');
var ButtonGroup = require('../basic/ButtonGroup');

module.exports = React.createClass({
	displayName:'Form',
	getDefaultProps: function (){
		return {
			sync: false,
			method: 'POST',
			value: {},
			buttons: [
				{ text: '取消', type:'cancle', status: 'danger' },
				{ text: '确定', type: 'submit', status: 'primary' }
			],
			buttonsClassName: 'right',
			itemClassName: zn.react.isMobile()?'column':'',
			submitCallback: function (data){
				if(data.status==200){
					return true;
				} else {
					return false;
				}
			}
		}
	},
	getInitialState: function(){
		return {
			hiddens: zn.extend({}, this.props.hiddens),
			value: {}
		}
	},
	componentDidMount: function (){
		this.setValue(this.props.value);
	},
	componentWillReceiveProps: function (nextProps){
		if(nextProps.value!=this.props.value){
			this.setValue(nextProps.value);
		}
	},
	__parseItemValue: function (value){
		if(value.indexOf("javascript:")==0){
			return eval(value);
		}

		return value;
	},
	__onBtnsClick: function (props, btn, event){
		if(!props){
			return false;
		}
		switch (props.type) {
			case 'submit':
				if(btn.state.status=='disabled' || btn.state.loading){ return; }
				this._submit = btn;
				this.submit();
				break;
			case 'reset':
				this.reset();
				break;
			case 'cancle':
				zn.modal.close('Form:cancle.click');
				zn.popover.close('Form:cancle.click');
				break;
		}
	},
	__onSubmitCallbackHandler: function (data, xhr){
		this.loading(false);
		if(this.props.submitCallback(data)!==false){
			var _result = this.props.onSubmitSuccess && this.props.onSubmitSuccess(data, this, xhr);
			if(_result!==false){
				zn.modal.close();
				zn.notification.success(data.result || '操作成功');
			}
		}else {
			var _result = this.props.onSubmitError && this.props.onSubmitError(data, this, xhr);
			if(_result!==false){
				zn.notification.error(data.result || '操作失败！');
			}
		}
	},
	setValue: function (value){
		if(!value){
			return this;
		}
		if(zn.isZNObject(value)){
			return value.exec().then((data)=>this.setValue(data.result)), this;
		}
		if(zn.is(value, 'object')){
			var _item = null,
				_value = null,
				_text = null;
			setTimeout(function (){
				for(var key in this.state.hiddens){
					this.state.hiddens[key] = value[key] || this.state.hiddens[key];
				}
				for(var key in this.refs){
					_item = this.refs[key];
					_value = value[key];
					_text = value[key+'_convert'];
					if(_item&&_value !== undefined && _item.refs.input){
						_item.refs.input.setValue(_value, _text);
					}
				}
			}.bind(this), 0);
			this.setState({
				value: value
			});
		}

		return this;
	},
	getValue: function (){
		var _result = this.validate();
		if(_result === false){
			_result = {};
		}

		return _result;
	},
	validate: function (callback){
		var _data = {},
			_value = null;
		for(var name in this.refs){
			if(!this.refs[name]){
				continue;
			}
			if(this.refs[name].validate){
				_value = this.refs[name].validate(callback);
			}else {
				_value = this.refs[name].getValue(callback);
			}

			if(_value===false){
				return false;
			}
			if(_value !== null && _value !== undefined){
				if(this.props.valueKey){
					_data[this.refs[name].props[this.props.valueKey]] = _value;
				}else {
					_data[name] = _value;
				}
			} else {
				continue;
			}
		}

		for(var key in this.state.hiddens){
			if(this.state.hiddens[key]!==null && this.state.hiddens[key]!==undefined){
				_data[key] = _data[key] || this.state.hiddens[key];
			}
		}

		return _data;
	},
	submit: function (){
		var _result = this.validate();
		if(_result === false){
			return false;
		}

		if(zn.DEBUG){
			//zn.debug("Form Data", JSON.stringify(_result));
		}
		var _temp = (this.props.onSubmitBefore && this.props.onSubmitBefore(_result, this));
		if(_temp!==false){
			_result = _temp || _result;
		} else {
			return;
		}
		if(!this.props.action){
			return zn.alert('Form action is undefined.'), false;
		}
		this.loading(true);
		if(this.props.sync){
			ReactDOM.findDOMNode(this).submit();
		} else {
			if(this.props.merge){
				var _temp = {};
				_temp[this.props.merge] = _result;
				_result = _temp;
			}
			var _exts = this.props.exts;
			if(_exts){
				for(var _key in _exts){
					_result[_key] = _exts[_key];
				}
			}
			zn.http[this.props.method.toLowerCase()](this.props.action, _result)
				.then(this.__onSubmitCallbackHandler, function (data, xhr){
					this.loading(false);
					this.props.onSubmitError && this.props.onSubmitError(data, this);
				}.bind(this));
		}
	},
	loading: function (loading){
		if(this._submit){
			this._submit.loading(loading);
		}
	},
	reset: function (){
		for(var name in this.refs){
			if(!this.refs[name]){
				continue;
			}

			this.refs[name].refs.input.setValue('', '');
		}
	},
	__renderItems: function (items){
		if(items && items.length){
			return <div className="form-items">
				{
					items.map(function (item, index){
						item.index = index;
						if(item.type=='Hidden'){
							return this.state.hiddens[item.name] = item.value!=null ? this.__parseItemValue(item.value): null, null;
						}

						return <FormItem
									disabled={this.props.disabled}
									readonly={this.props.readonly}
									float={this.props.float}
									value={this.state.value[item.name]||''}
									onChange={this.props.onChange}
									{...item}
									className={zn.react.classname(this.props.itemClassName, item.className)}
									form={this} ref={item.name} />;
					}.bind(this))
				}
			</div>;
		}
	},
	__renderGroups: function (groups){
		if(groups && groups.length){
			return <div className="form-groups">
				{
					groups.map(function (group, index){
						return <zn.react.Group {...group} >
							{this.__renderItems(group.items)}
						</zn.react.Group>;
					}.bind(this))
				}
			</div>;
		}
	},
	__renderButtons: function (){
		var _btns = this.props.buttons || this.props.btns;
		if(_btns){
			if(zn.is(_btns, 'array')){
				_btns = { items: _btns };
			}
			return <ButtonGroup {..._btns} className={zn.react.classname("form-buttons flex", this.props.buttonsClassName)} onClick={this.__onBtnsClick} />;
		}
	},
	render: function(){
		if(this.props.sync){
			var _hiddens = this.state.hiddens;
			return (
				<form className={zn.react.classname('zr-form', this.props.className)} style={this.props.style}
					encType="multipart/form-data"
					method="POST">
					{
						Object.keys(_hiddens).map(function (hidden, index){
							return <input key={'hidden_' + hidden} type="hidden" name={hidden} value={_hiddens[hidden]} />;
						})
					}
					{this.__renderItems(this.props.items)}
					{this.__renderGroups(this.props.groups)}
					{this.__renderButtons()}
				</form>
			);
		}else {
			return (
				<div className={zn.react.classname('zr-form', this.props.className)} style={this.props.style}>
					{this.__renderItems(this.props.items)}
					{this.__renderGroups(this.props.groups)}
					{this.__renderButtons()}
				</div>
			);
		}
	}
});
