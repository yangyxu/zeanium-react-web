require('./Files.less');
var React = require('react');

module.exports = React.createClass({
	displayName:'Files',
	getInitialState: function(){
		return {

		}
	},
	__onPreview: function (item){
		zn.modal.full(<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'scroll', position: 'absolute', width: '100%', height: '100%' }}>{this.__renderPreviewFileByType(item.split('.').pop().toLowerCase(), item)}</div>);
	},
	__renderContent: function (item){
		var _temp = this.props.onFileRender && this.props.onFileRender(item);
		if(_temp){
			return _temp;
		}

		return <div onClick={()=>this.__onPreview(item)}>{this.__renderFileByType(item.split('.').pop().toLowerCase(), item)}</div>;
	},
	__renderPreviewFileByType: function (type, value){
		if(this.props.isImage){
			return <img src={zn.http.fixURL(value)} />;
		}
		switch (type) {
			case 'bmp':
			case 'jpg':
			case 'png':
			case 'jpeg':
			case 'gif':
				return <img src={zn.http.fixURL(value)} />;
			case 'mp4':
			case 'mpg':
			case 'mpeg':
			case 'mov':
			case 'ogg':
			case 'avi':
			case 'aac':
			case 'aiff':
			case 'qt':
			case 'viv':
				return <video width="100%" height="100%" preload="auto" loop="loop" autoplay="autoplay" controls="controls">
				  	<source src={zn.http.fixURL(value)} type="video/ogg" />
				  	<source src={zn.http.fixURL(value)} type="video/mp4" />
					Your browser does not support the video tag.
				</video>;
			default:
				return value.split('/').pop();
		}
	},
	__getFileTypeRender: function (value, type){
		var _file = value.split('/').pop();
		return <div onClick={(event)=>this.__onPreview(value)}  className="office-file">
			<i className={"icon fa fa-"+(type||'file')} />
			<a target="_blank" href={zn.http.fixURL(value)+"?download=true"} onClick={(event)=>event.stopPropagation()} data-tooltip={_file} className="name">{_file.substring(_file.length-8, _file.length)}</a>
		</div>;
	},
	__renderFileByType: function (type, value){
		if(this.props.isImage){
			return <img src={zn.http.fixURL(value)} />;
		}
		switch (type) {
			case 'doc':
			case 'docx':
				return this.__getFileTypeRender(value, 'file');
			case 'xls':
			case 'xlsx':
				return this.__getFileTypeRender(value, 'file');
			case 'ppt':
			case 'pptx':
				return this.__getFileTypeRender(value, 'file');
			case 'pdf':
				return this.__getFileTypeRender(value, 'file');
			case 'bmp':
			case 'jpg':
			case 'png':
			case 'jpeg':
			case 'gif':
				return <img src={zn.http.fixURL(value)} />;
			case 'mp4':
			case 'mpg':
			case 'mpeg':
			case 'mov':
			case 'ogg':
			case 'avi':
			case 'aac':
			case 'aiff':
			case 'qt':
			case 'viv':
				return this.__getFileTypeRender(value, 'video-camera');
			default:
				return value.split('/').pop();
		}
	},
	__onRemove: function (item, index){
		this.state.value = this.state.value.replace(item, '');
		this.forceUpdate();
	},
	__fileRender: function (file, index){
		if(!file){
			return null;
		}
		return <li className="file">
			{this.__renderContent(file)}
		</li>;
	},
	render: function(){
		var _value = this.props.value||[];
		if(zn.is(_value, 'string')){
			_value = _value.split(',');
		}
		return (
			<div className={zn.react.classname("zr-files", this.props.className)} style={this.props.style}>
				<ul className="files">
					{
						_value.map(this.__fileRender)
					}
				</ul>
			</div>
		);
	}
});
