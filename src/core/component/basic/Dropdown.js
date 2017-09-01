var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName:'Dropdown',
	getDefaultProps: function (){
		return {
			disabled: false,
			eventType: 'click'
		}
	},
	componentDidMount: function (){
		ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
	},
	__eventHandler: function (event){
		if(this.props.disabled){ return; }
		var _target = this.getParent(event.target);
		if(_target){
			event.stopPropagation();
			zn.popover.render(this.__popoverContentRender(), zn.extend({
				event: event,
				reset: true,
				target: _target
			}, this.props));
		}
	},
	__popoverContentRender: function (){
		var _content = this._children[1];
		if(!_content){
			_content = this.props.popoverRender && this.props.popoverRender();
		}

		return _content;
	},
	getParent: function (target){
		if(target.classList.contains('zr-dropdown')){
			return target;
		}else {
			return this.getParent(target.parentNode);
		}
	},
	render: function(){
		var _children = this.props.children;
		if(_children&&_children.length === undefined){
			_children = [_children];
		}
		if(!_children){
			return null;
		}

		_children = _children.slice(0);
		this._children = _children;

		return (
			<div className={zn.react.classname("zr-dropdown", this.props.className)} style={this.props.style}>
				{_children[0]}
			</div>
		);
	}
});
