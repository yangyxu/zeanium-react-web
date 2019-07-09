require('./Image.less');
var React = require('react');

var LOADING = "";

module.exports = React.createClass({
	displayName:'Image',
	getInitialState: function (){
		return {
			src: LOADING
		}
	},
	getImageData: function (url, callback){
		var xhr = new XMLHttpRequest();
	  	xhr.onload = function() {
		    var reader = new FileReader();
		    reader.onloadend = function() {
		      callback(reader.result);
		    }
		    reader.readAsDataURL(xhr.response);
	  	};
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.send();
	},
	componentDidMount: function (){
		/*
		var _image = new Image(),
			_src = this.props.src;
		if(_src.charAt(0) == '/'){
			_src = zn.http.fixURL(_src);
		}
		this.getImageData(_src, function (data){
			this.setState({
				src: data
			});
		}.bind(this));*/
	},
	render:function(){
		return (
			<img className={zn.react.classname("zr-image", this.props.className)} style={this.props.style} src={this.props.src} />
		);
	}
});
