var React = require('react');
var ReactDOM = require('react-dom');

var Tooltip = React.createClass({
	displayName:'Tooltip',
	getInitialState: function (){
		return {
			arrowClassName: ''
		}
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
			_top = null,
			_className = '';

		if((_target.x + _domWidth) > document.body.scrollWidth){
			_left = _target.width - _domWidth;
		}else {
			_left = _target.x + (_target.width - _domWidth) / 2;
		}

		if((_target.y + _domHeight) > document.body.scrollHeight){
			_top = _target.y - _domHeight - 16;
			_className = 'arrow-bottom';
		} else {
			_top = _target.y + _target.height + 16;
			_className = 'arrow-top';
		}

		if(_left<0){
			_className = 'arrow-left';
			_left = _target.x + _target.width + 16;
		}

		this._dom.style.top = _top + 'px';
		this._dom.style.left = _left + 'px';
		_className && this._dom.classList.add(_className);
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
			<div className={zn.react.classname("rt-tooltip rt-arrow center", this.props.className)} style={this.props.style}>
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
				if(this._tooltip && this._tooltip.props.target === _target){ return false; }
				this.render(_target.getAttribute('data-tooltip'), { target: _target });
			}else {
				this.close();
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