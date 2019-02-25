require('./RTList.less');
var React = require('react');
var RTItem = require('./RTItem.js');

module.exports = React.createClass({
	displayName: 'RTList',
	propTypes: {
		textKey: React.PropTypes.string,
		valueKey: React.PropTypes.string,
		fireIndex: 0,
	},
	getDefaultProps: function () {
		return {
			active: true,
			textKey: 'text',
			valueKey: 'value'
		};
	},
	getInitialState: function(){
		return {
			loading: false,
			data: []
		}
	},
	componentDidMount: function(){
		if(this.props.data && this.props.data.on){
			var _self = this;
			this.props.data.on('before', function (){
				if(_self.props.showLoading){
					zn.preloader.open({title: '加载中...'});
				}
			}).on('complete', function (){
				if(_self.props.showLoading){
					zn.preloader.close();
				}
			});
		}
		this._dataSource = zn.store.dataSource(this.props.items || this.props.data, {
			autoLoad: this.props.active,
			onExec: function (){
				var _result = this.props.onLoading && this.props.onLoading();
				if(_result !== false && this.isMounted()){
					this.setState({
						loading: true
					});
				}
			}.bind(this),
			onSuccess: function (data){
				this.__onDataLoaded(this.__dataHandler(data));
				this.props.onData && this.props.onData(data);
			}.bind(this)
		});
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.items!==this.props.items && !!this._dataSource){
			this._dataSource.reset(nextProps.items);
		}
		if(nextProps.data!==this.props.data && !!this._dataSource){
			this._dataSource.reset(nextProps.data);
		}
		if(nextProps.active && nextProps.active != this.props.active){
			this.refresh();
		}
	},
	__dataHandler: function (data){
		if(this.props.dataHandler){
			return this.props.dataHandler(data);
		}

		return data.result || data;
	},
	__onDataLoaded: function (data){
		if(!this.isMounted()){
			return false;
		}
		if(data.length==undefined){
			var temp = [];
			for(var key in data){
				temp.push(data[key]);
			}
			data = temp;
		}

		this.state.data = data;
		this.setState({
			data: data,
			loading: false
		}, function (){
			if(this.props.fireIndex != undefined){
				//this.fireClick(this.props.fireIndex);
			}
			this.props.onLoaded && this.props.onLoaded(data, this);
		}.bind(this));
	},
	request: function (data, argv){
		this._dataSource.reset(data, argv);
	},
	filter: function (handler) {
		var _data = [];
		this.state.data.forEach(function (item, index, array) {
			if(handler(item, index, array) !== false){
				_data.push(item);
			}
		});

		this.setState({ data: _data });
	},
	refresh: function (){
		this._dataSource.refresh();
	},
	fireClick: function (index){
		if(!this.state.data.length || index===undefined){
			return;
		}
		this.__onItemClick(this.state.data[index], index);
	},
	__onItemClick: function (item, index){
		item.onClick && item.onClick(item, index);
		this.props.onClick && this.props.onClick(item, index);
	},
	__itemRender: function (item, index){
		var _content = null, _temp = {};
		if(typeof item == 'object'){
			item._index = index;
		}else {
			_temp[this.props.textKey] = _temp[this.props.valueKey] = item;
			this.state.data[index] = item = _temp;
		}

		_temp = this.props.onEachItem && this.props.onEachItem(item, this);
		if(_temp===false){
			return null;
		}

		if(this.props.itemRender){
			_content = this.props.itemRender(item, index, this);
		}

		if(!_content){
			_content = <RTItem {...item}
				onClick={(self, event)=>this.__onItemClick(item, index, self, event)} >
				<span>{this.getItemText(item)}</span>
			</RTItem>;
		}

		return _content;
	},
	getItemText: function (item){
		return item?item[this.props.textKey]:null;
	},
	getItemValue: function (){
		return item?item[this.props.valueKey]:null;
	},
	render: function(){
		if(!this.props.active){
			return null;
		}

		if(this.state.loading && this.props.showLoading){
			return <div style={{ textAlign: 'center' }}><i className="fa fa-spinner zr-self-loading" /></div>;
		}

		if(!this.state.data.length){
			var _view = this.props.emptyView;
			if(!_view){
				_view = <div className='zr-empty-view'>
					<span>暂无数据</span>
				</div>;
			}

			return null;
		}
		return (
			<div {...this.props.attrs} style={this.props.style} className={zn.react.classname('zr-list', this.props.className)}>
				{
					this.state.data && this.state.data.map && this.state.data.map(this.__itemRender)
				}
			</div>
		);
	}
});
