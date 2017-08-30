var React = require('react');

module.exports = React.createClass({
	displayName: 'Page',
	getDefaultProps: function() {
		return {
			icon: 'fa-arrow-left',
			height: 42,
			end: 42,
			flex: false,
			canBack: true,
			loading: false
		};
	},
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
		var _begin = this.props.height;
		if(zn.react.isIOS()){
			_begin += 10;
		}
		return (
			<div className={zn.react.classname('zr-page', this.props.className)} style={this.props.style}>
				<div className="page-header" style={{height: _begin}}>
					<div className="header-left">
						{this.props.canBack && <i className={"back fa " + this.props.icon} onClick={this.__onBack} />}
						<span className="title">{this.props.title}</span>
					</div>
					<div className="header-right">
						<zn.react.ButtonGroup className="zr-flex" items={this.props.toolbarItems} onClick={this.props.onToolbarClick} />
					</div>
				</div>
				<div className="page-body">
				{this.props.loading?<zn.react.DataLoader loader="timer" content="加载中..." />:this.props.children}
				</div>
				{(!this.props.loading && !!this.props.footerView) && <div className="page-footer">{this.props.footerView}</div>}
			</div>
		);
	}
});
