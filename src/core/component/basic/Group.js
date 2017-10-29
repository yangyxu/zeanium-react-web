var React = require('react');

module.exports = React.createClass({
	displayName: 'Group',
	render: function(){
		return (
			<div className={zn.react.classname("zr-group", this.props.className)}>
				<span className="title">{this.props.title}</span>
				<div className="inner-content">{this.props.children}</div>
			</div>
		);
	}
});
