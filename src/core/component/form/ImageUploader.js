require('./ImageUploader.less');
var React = require('react');
var AjaxUploader = require('./AjaxUploader');

module.exports = React.createClass({
	getDefaultProps: function () {
		return {
			value: './images/DefaultAvatar.png'
		};
	},
	getInitialState: function() {
    	return {
			value: this.props.value
		};
  	},
	__onChange: function (files){
		var _file = files[0];
		if(_file.type.indexOf('image')==-1){
			alert('文件[' + _file.name + ']不是图片类型');
			return false;
		}
	},
	__onComplete: function (data, uploader){
		var _file = data[0];
		if(_file){
			var _value = _file.url;
			if(_value.indexOf('/')!=0){
				_value = "/" + _value;
			}
			console.log(_value);
			this.setValue(_value);
		}
		this.props.onComplete && this.props.onComplete(_file, this);
	},
	getValue: function (){
		return this.state.value;
	},
	setValue: function (value){
		this.setState({ value: value }, function (){
			this.props.onChange && this.props.onChange(value, this);
		}.bind(this));
	},
	render:function(){
		var _src = this.state.value;
		if(_src.indexOf('/')==0){
			_src = zn.http.fixURL(this.state.value);
		}
		return (
			<AjaxUploader
				{...this.props}
				className='zr-image-uploader'
				onChange={this.__onChange}
				onComplete={this.__onComplete}
				multipart={false} >
				<div className="container">
					{!!_src?<img className="img" src={_src} />:<i className="upload fa fa-plus" />}
				</div>
			</AjaxUploader>
		);
	}
});
