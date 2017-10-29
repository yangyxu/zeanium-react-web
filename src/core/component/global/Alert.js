var React = require('react');

var Alert = React.createClass({
	displayName:'Alert',
	getDefaultProps: function (){
		return {
			title: '',
			content: null,
			onClick: null,
			buttons: [
				{ text: '确认' }
			]
		};
	},
	__onClick: function (item, index){
		zn.modal.close();
		var _result = this.props.onClick && this.props.onClick(item, index, this);
			_result = item.onClick && item.onClick(item, index, this);
	},
	render: function(){
		return (
			<div className={zn.react.classname('zr-alert', this.props.className)} style={this.props.style} >
				<div className="alert-inner">
					{this.props.title && <div className="alert-title">{this.props.title}</div>}
					{this.props.content && <div className="alert-content" ref="alertContent">{this.props.content}</div>}
				</div>
				<div className="alert-btns">
					{
						this.props.buttons.map(function (item, index){
							return <div key={index} className="alert-btn" onClick={()=>this.__onClick(item, index)}>{item.text}</div>;
						}.bind(this))
					}
				</div>
			</div>
		);
	}
});

zn.alert = function (content, title, callback){
	zn.modal.open(<Alert content={content} title={title} onClick={callback} />, {
		showOverlay: true,
		contentStyles: function (dom, modal){
			return {
				"margin-top": -(dom.offsetHeight/2)+'px'
			};
		}
	});
};

zn.confirm = function (content, title, confirm, cancel, options){
	var _options = zn.extend({ cancel: '取消', confirm: '确定' }, options);
	zn.modal.open(<Alert
			content={content}
			title={title}
			buttons={[
				{ text: _options.cancel, onClick: cancel },
				{ text: _options.confirm, onClick: confirm }
			]} />, {
				showOverlay: true,
				contentStyles: function (dom, modal){
					return {
						"margin-top": -(dom.offsetHeight/2)+'px'
					};
				}
			});
};

zn.prompt = function (title, confirm, cancel){
	var _input = <input className="alert-input" type="text" />;
	zn.modal.open(<Alert
			content={_input}
			title={title}
			buttons={[
				{ text:'取消', onClick: cancel },
				{
					text:'确定',
					onClick: function (item, index, alert){
						confirm && confirm(alert.refs.alertContent.firstChild.value, item, index, alert);
					}
				}
			]} />, {
				showOverlay: true,
				contentStyles: function (dom, modal){
					return {
						"margin-top": -(dom.offsetHeight/2)+'px'
					};
				}
			});
};

var Dialog = React.createClass({
	displayName:'Dialog',
	getDefaultProps: function (){
		return {
			title: '',
			content: null
		};
	},
	render: function(){
		return (
			<div className={zn.react.classname('zr-dialog', this.props.className)} style={this.props.style} >
				<div className="dialog-header">
					{this.props.title && <div className="dialog-title">{this.props.title}</div>}
				</div>
				<div className="dialog-body">
					{this.props.content}
				</div>
			</div>
		);
	}
});

zn.dialog = function (argv){
	return zn.modal.middle(<Dialog {...argv} />);
};

zn.dialog.form = function (argv){
	return zn.dialog({
		title: argv.title || '',
		content: <zn.react.Form {...argv} />
	});
};
