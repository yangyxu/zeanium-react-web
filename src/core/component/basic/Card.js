require('./Card.less');
var React = require('react');

module.exports = React.createClass({
	displayName:'Card',
	__rightRender: function (){
		switch (zn.type(this.props.rightRender)) {
			case 'function':
				return this.props.rightRender();
			case 'object':
				return this.props.rightRender;
		}
	},
	render:function(){
		return (
			<div className={zn.react.classname('zr-card', this.props.className)} style={zn.extend({ width: this.props.width },this.props.style)}>
				<div className="card-header">
					{this.props.icon && <i className={'icon fa ' + this.props.icon} />}
					{this.props.title && <span className="title">{this.props.title}</span>}
					{this.props.rightRender && <div className="right-content">{this.__rightRender()}</div>}
				</div>
				<div className="card-body">
					{this.props.children}
				</div>
			</div>
		);
	}
});
