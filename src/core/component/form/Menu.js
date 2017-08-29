var React = require('react');
var Dropdown = require('../basic/Dropdown');
var ListView = require('../data/ListView');

module.exports = React.createClass({
	displayName: 'Menu',
	getDefaultProps: function (){
		return {
			eventType: 'click'
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value||'',
			text: this.props.text||''
		}
	},
	getValue: function () {
		return this.state.value;
	},
	setValue: function (value, text) {
		this.setState({
			value: value,
			text: text
		}, function (){
			this.props.onChange && this.props.onChange(value, text, this);
		});
	},
	__textRender: function (){
		return this.state.text||this.props.placeholder;
	},
	__onListItemClick: function (value, rtlistitem, rtlist, item){
		this.setValue(value, item[rtlist.props.textKey]);
		zn.popover.close();
	},
	__popoverRender: function (){
		return <ListView {...this.props} style={this.props.listStyle} className={zn.react.classname("rt-list-view-popover", this.props.listClassName)} emptyView={true} value={this.state.value} onItemClick={this.__onListItemClick} />;
	},
	render: function(){
		return (
			<Dropdown {...this.props} popoverRender={this.__popoverRender} className={zn.react.classname("rt-menu", this.props.className)} >
				<div className="menu-view">
					<span className="text">{this.__textRender()}</span>
					<i className="trigger fa fa-angle-down" />
				</div>
			</Dropdown>
		);
	}
});
