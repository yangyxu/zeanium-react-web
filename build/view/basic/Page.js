var React = require('react');
var FixedLayout = require('./FixedLayout');
var ButtonGroup = require('./ButtonGroup');

module.exports = React.createClass({
	displayName: 'Page',
	getDefaultProps: function getDefaultProps() {
		return {
			className: '',
			height: 42,
			end: 42,
			flex: false,
			canBack: true
		};
	},
	__onBack: function __onBack() {
		var _result = this.props.onBack && this.props.onBack();
		if (_result !== false) {
			window.history.back();
		}
	},
	render: function render() {
		return React.createElement(
			FixedLayout,
			{ className: zn.react.classname('rt-page', this.props.className),
				direction: 'v',
				begin: this.props.height,
				end: this.props.footerView ? this.props.end : 0,
				unit: 'px',
				hStyle: this.props.hStyle,
				bStyle: this.props.bStyle },
			React.createElement(
				'div',
				{ className: 'page-header', style: { lineHeight: this.props.height - 2 + 'px' } },
				this.props.canBack && React.createElement('i', { className: 'back fa fa-arrow-left', onClick: this.__onBack }),
				React.createElement(
					'div',
					{ className: 'title' },
					this.props.title
				),
				React.createElement(
					'div',
					{ className: 'btns' },
					React.createElement(ButtonGroup, { className: 'rt-flex', items: this.props.toolbarItems, onClick: this.props.onToolbarClick })
				)
			),
			React.createElement(
				'div',
				{ className: 'page-body' },
				this.props.children
			),
			this.props.end && this.props.footerView && React.createElement(
				'div',
				{ className: 'page-footer' },
				this.props.footerView
			)
		);
	}
});