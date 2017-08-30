var React = require('react');
var ButtonGroup = require('./ButtonGroup');
var FixedLayout = require('../layout/FixedLayout');

module.exports = React.createClass({
	displayName: 'FixedPage',
	getDefaultProps: function() {
		return {
			icon: 'fa-arrow-left',
			height: 42,
			end: 42,
			flex: false,
			canBack: true
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
			<FixedLayout className={zn.react.classname('zr-fixed-page', zn.react.isMobile()?'page-mobile':'page-pc', this.props.className)}
				direction="top-bottom"
				begin={_begin}
				end={(this.props.footerView?this.props.end:0)}
				hStyle={this.props.hStyle}
				bStyle={this.props.bStyle} >
				<div className="page-header" style={{ lineHeight: '30px' }}>
					{this.props.canBack && <i className={"back fa " + this.props.icon} onClick={this.__onBack} />}
					<div className="title">{this.props.title}</div>
					<div className="btns">
						<ButtonGroup className="zr-flex" items={this.props.toolbarItems} onClick={this.props.onToolbarClick} />
					</div>
				</div>
				<div className="page-body">{this.props.children}</div>
				{(this.props.end&&this.props.footerView)&&<div className="page-footer">{this.props.footerView}</div>}
			</FixedLayout>
		);
	}
});
