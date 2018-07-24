var React = require('react');

var Page = React.createClass({
	displayName: 'Page',
	__onBack: function __onBack() {
		if (typeof this.props.onBack == 'string') {
			return zn.react.session.jump(this.props.onBack), false;
		}
		var _result = this.props.onBack && this.props.onBack();
		if (_result !== false) {
			if (zn.react.isMobile()) {
				zn.react.router.back();
			} else {
				window.history.back();
			}
		}
	},
	render: function render() {
		var __props = this.props;
		var _begin = __props.height;
		if (zn.react.isIOS()) {
			//_begin += 10;
		}
		return React.createElement(
			'div',
			{ className: zn.react.classname('zr-page', __props.className), style: __props.style },
			React.createElement(
				'div',
				{ className: 'page-header', style: { height: _begin } },
				React.createElement(
					'div',
					{ className: 'header-left' },
					__props.canBack && React.createElement('i', { className: "back fa " + __props.icon, onClick: this.__onBack }),
					React.createElement(
						'span',
						{ className: 'title' },
						__props.title
					)
				),
				__props.headerCenter && React.createElement(
					'div',
					{ className: 'header-center' },
					__props.headerCenter
				),
				React.createElement(
					'div',
					{ className: 'header-right' },
					this.props.rightView,
					React.createElement(zn.react.ButtonGroup, { className: 'zr-flex', items: __props.toolbarItems, onClick: __props.onToolbarClick })
				)
			),
			React.createElement(
				'div',
				{ className: 'page-body' },
				this.props.loading ? React.createElement(zn.react.DataLoader, { loader: 'timer', content: '\u52A0\u8F7D\u4E2D...' }) : this.props.children
			),
			!this.props.loading && !!this.props.footerView && React.createElement(
				'div',
				{ className: 'page-footer' },
				this.props.footerView
			)
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