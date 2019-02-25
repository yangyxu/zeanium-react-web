require('./Tooltip.less');
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
			_className = 'zr-arrow-direction-bottom';
		} else {
			_top = _target.y + _target.height + 16;
			_className = 'zr-arrow-direction-top';
		}

		if(_left<0){
			_className = 'zr-arrow-direction-left';
			_left = _target.x + _target.width + 4;
			_top = _target.y + 4;
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
		return (
			<div className={zn.react.classname("zr-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className)} style={this.props.style}>
				{this.props.content}
			</div>
		);
	}
});


zn.tooltip = zn.Class({
	static: true,
	methods: {
		init: function (){
			this._dom = zn.dom.createRootElement("div", { class: "zr-tooltip-container" });
			window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
			window.addEventListener('resize', this.__onWindowResize.bind(this), false);
		},
		__onWindowResize: function (){
			zn.tooltip.close('tooltip:window.resizing');
			zn.popover.close('tooltip:window.resizing');
		},
		__onWindowMouseOver: function (event){
			var _target = event.target;
			if(_target && _target.getAttribute && _target.getAttribute('data-tooltip')){
				if(this._tooltip && this._tooltip.props.target !== _target){
					this.close();
				}
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
