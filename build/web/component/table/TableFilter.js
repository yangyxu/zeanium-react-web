var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

module.exports = React.createClass({
	displayName: 'TableFilter',
	getDefaultProps: function getDefaultProps() {
		return {
			filterData: {},
			onFilterSearch: function onFilterSearch() {}
		};
	},
	getInitialState: function getInitialState() {
		return {};
	},
	componentDidMount: function componentDidMount() {
		this.search(this.props.filterData);
	},
	__onFilter: function __onFilter() {
		this.search(this.props.filterData);
	},
	search: function search(data) {
		data && this.props.onFilterSearch(data, this);
	},
	__onFilterChange: function __onFilterChange(value, item) {
		if (this.props.filterData[item.name]) {
			this.props.filterData[item.name].opt = value.value;
		} else {
			this.props.filterData[item.name] = {
				key: item.name,
				opt: value.value
			};
		}
	},
	__onFilterOptChange: function __onFilterOptChange(opt, name) {
		if (this.props.filterData[name]) {
			this.props.filterData[name].opt = opt;
		} else {
			this.props.filterData[name] = {
				key: name,
				opt: opt
			};
		}

		this.props.onFilter && this.props.onFilter(this.validate());
	},
	__onFilterItemChange: function __onFilterItemChange(value, input) {
		this.props.onFilter && this.props.onFilter(this.validate(), input);
	},
	validate: function validate() {
		var _value = {},
		    _ref = null;
		for (var key in this.refs) {
			_ref = this.refs[key];
			//if(item.state.opt && item.validate()){

			if (_ref.state.opt) {
				_value[key.split('_convert')[0]] = {
					opt: _ref.state.opt,
					value: _ref.validate()
				};
			}
		}

		return _value;
	},
	__onFilterItemCancle: function __onFilterItemCancle() {
		this.props.onFilter && this.props.onFilter(this.validate());
	},
	__itemRender: function __itemRender(item, index) {
		var _this = this;

		var _content = null;
		switch (item.type) {
			case 'checkbox':
				_content = React.createElement(zn.react.Icon, { icon: 'fa-filter' });
				break;
			case 'action':
				item.textAlign = 'center';
				_content = React.createElement(zn.react.Icon, { onClick: this.__onFilter, icon: 'fa-search' });
				break;
			default:
				if (item.filter) {
					var _filter = zn.overwrite(item.filter || {}, { type: 'Input', fullWidth: true });
					var _events = {
						onChange: this.__onFilterItemChange
					};
					if (_filter.type == 'Input') {
						_events = {
							onEnter: this.__onFilterItemChange
						};
					}
					_content = React.createElement(zn.react.FilterItem, _extends({
						popoverWidth: 80,
						opts: ['like', '='],
						name: item.name,
						ref: item.name
					}, _filter, {
						onOptChange: function onOptChange(opt) {
							return _this.__onFilterOptChange(opt, item.name);
						},
						onCancle: this.__onFilterItemCancle
					}, _events));
				} else {
					_content = null;
				}

				break;
		}

		return React.createElement(
			'td',
			{ key: index, className: 'text-align-' + (item.textAlign || 'left'), width: item.width ? item.width : 0 },
			_content
		);
	},
	render: function render() {
		return React.createElement(
			'tr',
			{ className: 'table-row editable filter' },
			(this.props.items || []).map(this.__itemRender)
		);
	}
});