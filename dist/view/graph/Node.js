'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('./Link');
var Draggable = window.Draggable;
var DOMUtil = window.DOMUtil;

var Node = React.createClass({
	displayName: 'Node',
	getDefaultProps: function getDefaultProps() {
		return {
			draggable: true,
			editable: true
		};
	},
	getInitialState: function getInitialState() {
		this._links = {};
		this._nodes = {};
		return {
			highLight: false
		};
	},
	getCenterXY: function getCenterXY() {
		var _position = DOMUtil.getPosition(this._dom);
		var _halfWidth = _position.width / 2.0,
		    _halfHeight = _position.height / 2.0,
		    _x = 0,
		    _y = 0;

		if (!this.props.draggable) {
			_x = _position.x - this._parentPosition.x + _halfWidth;
			_y = _position.y - this._parentPosition.y + _halfHeight;
		} else {
			_x = this._x + _halfWidth;
			_y = this._y + _halfHeight;
			if (this.props.parent) {
				_x = _x + this.props.parent._x;
				_y = _y + this.props.parent._y;
			}
		}

		return {
			x: _x,
			y: _y
		};
	},
	setLink: function setLink(id, link) {
		this._links[id] = link;
	},
	getLink: function getLink(id) {
		return this._links[id];
	},
	deleteLink: function deleteLink(id) {
		this._links[id] = null;
		delete this._links[id];
	},
	setNode: function setNode(key, node) {
		this._nodes[key] = node;
	},
	addNode: function addNode(node) {
		var _node = null,
		    _key;

		if (node) {
			_node = React.createElement(Node, node);
			this._nodes[_node._id] = _node;
			React.render(_node, this._dom);
		}
	},
	componentDidMount: function componentDidMount() {
		var _source = this._dom,
		    _self = this;

		this._id = this.props.id;
		this._x = this.props.x || 0;
		this._y = this.props.y || 0;
		this._parentPosition = DOMUtil.getPosition(this._dom.parentNode);
		if (this.props.draggable) {
			Draggable.init(_source, {
				start: [this.props.x, this.props.y],
				onDragStart: this.__onNodeDragStart,
				onDrag: this.__onNodeDrag,
				onDragEnd: this.__onNodeDragEnd
			});
		}

		DOMUtil.on(_source, 'mouseover', this.__onMouseOver);
		DOMUtil.on(_source, 'mouseout', this.__onMouseOut);

		this.props.onDidMount && this.props.onDidMount(this, this.props);
	},
	__onNodeDragStart: function __onNodeDragStart(event, data) {
		var _dom = this._dom;
		this._oldZIndex = _dom.style.zIndex;
		_dom.style.zIndex = 10;
		this._startVector = {
			x: data.mouseX,
			y: data.mouseY
		};
		if (event.target.className.indexOf('manual-connect') != -1) {
			return this.__createLine(event, data), false;
		}
	},
	__createLine: function __createLine(event, data) {
		if (!this._dragTemp) {
			var _self = this;
			var _dragTemp = this._dragTemp = document.createElement('div');
			DOMUtil.setStyles(this._dragTemp, {
				width: 8,
				height: 8,
				backgroundColor: 'red'
			});

			var _start = this.getCenterXY(),
			    _startMouse = DOMUtil.getPosition(event.target),
			    _basePosition = this._parentPosition;
			var _temp = this.props.canvas.refs.temp;
			Draggable.init(this._dragTemp, {
				event: event,
				start: [_startMouse.x, _startMouse.y],
				onDragStart: function onDragStart(event, data) {},
				onDrag: function onDrag(event, data) {
					var _mouse = DOMUtil.getPosition(_dragTemp);
					_temp.reset(_start, {
						x: _mouse.x - _basePosition.x,
						y: _mouse.y - _basePosition.y
					});
				},
				onDragEnd: function onDragEnd(event, data) {
					_self.clearTempLink();
					var _uuid = _self.findNode.call(_self, document.elementFromPoint(data.mouseX, data.mouseY));
					if (_uuid) {
						_self.props.canvas.addLink(_self._id, _uuid);
					}
				}
			});
			document.body.appendChild(this._dragTemp);
		}
	},
	findNode: function findNode(dom) {
		if (!dom || dom === document.body) {
			return;
		}
		var _className = dom.className;
		if (!_className) {
			return this.findNode(dom.parentNode);
		}
		if (_className == 'c-flow-canvas') {
			return;
		}
		if (!_className.indexOf) {
			return;
		}
		if (_className.indexOf('graph-node') !== -1) {
			return dom.getAttribute('data-id');
		} else {
			return this.findNode(dom.parentNode);
		}
	},
	clearTempLink: function clearTempLink() {
		if (this._dragTemp) {
			document.body.removeChild(this._dragTemp);
			this._dragTemp = null;
		}
		this.props.canvas.refs.temp.reset({ x: 0, y: 0 }, { x: 0, y: 0 });
	},
	__onConnectMouseUp: function __onConnectMouseUp() {
		this.clearTempLink();
	},
	__onNodeDragEnd: function __onNodeDragEnd(event, data) {
		var _dx = Math.abs(this._startVector.x - data.mouseX),
		    _dy = Math.abs(this._startVector.y - data.mouseY);
		//event.stopPropagation();
		//event.preventDefault();
		if (this._dom) {
			this._dom.style.zIndex = this._oldZIndex;
		}
		if (_dx < 5 && _dy < 5) {
			this.props.onClick && this.props.onClick(event, this);
		}
		this.props.onNodeDragEnd && this.props.onNodeDragEnd(event, data, this);
	},
	__onNodeDrag: function __onNodeDrag(event, data) {
		this._x = data.currX;
		this._y = data.currY;
		this.__onLinkReset();
		this.__scanChild();
		!!this.onNodeDrag && this.onNodeDrag(event, data);
	},
	__onLinkReset: function __onLinkReset() {
		var _links = this._links;
		for (var key in _links) {
			_links[key].reset();
		}
	},
	__scanChild: function __scanChild() {
		var _nodes = this._nodes;
		for (var key in _nodes) {
			_nodes[key].__onLinkReset();
		}
	},
	highLight: function highLight(_highLight) {
		this.setState({
			highLight: _highLight !== undefined ? _highLight : true
		});
	},
	__onMouseOver: function __onMouseOver(event) {
		event.stopPropagation();
		event.preventDefault();
		for (var key in this._links) {
			this._links[key].highLight(true);
		}
	},
	__onMouseOut: function __onMouseOut(event) {
		for (var key in this._links) {
			this._links[key].highLight(false);
		}
		this.setState({
			highLight: false
		});
	},
	__editableRender: function __editableRender() {
		if (this.props.editable) {
			return React.createElement('i', { className: 'manual-connect', onMouseUp: this.__onConnectMouseUp });
		}
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			'div',
			{ ref: function ref(_ref) {
					return _this._dom = _ref;
				}, className: "graph-node " + (this.props.type || 'type-node'), 'data-id': this.props.id, 'data-highlight': this.state.highLight, 'data-selected': this.props.selected, style: this.props.style },
			this.props.render && this.props.render(this, this.props),
			this.__editableRender()
		);
	}
});

module.exports = Node;