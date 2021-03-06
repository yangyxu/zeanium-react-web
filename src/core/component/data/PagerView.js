require('./PagerView.less');
var React = require('react');
var Pager = require('./Pager');
var ActivityLayout = require('../layout/ActivityLayout');
module.exports = React.createClass({
	displayName:'PagerView',
	getDefaultProps: function (){
		return {
			pageIndex: 1,
			pageSize: 10,
			visiblePage: 3,
			dataFixed: false
		};
	},
	getInitialState: function(){
		return {
			total: 0,
			current: this.props.pageIndex
		}
	},
	componentDidMount:function(){

	},
	__handlePageChanged: function ( newPage ) {
        this.setState({ current : newPage });
		this.props.data.extend({
			pageIndex: newPage
		});
		this.props.data.refresh();
    },
	__dataHandler: function (data){
		if(!data.result){
			return zn.notification.error('空数据'), -1;
		}
		if(data.result[1]){
			var _count = data.result[1][0].count;
			if(this.isMounted()){
				this.setState({
					count: _count,
					total: Math.ceil( _count / this.props.pageSize)
				});
			}
		}

		return data.result[0];
	},
	getValue: function (){
		return this.refs.view.getValue();
	},
	setValue: function (value){
		return this.refs.view.setValue(value), this;
	},
	render: function () {
		var View = this.props.view;
		if(typeof this.props.view == 'string'){
			View = zn.react[this.props.view];
		}

		if(!View||!this.props.data){
			return null;
		}

		this.props.data.extend({
			pageIndex: this.state.current,
			pageSize: this.props.pageSize
		});
		return (
			<div className={zn.react.classname("zr-pager-view", this.props.className)} data-fixed={this.props.dataFixed}>
				<div className="content-view">
					<View showLoading={true} {...this.props} onFilter={()=>this.setState({current: 1})} className={this.props.viewClassName} dataHandler={this.__dataHandler} ref="view" />
				</div>
				<div className="action-view">
					<zn.react.Icons className="ios" items={this.props.toolbarItems} onClick={this.props.onToolbarClick} />
					<Pager total={this.state.total}
						count={this.state.count}
						current={this.state.current}
						visiblePages={this.props.visiblePage}
						onPageChanged={this.__handlePageChanged} />
				</div>
			</div>
		);
	}
});
