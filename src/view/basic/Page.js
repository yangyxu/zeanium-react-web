var React = require('react');
var FixedLayout = require('./FixedLayout');
var ButtonGroup = require('./ButtonGroup');

module.exports = React.createClass({
	displayName: 'Page',
	getDefaultProps: function() {
		return {
			className: '',
			height: 42,
			end: 42,
			flex: false,
			canBack: true
		};
	},
	__onBack: function (){
		var _result = this.props.onBack && this.props.onBack();
		if(_result!==false){
			window.history.back();
		}
	},
	render:function(){
		return (
			<FixedLayout className={zn.react.classname('rt-page', this.props.className)}
				direction="v"
				begin={this.props.height}
				end={(this.props.footerView?this.props.end:0)}
				unit="px"
				hStyle={this.props.hStyle}
				bStyle={this.props.bStyle} >
				<div className="page-header" style={{ lineHeight: ((this.props.height-2) + 'px') }}>
					{this.props.canBack && <i className="back fa fa-arrow-left" onClick={this.__onBack} />}
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
