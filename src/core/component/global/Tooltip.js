var React = require('react');
var ReactDOM = require('react-dom');

var Tooltip = React.createClass({
	displayName:'Tooltip',
	getInitialState: function (){

	},
	componentDidMount: function (){
		this._dom = ReactDOM.findDOMNode(this);
		this.fixPosition(this.props.target);
	},
	fixPosition: function (target){
		var _domWidth = this._dom.offsetWidth,
			_domHeight = this._dom.offsetHeight,
			_target = zn.dom.getPosition(target),
			_left = null,
			_top = null;

		if((_target.x + _domWidth) > document.body.scrollWidth){
			_left = _target.width - _domWidth;
		}else {
			_left = _target.x;
		}

		if((_target.y + _domHeight) > document.body.scrollHeight){
			_top = _target.y - _domHeight - 3;
		} else {
			_top = _target.y + _target.height + 3;
		}

		this._dom.style.top = _top + 'px';
		this._dom.style.left = _left + 'px';
	},
	close: function (){
		if(this._dom){
			if(this._dom.parentNode){
				this._dom.parentNode.removeChild(this._dom);
			}
			this._dom = null;
		}
	},
	render: function(){
		//<i className="rt-popup-arrow fa fa-close" />
		return (
			<div className={zn.react.classname("rt-tooltip", this.props.className)} style={this.props.style} onClick={(event)=>event.stopPropagation()}>
				{this.props.content}
			</div>
		);
	}
});


zn.tooltip = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: "rt-tooltip-container" });
			window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
		},
		__onWindowMouseOver: function (event){
			var _target = event.target;
			if(_target && _target.getAttribute('data-tooltip')){
				this.render(_target.getAttribute('data-tooltip'), { target: _target });
			}else {
				//this.close();
			}
		},
		render: function (content, options){
			this._tooltip = ReactDOM.render(<Tooltip {...options} content={content} />, this._dom);
		},
		close: function (){
			if(this._tooltip){
				this._tooltip.close();
				this._tooltip = null;
			}

			return this;
		}
	}
});

module.exports = Tooltip;
