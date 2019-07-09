require('./RTFlexItem.less');
var React = require('react');
var RTItem = require('./RTItem');

module.exports = React.createClass({
	displayName:'RTFlexItem',
	render: function(){
		return (
			<RTItem {...this.props} className={zn.react.classname('zr-flex-item', this.props.className)} >
				{this.props.children}
			</RTItem>
		);
	}
});
