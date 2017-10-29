var React = require('react');

module.exports = React.createClass({
	displayName:'Title',
	render: function(){
		return (
			<div className={zn.react.classname("zr-title", this.props.className, this.props.type)} {...this.props.attrs}>
				{this.props.value}
			</div>
		);
	}
});
