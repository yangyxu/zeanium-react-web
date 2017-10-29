var React = require('react');

module.exports = React.createClass({
	displayName:'Search',
	getDefaultProps: function (){
		return {
			value: '',
			realtime: false
		}
	},
	getInitialState: function(){
		return {
			value: this.props.value,
			searching: false
		}
	},
	__onClick: function (rtitem, event){
		this.props.onClick && this.props.onClick(this.props, this, event);
	},
	__onInputFoucs: function (){
		this.setState({
			focus: true
		});
	},
	__onInputBlur: function (){
		this.setState({
			focus: false
		});
	},
	__onInputChange: function (event){
		var _value = event.target.value;
		this.state.value = _value
		this.forceUpdate();
		this.props.onChange && this.props.onChange(_value);
		if(this.props.realtime){
			this.props.onSearch && this.props.onSearch(_value);
		}
		event.stopPropagation();
	},
	__onIconClick: function (event){
		if(!this.props.realtime){
			this.props.onSearch && this.props.onSearch(this.state.value);
		}
		event.stopPropagation();
	},
	searching: function (value){
		this.setState({
			searching: value
		});
	},
	__onClearClick: function (event){
		this.setState({ value: '' });
		event.target.nextSibling.focus();
		event.stopPropagation();
	},
	render: function(){
		return (
			<div className={zn.react.classname("zr-search", this.props.className, this.state.focus?'foucs':'')}>
				<i onClick={this.__onIconClick} className={"search-icon fa " + (this.state.searching?"searching":"fa-search")} />
				{this.state.value && <i className="search-clear fa fa-times-circle" onClick={this.__onClearClick} />}
				<input {...this.props}
					value={this.state.value}
					onFocus={this.__onInputFoucs}
					onBlur={this.__onInputBlur}
					onChange={this.__onInputChange}
					onClick={(event)=>event.stopPropagation()}
					className="search-input"
					type="text"
					name="value" />
			</div>
		);
	}
});
