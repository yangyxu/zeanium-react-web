var React = require('react');
module.exports = React.createClass({
	displayName:'LoadingView',
	getDefaultProps: function (){
		return {
			data: null,
			loader: 'timer',
			content: '加载中...'
		};
	},
	render: function(){
		if(this.props.data){
			return this.props.children;
		}else {
			return <zn.react.DataLoader {...this.props} />;
		}
	}
});
