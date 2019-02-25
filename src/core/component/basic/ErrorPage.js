require('./ErrorPage.less');
var React = require('react');

module.exports = React.createClass({
	displayName:'ErrorPage',
	render: function(){
		return (
			<div className="zr-error-page" >
				<div className="container">
					<h3 className="title">ERROR: 404 Not Found</h3>
					<div className="detail">URI: <a href={'#' + this.props.request.path}>{this.props.request.path}</a></div>
				</div>
			</div>
		);
	}
});
