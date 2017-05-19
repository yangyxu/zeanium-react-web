var React = require('react');
var ReactDOM = require('react-dom');

var Popover = React.createClass({
	displayName:'Popover',
	getDefaultProps: function (){
		return {
			triggerEvent: 'click',
			active: false,
			hiddenHeight: 5,
			closeable: false
		}
	},
	getInitialState: function(){
		return {
			className: '',
			style: {},
			closeable: this.props.closeable,
			active: this.props.active,
			content: this.props.content,
			popoverWidth: null,
			popoverHeight: null
		}
	},
	close: function (){
		this.setState({
			className: '',
			style: {},
			active: false,
			content: null,
			popoverWidth: null,
			popoverHeight: null
		});
	},
	componentDidMount: function (){
		window.addEventListener(this.props.triggerEvent, ()=>this.setState({ active: false }), false);
		ReactDOM.findDOMNode(this).addEventListener(this.props.triggerEvent, (event)=>event.preventDefault(), false);
		this.props.onDidMount && this.props.onDidMount(this);
	},
	fixPosition: function (target){
		var _popover = ReactDOM.findDOMNode(this);
		var _t = zn.dom.getPosition(target),
			_popoverWidth = this.state.popoverWidth || _t.width,
			_popoverHeight = this.state.popoverHeight || _popover.offsetHeight,
			_left = null,
			_top = null;
		if(_popoverHeight < this.props.hiddenHeight){
			this.props.onHidden && this.props.onHidden();
			return;
		}

		if((_t.x + _popoverWidth) > document.body.scrollWidth){
			_left = _t.width - _popoverWidth;
		}else {
			_left = _t.x;
		}

		if((_t.y + _popoverHeight) > document.body.scrollHeight){
			_top = _t.y - _popoverHeight - 3;
		} else {
			_top = _t.y + _t.height + 3;
		}

		_popover.style.top = _top + 'px';
		_popover.style.left = _left + 'px';
		_popover.style.width = _popoverWidth + 'px';
		if(_popover.offsetHeight != _popoverHeight){
			_popover.style.height = _popoverHeight + 'px';
		}
	},
	render: function(){
		return (
			<div className={'rt-popover ' + this.state.className} style={zn.extend(this.props.style, this.state.style)}
				data-active={this.state.active}>
				{this.state.closeable && <i className="rt-popup-close fa fa-close" />}
				{this.state.content}
			</div>
		);
	}
});

Popover._items = {};
Popover.getItem = function (name){
	return Popover._items[name];
}

Popover.create = function (name, argv){
	var _dom = document.createElement("div");
	document.body.appendChild(_dom);
	return Popover._items[name] = ReactDOM.render(<Popover {...argv} />, _dom), Popover._items[name];
}

Popover.render = function (args, callback) {
	var _item = Popover.getItem(args.name||'_click');
	if(_item){
		_item.setState(zn.extend({ active: true, content: null }, args), function (){
			callback && callback(_item, args);
		});
	}

	return this;
}

Popover.close = function (name){
	var _item = Popover.getItem(name);
	if(_item){
		_item.close();
	}

	return this;
}

Popover.closeAll = function (){
	return zn.each(Popover._items, function (item){
		item.close();
	}), this;
}

Popover.global = true;
window.Popover = Popover;

['click', 'mouseover'].forEach(function (event){
	Popover.create('_' + event, { triggerEvent: event });
});

module.exports = Popover;
