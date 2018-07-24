var React = require('react');

var Page = React.createClass({
	displayName: 'Page',
	__onBack: function (){
		if(typeof this.props.onBack == 'string'){
			return zn.react.session.jump(this.props.onBack), false;
		}
		var _result = this.props.onBack && this.props.onBack();
		if(_result!==false){
			if(zn.react.isMobile()){
				zn.react.router.back();
			}else {
				window.history.back();
			}
		}
	},
	render:function(){
		var __props = this.props;
		var _begin = __props.height;
		if(zn.react.isIOS()){
			//_begin += 10;
		}
		return (
			<div className={zn.react.classname('zr-page', __props.className)} style={__props.style}>
				<div className="page-header" style={{height: _begin}}>
					<div className="header-left">
						{__props.canBack && <i className={"back fa " + __props.icon} onClick={this.__onBack} />}
						<span className="title">{__props.title}</span>
					</div>
					{__props.headerCenter && <div className="header-center">{__props.headerCenter}</div>}
					<div className="header-right">
						{this.props.rightView}
						<zn.react.ButtonGroup className="zr-flex" items={__props.toolbarItems} onClick={__props.onToolbarClick} />
					</div>
				</div>
				<div className="page-body">
					{
						this.props.loading?<zn.react.DataLoader loader="timer" content="加载中..." />:this.props.children
					}
				</div>
				{(!this.props.loading && !!this.props.footerView) && <div className="page-footer">{this.props.footerView}</div>}
			</div>
		);
	}
});

Page.defaultProps = {
	icon: 'fa-angle-left',
	height: 32,
	end: 32,
	flex: false,
	canBack: true,
	loading: false
};

module.exports = Page;
