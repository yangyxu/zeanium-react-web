var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var AjaxUploader = require('./AjaxUploader');

module.exports = React.createClass({
	displayName: 'exports',

	getDefaultProps: function getDefaultProps() {
		return {
			editable: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: ','
		};
	},
	__onChange: function __onChange(files) {
		var _file = files[0];
		this.props.onChange && this.props.onChange(_file);
	},
	__onComplete: function __onComplete(data, uploader) {
		var _values = (data || []).map(function (file) {
			return file.url;
		});
		this.state.value = this.state.value + _values.join(',') + ',';
		this.forceUpdate();
	},
	getValue: function getValue() {
		return this.state.value;
	},
	setValue: function setValue(value) {
		this.setState({ value: value });
	},
	__onPreview: function __onPreview(item) {
		zn.modal.full(this.__renderPreviewFileByType(item.split('.').pop().toLowerCase(), item));
	},
	__renderContent: function __renderContent(item) {
		var _this = this;

		var _temp = this.props.onFileRender && this.props.onFileRender(item);
		if (_temp) {
			return _temp;
		}

		return React.createElement(
			'a',
			{ onClick: function onClick() {
					return _this.__onPreview(item);
				} },
			this.__renderFileByType(item.split('.').pop().toLowerCase(), item)
		);
	},
	__renderPreviewFileByType: function __renderPreviewFileByType(type, value) {
		if (this.props.isImage) {
			return React.createElement('img', { width: '100%', height: '100%', src: zn.http.fixURL(value) });
		}
		switch (type) {
			case 'jpg':
			case 'png':
			case 'jpeg':
			case 'gif':
				return React.createElement('img', { width: '100%', height: '100%', src: zn.http.fixURL(value) });
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
				return React.createElement(
					'video',
					{ width: '100%', height: '100%', preload: 'auto', loop: 'loop', autoplay: 'autoplay', controls: 'controls' },
					React.createElement('source', { src: zn.http.fixURL(value), type: 'video/ogg' }),
					React.createElement('source', { src: zn.http.fixURL(value), type: 'video/mp4' }),
					'Your browser does not support the video tag.'
				);
			default:
				return value.split('/').pop();
		}
	},
	__renderFileByType: function __renderFileByType(type, value) {
		if (this.props.isImage) {
			return React.createElement('img', { src: zn.http.fixURL(value) });
		}
		switch (type) {
			case 'jpg':
			case 'png':
			case 'jpeg':
			case 'gif':
				return React.createElement('img', { src: zn.http.fixURL(value) });
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
				return React.createElement(
					'video',
					{ width: '96', height: '96' },
					React.createElement('source', { src: zn.http.fixURL(value), type: 'video/ogg' }),
					React.createElement('source', { src: zn.http.fixURL(value), type: 'video/mp4' }),
					'Your browser does not support the video tag.'
				);
			default:
				return value.split('/').pop();
		}
	},
	__onRemove: function __onRemove(item, index) {
		this.state.value = this.state.value.replace(item, '');
		this.forceUpdate();
	},
	render: function render() {
		var _values = this.state.value.split(',');
		var _editable = this.props.editable && !this.props.disabled && !this.props.readonly;
		return React.createElement(
			'div',
			{ className: 'zr-file-uploader' },
			_editable && React.createElement(
				AjaxUploader,
				_extends({}, this.props, {
					onChange: this.__onChange,
					onComplete: this.__onComplete }),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement('i', { className: 'icon fa fa-plus' })
				)
			),
			React.createElement(
				'ul',
				{ className: 'file-list' },
				_values.map(function (item, index) {
					var _this2 = this;

					if (item) {
						return React.createElement(
							'li',
							{ key: index, className: 'file' },
							_editable && React.createElement('i', { className: 'fa fa-remove zr-hover-self-loading', onClick: function onClick() {
									return _this2.__onRemove(item, index);
								} }),
							this.__renderContent(item)
						);
					}
				}.bind(this))
			)
		);
	}
});