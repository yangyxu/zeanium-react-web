var React = require('react');
var FixedLayout = require('./FixedLayout');
var ButtonGroup = require('./ButtonGroup');

module.exports = React.createClass({
	displayName: 'Page',
	getDefaultProps: function() {
		return {
			className: '',
			icon: 'fa-arrow-left',
			height: 42,
			end: 42,
			flex: false,
			canBack: true
		};
	},
	__onBack: function (){
		if(typeof this.props.onBack == 'string'){
			return Session.jump(this.props.onBack), false;
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
			<FixedLayout className={zn.react.classname('rt-page', zn.react.isMobile()?'page-mobile':'page-pc', this.props.className)}
				direction="v"
				begin={_begin}
				end={(this.props.footerView?this.props.end:0)}
				unit="px"
				hStyle={this.props.hStyle}
				bStyle={this.props.bStyle} >
				<div className="page-header" style={{ lineHeight: '30px' }}>
					{this.props.canBack && <i className={"back fa " + this.props.icon} onClick={this.__onBack} />}
					<div className="title">{this.props.title}</div>
					<div className="btns">
						<ButtonGroup className="rt-flex" items={this.props.toolbarItems} onClick={this.props.onToolbarClick} />
					</div>
				</div>
				<div className="page-body">{this.props.children}</div>
				{(this.props.end&&this.props.footerView)&&<div className="page-footer">{this.props.footerView}</div>}
			</FixedLayout>
		);
	}
});
