var React = require('react');

module.exports = React.createClass({
	displayName: 'Group',
	getInitialState: function (){
		return {
			active: true
		}
	},
	render: function(){
		return (
			<div data-active={this.state.active} style={this.props.style} className={zn.react.classname("zr-group", this.props.className)}>
				<div className="g-header" on>
					<span onClick={()=>this.setState({ active: !this.state.active })} className="title">{this.props.title}</span>
				</div>
				<div className="g-inner-content">{this.props.children}</div>
			</div>
		);
	}
});
