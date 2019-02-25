require('./FormTitle.less');
var React = require('react');
module.exports = React.createClass({
	displayName:'FormTitle',
	getValue: function () {
		return null;
	},
	setValue: function (value) {
		return this;
	},
	render: function(){
		return (
			<div className={zn.react.classname('zr-form-title', this.props.className)} style={this.props.style} >
				<span className="zf-title">{this.props.title}</span>
			</div>
		);
	}
});
