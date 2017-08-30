var React = require('react');

module.exports = React.createClass({
	displayName:'Bubble',
	getInitialState: function(){
		return {
			active: this.props.active || false,
			direction: 'top'
		}
	},

	render: function(){
		return (
			<div className="zr-bubble">

			</div>
		);
	}
});
