var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName: 'RichEditor',
	componentDidMount: function componentDidMount() {
		this._editor = KindEditor.create(ReactDOM.findDOMNode(this), {
			minWidth: 100,
			autoHeightMode: true,
			afterCreate: function afterCreate() {
				this.loadPlugin('autoheight');
			}
		});
		this.setValue(this.props.value);
	},
	getValue: function getValue() {
		return this._editor.html();
	},
	setValue: function setValue(value) {
		if (value !== undefined) {
			return this._editor.html(value);
		}
	},
	render: function render() {
		return React.createElement('textarea', { className: zn.react.classname("zr-rich-editor", this.props.className), style: this.props.style, name: this.props.name });
	}
});