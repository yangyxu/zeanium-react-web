var React = require('react');
var ReactDOM = require('react-dom');

var Popover = React.createClass({
	displayName:'Popover',
	getDefaultProps: function (){
		return {
			hiddenHeight: 5,
			closeable: false,
			popoverWidth: null,
			popoverHeight: null
		}
	},
	componentDidMount: function (){
		this._dom = ReactDOM.findDOMNode(this);
		if(this.props.event){
			this._eventType = this.props.event.type;
			window.addEventListener(this._eventType, this.__onWindowClick, false);
			this._dom.addEventListener(this._eventType, function (event){
				//event.stopPropagation();
			}, false);
			setTimeout(function (){
				this.fixPosition(this.props.target);
			}.bind(this), 0);
		}

		this.props.onDidMount && this.props.onDidMount(this);
	},
	__onWindowClick: function (){
		this.close();
	},
	close: function (){
		if(this._dom){
			window.removeEventListener(this._eventType, this.__onWindowClick, false);
			if(this._dom.parentNode){
				this._dom.parentNode.removeChild(this._dom);
			}
			this._dom = null;
			this._eventType = null;
		}
	},
	fixPosition: function (target){
		var _popover = this._dom;
		var _t = zn.dom.getPosition(target),
			_popoverWidth = this.props.popoverWidth || _t.width,
			_popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
			_left = null,
			_top = null;
		if(_popoverHeight < this.props.hiddenHeight){
			this.props.onHidden && this.props.onHidden();
			return;
		}

		if((_t.x + _popoverWidth) > document.body.scrollWidth){
			_left = _t.x + _t.width - _popoverWidth;
		}else {
			_left = _t.x;
		}

		if((_t.y + _popoverHeight) > document.body.scrollHeight){
			_top = _t.y - _popoverHeight - 3;
		} else {
			_top = _t.y + _t.height + 3;
		}

		_popover.style.width = _popoverWidth + 'px';
		if(_popover.offsetHeight != _popoverHeight){
			_popover.style.height = _popoverHeight + 'px';
		}
		_popover.style.top = _top + 'px';
		_popover.style.left = _left + 'px';
		_popover.style.visibility = 'visible';
	},
	render: function(){
		return (
			<div className={zn.react.classname('rt-popover', this.props.className)} style={this.props.style} >
				{this.props.closeable && <i className="popover-close fa fa-close" />}
				{this.props.content}
			</div>
		);
	}
});

module.exports = zn.popover = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: "rt-popover-container" });
		},
		render: function (content, options){
			this._popover = ReactDOM.render(<Popover {...options} content={content} />, this._dom);
		},
		close: function (){
			if(this._popover){
				this._popover.close();
				this._popover = null;
			}

			return this;
		}
	}
});
