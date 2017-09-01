var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Pager = require('./Pager');
var ActivityLayout = require('../layout/ActivityLayout');
module.exports = React.createClass({
	displayName: 'PagerView',
	getDefaultProps: function getDefaultProps() {
		return {
			pageIndex: 1,
			pageSize: 10,
			visiblePage: 3
		};
	},
	getInitialState: function getInitialState() {
		return {
			total: 0,
			current: this.props.pageIndex
		};
	},
	componentDidMount: function componentDidMount() {},
	__handlePageChanged: function __handlePageChanged(newPage) {
		this.setState({ current: newPage });
		this.props.data.extend({
			pageIndex: newPage
		});
		this.props.data.refresh();
	},
	__dataHandler: function __dataHandler(data) {
		if (data.result[1]) {
			var _count = data.result[1][0].count;
			if (this.isMounted()) {
				this.setState({
					count: _count,
					total: Math.ceil(_count / this.props.pageSize)
				});
			}
		}

		return data.result[0];
	},
	getValue: function getValue() {
		return this.refs.view.getValue();
	},
	setValue: function setValue(value) {
		return this.refs.view.setValue(value), this;
	},
	render: function render() {
		var View = this.props.view;
		if (typeof this.props.view == 'string') {
			View = zn.react[this.props.view];
		}

		if (!View || !this.props.data) {
			return null;
		}

		this.props.data.extend({
			pageIndex: this.state.current,
			pageSize: this.props.pageSize
		});
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-pager-view", "zr-flex-layout column", this.props.className) },
			React.createElement(
				'div',
				{ className: 'layout-body' },
				React.createElement(View, _extends({}, this.props, { onData: this.__onTableData, dataHandler: this.__dataHandler, ref: 'view' }))
			),
			React.createElement(
				'div',
				{ className: 'layout-footer' },
				React.createElement(Pager, { total: this.state.total,
					count: this.state.count,
					current: this.state.current,
					visiblePages: this.props.visiblePage,
					onPageChanged: this.__handlePageChanged })
			)
		);
	}
});