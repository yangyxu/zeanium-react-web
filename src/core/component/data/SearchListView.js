var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('../basic/Search');
var ListView = require('./ListView');

module.exports = React.createClass({
	displayName:'SearchListView',
	getInitialState: function(){
		return {
			filterValue: null
		}
	},
	render: function(){
		return (
			<div className="zr-search-list-view zr-flex-layout">
				<Search onSearch={(value)=>this.setState({ filterValue:value })} realtime={true} className="search layout-header" />
				<ListView filterValue={this.state.filterValue} className="listview layout-header" {...this.props} />
			</div>
		);
	}
});
