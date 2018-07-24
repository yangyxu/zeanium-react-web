var React = require('react');
var RTItem = require('./RTItem');

module.exports = React.createClass({
	displayName: 'Button',
	getDefaultProps: function (){
		return {
			className: '',
			float: 'none',
			type: 'primary'
		}
	},
	getInitialState: function() {
		return {
			loading: false
		}
	},
	loading: function (value) {
		if(this.isMounted()){
			this.setState({ loading: value });
		}
	},
	__renderChildren: function (){
		if(!this.props.children){
			return <div className="btn">
				{!!this.props.icon && <i className={'btn-icon fa ' + this.props.icon} />}
				{this.props.text}
			</div>;
		}else {
			return this.props.children;
		}
	},
	__onClick: function (rtitem, event){
		if(!this.state.loading){
			this.props.onClick && this.props.onClick(this.props, this, event);
		}
	},
	render: function(){
		return (
			<RTItem {...this.props}
				attrs={zn.extend({
					"data-loading": this.state.loading,
					"data-tooltip": this.props.tooltip
				}, this.props.attrs)}
				className={zn.react.classname("zr-button zr-action-ripple zr-base-transition", this.props.className, (this.props.status||this.props.type))}
				onClick={this.__onClick} >
				{this.__renderChildren()}
			</RTItem>
		);
	}
});
