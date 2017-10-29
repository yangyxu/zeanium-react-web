var React = require('react');
var Icon = require('./Icon');

module.exports = React.createClass({
	displayName:'Icons',
	__onClick: function (props, icon, event){
		this.props.onClick && this.props.onClick(props, icon, this, event);
	},
	render:function(){
		var _data = this.props.data || this.props.items||[];
		return (
			<div className={zn.react.classname('zr-icons', this.props.className)}>
				{
					_data.map(function (item, index){
						item.index = index;
						return <Icon key={index} onClick={(icon, event)=>this.__onClick(item, icon, event)} {...item} />;
					}.bind(this))
				}
			</div>
		);
	}
});
