var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var Node = require('./Node');
var Link = require('./Link');

module.exports = React.createClass({
	displayName: 'FlowCanvas',
	getInitialState: function getInitialState() {
		return {
			nodes: [],
			links: []
		};
	},
	componentDidMount: function componentDidMount() {
		this._dom = ReactDOM.findDOMNode(this);
		this.setData(this.props.data);
		this.__initDragDrop(this._dom);
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		if (prevProps.data != this.props.data) {
			this.setData(this.props.data);
		}
	},
	__initDragDrop: function __initDragDrop(target) {
		target.ondragover = function (event) {
			event.preventDefault();
			//console.log('drag-over');
			this.props.onDragOver && this.props.onDragOver(event);
			return true;
		}.bind(this);

		target.ondragenter = function (event) {
			//console.log('drag-enter');
			this.props.onDragEnter && this.props.onDragEnter(event);
			return true;
		}.bind(this);

		target.ondrop = function (event) {
			this.props.onDrop && this.props.onDrop(event, JSON.parse(event.dataTransfer.getData("data") || '{}'));
			return false;
		}.bind(this);
	},
	__onNodeDidMount: function __onNodeDidMount(node, nodeProps, nodeState) {
		this._nodes[node.getId()] = node;
	},
	__onNodeDrag: function __onNodeDrag() {},
	__onNodeDragEnd: function __onNodeDragEnd(event, data, node) {
		var _data = this.state.nodes[node.props.index];
		_data.x = data.currX;
		_data.y = data.currY;
		this.props.onNodeDragEnd && this.props.onNodeDragEnd(event, data, node);
	},
	__onLinkDidMount: function __onLinkDidMount(link, linkProps) {
		var _target = this._nodes[linkProps.target],
		    _source = this._nodes[linkProps.source];
		this._links[link.getId()] = link;
		link.setTarget(_target);
		link.setSource(_source);
		link.reset();
	},
	getData: function getData() {
		return this.state;
	},
	setData: function setData(data) {
		if (data) {
			var _obj = {};
			if (data.nodes) {
				_obj.nodes = data.nodes;
			}
			if (data.links) {
				_obj.links = data.links;
			}
			if (Object.keys(_obj).length) {
				this.setState(_obj);
			}
		}

		return this;
	},
	addLink: function addLink(target, source) {
		this.state.links.push({ target: target, source: source });
		this.forceUpdate();
	},
	deleteLink: function deleteLink(link) {
		this.state.links.splice(this.state.links.indexOf(link), 1);
		this.forceUpdate();
	},
	updateNode: function updateNode(node) {
		this.state.nodes.map(function (item, index) {
			if (node === item) {
				return node;
			}
			return item;
		});
		this.forceUpdate();
	},
	addNode: function addNode(node, from) {
		node.id = zn.uuid();
		this.state.nodes.push(node);
		if (from) {
			this.state.links.push({ target: node.id, source: from.getId() });
		}
		this.forceUpdate();
	},
	deleteNodeById: function deleteNodeById(id) {
		var _nodeId = null;
		this.state.nodes = this.state.nodes.filter(function (node, index) {
			if (node.id !== id) {
				return true;
			} else {
				_nodeId = node.id;
				return false;
			}
		});

		if (_nodeId) {
			this.state.links = this.state.links.filter(function (link, index) {
				if (link.source == _nodeId || link.target == _nodeId) {
					return false;
				} else {
					return true;
				}
			});
		}

		this.forceUpdate();
	},
	updateNodeById: function updateNodeById(id, info) {
		this.state.nodes.forEach(function (node, index) {
			if (node.id === id) {
				zn.extend(node, info);
			}
		});

		this.forceUpdate();
	},
	deleteNode: function deleteNode(node) {
		this.state.nodes.splice(this.state.nodes.indexOf(node), 1);
		this.forceUpdate();
	},
	filterNode: function filterNode(filter) {
		this.setState({
			nodes: this.state.nodes.filter(filter || function () {})
		});
	},
	searchNode: function searchNode(handler) {
		if (!this.__nodes) {
			this.__nodes = this.state.nodes.slice(0);
		}
		this.setState({ nodes: this.__nodes.filter(handler) });
	},
	__onNodeClick: function __onNodeClick(event, node, data) {
		this.setState({ selectNode: data });
		this.props.onNodeClick && this.props.onNodeClick(event, node, data, this);
	},
	render: function render() {
		this._nodes = {};
		this._links = {};
		zn.debug('FlowCanvas data: ', this.state.nodes, this.state.links);
		return React.createElement(
			'div',
			{ className: 'zr-graph-flow-canvas' },
			(this.state.nodes || []).map(function (node, index) {
				var _this = this;

				node.id = node.id || zn.uuid();
				return React.createElement(Node, _extends({ key: zn.uuid(),
					index: index,
					selected: this.state.selectNode === node ? true : false,
					data: node,
					canvas: this,
					onContextMenu: this.props.onNodeContextMenu,
					className: this.props.nodeClassName,
					editable: this.props.editable || node.editable,
					draggable: this.props.draggable || node.draggable,
					render: this.props.nodeRender,
					onNodeEditDragEnd: this.props.onNodeEditDragEnd,
					onDidMount: this.__onNodeDidMount,
					onNodeDrag: this.__onNodeDrag,
					onNodeDragEnd: this.__onNodeDragEnd,
					onClick: function onClick(event, instance) {
						return _this.__onNodeClick(event, instance, node);
					}
				}, node));
			}.bind(this)),
			this.state.links.map(function (link, index) {
				return React.createElement(Link, _extends({ key: zn.uuid(), data: link, render: this.props.linkRender }, link, { onDidMount: this.__onLinkDidMount }));
			}.bind(this)),
			React.createElement(Link, { ref: 'temp' })
		);
	}
});