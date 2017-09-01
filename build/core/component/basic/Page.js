var React = require('react');

module.exports = React.createClass({
	displayName: 'Page',
	getDefaultProps: function getDefaultProps() {
		return {
			icon: 'fa-arrow-left',
			height: 42,
			end: 42,
			flex: false,
			canBack: true,
			loading: false
		};
	},
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
		var _begin = this.props.height;
		if (zn.react.isIOS()) {
			_begin += 10;
		}
		return React.createElement(
			'div',
			{ className: zn.react.classname('zr-page', this.props.className), style: this.props.style },
			React.createElement(
				'div',
				{ className: 'page-header', style: { height: _begin } },
				React.createElement(
					'div',
					{ className: 'header-left' },
					this.props.canBack && React.createElement('i', { className: "back fa " + this.props.icon, onClick: this.__onBack }),
					React.createElement(
						'span',
						{ className: 'title' },
						this.props.title
					)
				),
				React.createElement(
					'div',
					{ className: 'header-right' },
					React.createElement(zn.react.ButtonGroup, { className: 'zr-flex', items: this.props.toolbarItems, onClick: this.props.onToolbarClick })
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