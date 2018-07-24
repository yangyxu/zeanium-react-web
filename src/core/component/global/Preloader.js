var React = require('react');
var Preloader = React.createClass({
	displayName:'Preloader',
	getDefaultProps: function (){
		return {
			title: '正在加载中...'
		}
	},
	render: function(){
		return (
			<div className={zn.react.classname('zr-preloader', this.props.className)} >
				<i className="fa fa-spinner zr-self-loading" />
				<span>{this.props.content||this.props.title}</span>
			</div>
		);
	}
});

module.exports = zn.preloader = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: "zr-preloader-container" });
		},
		open: function (argv, overlay){
			zn.modal.open(<Preloader {...argv} />, { className: overlay?'overlay':'' });
		},
		close: function (){
			zn.modal.close();
		}
	}
});
