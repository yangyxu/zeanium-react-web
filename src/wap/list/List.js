var React = require('react');

module.exports = React.createClass({
	displayName:'List',
	getDefaultProps: function (){
		return {

		};
	},
	render: function(){s
		return (
			<zn.react.RTList {...this.props.data} />
		);
	}
});
