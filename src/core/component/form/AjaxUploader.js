require('./AjaxUploader.less');
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'AjaxUploader',
	getDefaultProps: function () {
		return {
			action: '/zn.plugin.admin/uploadFiles',
			changeSubmit: true,
			hiddens: {},
			multiple: true,
			size: ''
		};
	},
	getInitialState: function (){
		return {
			loading: false,
			progress: 0
		};
	},
	__onInputChange: function (event){
		if(this.state.loading){
			return false;
		}
		var _files = event.nativeEvent.target.files;
		if(_files.length){
			var _result = this.props.onChange && this.props.onChange(_files, this);
			if(_result!==false && this.props.changeSubmit){
				var _formData = new FormData(),
					_hiddens = this.props.hiddens||{},
					_hidden = null;

				if(zn.is(_result, 'object')){
					zn.extend(_hiddens, _result);
				}
				//console.log(_hiddens);
				for(var key in _hiddens){
					_hidden = _hiddens[key];
					if(typeof _hidden == 'object'){
						_hidden = JSON.stringify(_hidden);
					}

					_formData.append(key, _hidden);
				}
				for(var i=0, _len = _files.length; i<_len; i++){
					_formData.append('upload_file_' + i, _files[i]);
				}
				this.ajaxUpload(_formData);
			}
		}
	},

	__onInputClick: function (event){
		if(this.state.loading){
			return false;
		}
		event.stopPropagation();
		this.props.onUploaderClick && this.props.onUploaderClick(event, this);
	},
	ajaxUpload: function (data){
		if(!this.props.action){
			alert('Uploader action is not exist.');
			return false;
		}
		this.setState({ loading: true });
		var _host = window.File_Uploader_Host;
		if(!_host){
			_host = window.location.origin;
		}

		var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", this.__ajaxUploadProgress, false);
		xhr.addEventListener("load", this.__ajaxUploadComplete, false);
		xhr.addEventListener("error", this.__ajaxUploadError, false);
		xhr.addEventListener("abort", this.__ajaxUploadAbort, false);
		xhr.open("POST", _host + this.props.action, "true");
		xhr.send(data);
	},
	__ajaxUploadProgress: function (evt){
		if (evt.lengthComputable) {
			evt.progress = Math.round(evt.loaded * 100 / evt.total);
			this.setState({
				progress: evt.progress
			});
		}
		console.log(evt);
		this.props.onUploading && this.props.onUploading(evt, this);
	},
	__ajaxUploadComplete: function (evt){
		this.reset();
		var _text = evt.target.responseText;
		if(_text.indexOf('<!DOCTYPE HTML>') == 0){
			alert(_text);
			return;
		}
		var _data = JSON.parse(_text);
		this.setState({
			progress: 0
		});
		if(_data.status==200){
			this.props.onComplete && this.props.onComplete(_data.result, this);
		}else {
			zn.confirm(_data.result);
			this.props.onError && this.props.onError(_data.result, this);
		}
	},
	__ajaxUploadError: function (event){
		this.reset();
		this.props.onError && this.props.onError(event.message, this);
	},
	__ajaxUploadAbort: function (event){
		this.reset();
		this.props.onAbort && this.props.onAbort(event, this);
	},
	reset: function (){
		this.setState({ loading: false });
		ReactDOM.findDOMNode(this).reset();
	},
	render: function(){
		var _host = window.File_Uploader_Host;
		if(!_host){
			_host = window.location.origin;
		}

		return (
			<form className={zn.react.classname("zr-ajax-uploader", this.props.className)}
				style={this.props.style}
				data-loading={this.state.loading}
				action={_host + (this.props.action||'')}
				encType="multipart/form-data"
				method="POST">
				{
					!!this.state.progress && <div className="progress--bar" style={{height: this.state.progress + '%' }}>{this.state.progress}%</div>
				}
				{this.props.children}
				{this.props.size && <span className="size">{this.props.size}</span>}
				<input multiple={this.props.multiple} className="input" type="file" name={this.props.name||('upload_file_' + (new Date()).getTime())} onChange={this.__onInputChange} onClick={this.__onInputClick} />
			</form>
		);
	}
});
