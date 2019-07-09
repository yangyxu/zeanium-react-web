"use strict";

require('./Files.less');

var React = require('react');

module.exports = React.createClass({
  displayName: 'Files',
  getInitialState: function getInitialState() {
    return {};
  },
  __onPreview: function __onPreview(item) {
    zn.modal.full(React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    }, this.__renderPreviewFileByType(item.split('.').pop().toLowerCase(), item)));
  },
  __renderContent: function __renderContent(item) {
    var _this = this;

    var _temp = this.props.onFileRender && this.props.onFileRender(item);

    if (_temp) {
      return _temp;
    }

    return React.createElement("div", {
      onClick: function onClick() {
        return _this.__onPreview(item);
      }
    }, this.__renderFileByType(item.split('.').pop().toLowerCase(), item));
  },
  __renderPreviewFileByType: function __renderPreviewFileByType(type, value) {
    if (this.props.isImage) {
      return React.createElement("img", {
        src: zn.http.fixURL(value)
      });
    }

    switch (type) {
      case 'bmp':
      case 'jpg':
      case 'png':
      case 'jpeg':
      case 'gif':
        return React.createElement("img", {
          src: zn.http.fixURL(value)
        });

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
        return React.createElement("video", {
          width: "100%",
          height: "100%",
          preload: "auto",
          loop: "loop",
          autoplay: "autoplay",
          controls: "controls"
        }, React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/ogg"
        }), React.createElement("source", {
          src: zn.http.fixURL(value),
          type: "video/mp4"
        }), "Your browser does not support the video tag.");

      default:
        return value.split('/').pop();
    }
  },
  __getFileTypeRender: function __getFileTypeRender(value, type) {
    var _this2 = this;

    var _file = value.split('/').pop();

    return React.createElement("div", {
      onClick: function onClick(event) {
        return _this2.__onPreview(value);
      },
      className: "office-file"
    }, React.createElement("i", {
      className: "icon fa fa-" + (type || 'file')
    }), React.createElement("a", {
      target: "_blank",
      href: zn.http.fixURL(value) + "?download=true",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      "data-tooltip": _file,
      className: "name"
    }, _file.substring(_file.length - 8, _file.length)));
  },
  __renderFileByType: function __renderFileByType(type, value) {
    if (this.props.isImage) {
      return React.createElement("img", {
        src: zn.http.fixURL(value)
      });
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
        return React.createElement("img", {
          src: zn.http.fixURL(value)
        });

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
  __onRemove: function __onRemove(item, index) {
    this.state.value = this.state.value.replace(item, '');
    this.forceUpdate();
  },
  __fileRender: function __fileRender(file, index) {
    if (!file) {
      return null;
    }

    return React.createElement("li", {
      className: "file"
    }, this.__renderContent(file));
  },
  render: function render() {
    var _value = this.props.value || [];

    if (zn.is(_value, 'string')) {
      _value = _value.split(',');
    }

    return React.createElement("div", {
      className: zn.react.classname("zr-files", this.props.className),
      style: this.props.style
    }, React.createElement("ul", {
      className: "files"
    }, _value.map(this.__fileRender)));
  }
});