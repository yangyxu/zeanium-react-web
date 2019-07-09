require('./FormItem.less');
require('./FormItem.Wap.Inline.less');
require('./FormItem.Web.Inline.less');
var React = require('react');
var RTFlexItem = require('../basic/RTFlexItem');

module.exports = React.createClass({
	displayName:'FormItem',
	getDefaultProps: function (){
		return {
			disabled: false,
			className: ''
		}
	},
	getInitialState: function(){
		return {
			value: this.props.value,
			status: 'default'
		}
	},
	componentDidMount: function (){
		if(this.props.value!=undefined && this.refs.input){
			if(this.refs.input.setValue){
				this.refs.input.setValue(this.props.value);
			}else {
				zn.notification.error('The FormItem input component ' + this.props.title + ' has not setValue method.');
			}
		}
	},
	validate: function (callback){
		if(!this.refs.input){
			return zn.notification.error('Form item input component ' + this.props.title + ' is undefined.'), false;
		}
		var _value = this.refs.input.getValue();
		if(this.props.required && (_value === '' || _value === null || _value === undefined)){
			this.setState({
				status: 'danger'
			});
			var _msg = this.props.error || ((this.props.title||'字段')+'是必填项.');
			if(zn.react.isMobile()){
				zn.notification.error(_msg);
			}else {
				zn.notification.error(_msg)
			}
			return false;
		}

		var _callback = callback && callback(_value, this);
		if(_callback == false){
			return this.setState({
				status: 'danger'
			}), false;
		}

		return this.setState({
			status: 'success'
		}), _value;
	},
	__onInputChange: function (value, input){
		if(value==null){
			return;
		}
		this.props.onChange && this.props.onChange(value, input, this);
	},
	render: function(){
		var _input = null,
			_type = this.props.type;
		if(zn.is(_type, 'string')){
			if(zn.path(window, _type)){
				_input = zn.path(window, _type);
			}else {
				_input = zn.react[_type];
			}
		}else {
			_input = _type;
		}

		if(_type=='FormTitle'){
			return _input && <_input {...this.props} ref="input" className={this.props.inputClassName||''} onChange={this.__onInputChange} />;
		}

		return (
			<RTFlexItem
				{...this.props}
				className={zn.react.classname('zr-form-item', this.props.className, this.state.status, this.props.required?'required':'')} >
				<div className="zrfi-header">
					{this.props.icon && <div className="icon"><i className={"fa " + this.props.icon} /></div>}
					{this.props.title && <div className="title">{this.props.title}</div>}
				</div>
				<div className="zrfi-body">
					{!!_input && <_input {...this.props} ref="input" className={this.props.inputClassName||''} onChange={this.__onInputChange} />}
					{this.props.suffix && <span className="suffix">{this.props.suffix}</span>}
				</div>
			</RTFlexItem>
		);
	}
});
