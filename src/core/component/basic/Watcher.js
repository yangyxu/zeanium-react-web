var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'Watcher',
	getDefaultProps: function (){
		return {

		};
	},
	render: function(){

		return (
			<div className={zn.react.classname("rt-watcher",this.props.className)}>
				<div className="frame-face"></div>
				<ul>
					{
						(new Array(48)).map(function (){

						})
					}
				</ul>
			</div>
		);
	}
});
