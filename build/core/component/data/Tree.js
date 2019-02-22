"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require('react');

var Checkbox = require('../form/Checkbox');

var RTList = require('../basic/RTList');

var TreeColumn = React.createClass({
  displayName: 'TreeColumn',
  getInitialState: function getInitialState() {
    return {
      data: this.initData(),
      active: this.props.parent.props.activeAll,
      selected: this.props.selected || false,
      loading: false,
      hasChildren: false
    };
  },
  initData: function initData() {
    var _data = this.props.item.data || this.props.item.children;

    if (!_data && this.props.parent.props.data && this.props.parent.props.data.clone) {
      _data = this.props.parent.props.data.clone({
        pid: this.props.item.id
      });
    }

    return _data;
  },
  componentDidMount: function componentDidMount() {
    if (this.props.selected) {
      this.props.onClick(this.props.item, this, null);
    }
  },
  __hasChildren: function __hasChildren() {
    if (typeof this.props.item.data == 'array' && !!this.props.item.data.length) {
      return true;
    }

    if (!!this.props.item.zn_tree_son_count) {
      return true;
    }

    if (this.state.hasChildren) {
      return true;
    }

    return false;
  },
  active: function active(_active) {
    this.setState({
      active: _active
    });
  },
  __onIconClick: function __onIconClick(event) {
    if (this.state.loading) {
      return;
    }

    event.stopPropagation();
    this.active(!this.state.active);
  },
  __getIconClassName: function __getIconClassName() {
    if (this.state.loading) {
      return 'fa-spinner zr-self-loading';
    }

    return !!this.state.active ? 'fa-caret-down' : 'fa-caret-right';
  },
  __onCheckboxChange: function __onCheckboxChange(value) {
    this.state.checked = value;
    this.props.onChange && this.props.onChange(value, this.props.item, this);
    this.props.onCheckboxChange && this.props.onCheckboxChange(value, this.props.item, this);
  },
  __renderContent: function __renderContent() {
    var _content = this.props.parent.props.contentRender && this.props.parent.props.contentRender(this.props.item, this);

    if (!_content) {
      _content = this.props.item[this.props.parent.props.textKey];
    }

    return _content;
  },
  __onClick: function __onClick(event) {
    if (this.state.loading) {
      return;
    }

    this.setState({
      selected: true
    });
    this.props.onClick(this.props.item, this, event);
  },
  refresh: function refresh() {
    this.setState({
      hasChildren: true,
      active: true
    });
  },
  render: function render() {
    var _this = this;

    var _hasChildren = this.__hasChildren();

    return React.createElement("div", {
      className: zn.react.classname("zr-tree-column", this.props.className, this.state.selected ? 'column-selected' : '')
    }, React.createElement("div", {
      className: "inner-content",
      onClick: this.__onClick
    }, React.createElement("span", {
      className: "tabs",
      style: {
        width: this.props.depth * 16
      }
    }, !!_hasChildren && React.createElement("i", {
      onClick: this.__onIconClick,
      className: "icon fa " + this.__getIconClassName()
    })), this.props.parent.props.checkboxEnabled && React.createElement(Checkbox, {
      checked: this.props.checked,
      disabled: this.props.parent.props.disabled,
      onChange: function onChange(event, value) {
        return _this.__onCheckboxChange(value);
      }
    }), this.__renderContent()), !!_hasChildren && React.createElement(Tree, _extends({}, this.props.parent.props, this.props, {
      active: this.state.active,
      data: this.state.data
    })));
  }
});
var Tree = React.createClass({
  displayName: 'Tree',
  getDefaultProps: function getDefaultProps() {
    return {
      depth: 0,
      textKey: 'zn_title',
      valueKey: 'id',
      checked: false,
      disabled: false,
      activeAll: false,
      checkboxEnabled: false
    };
  },
  __onItemClick: function __onItemClick(data, item, event) {
    if (this._selectedItem === item) {
      return;
    }

    if (this.props.parent) {
      this.props.parent.__onItemClick(data, item, event);
    } else {
      if (this._selectedItem && this._selectedItem.isMounted()) {
        this._selectedItem.setState({
          selected: false
        });
      }

      this._selectedItem = item;

      if (!this.props.checkboxEnabled) {
        var _value = data[this.props.valueKey],
            _text = data[this.props.textKey];
        this.props.onValueChange && this.props.onValueChange({
          text: _text,
          value: _value,
          data: data,
          treeitem: item,
          tree: this
        });
      }

      this.props.onItemClick && this.props.onItemClick(data, item, this, event);
    }
  },
  __onItemCheckboxChange: function __onItemCheckboxChange(checked, data) {
    if (this.props.parent) {
      this.props.parent.__onItemCheckboxChange(checked, data);
    } else {
      if (!data) {
        return;
      }

      var _value = this.props.value || ',',
          _text = this.props.text || ',',
          _itemValue = data[this.props.valueKey] + ',',
          _itemText = data[this.props.textKey] + ',';

      if (checked) {
        if (_value.indexOf(',' + _itemValue) == -1) {
          _value = _value + _itemValue;
        }

        if (_text.indexOf(',' + _itemText) == -1) {
          _text = _text + _itemText;
        }
      } else {
        _value = _value.replace(new RegExp(',' + _itemValue, 'gi'), ',');
        _text = _text.replace(new RegExp(',' + _itemText, 'gi'), ',');
      }

      var _obj = {
        text: _text,
        value: _value,
        checked: checked,
        data: data
      };
      this.props.onValueChange && this.props.onValueChange(_obj);
      this.props.onItemCheckboxChange && this.props.onItemCheckboxChange(_obj);
    }
  },
  __itemRender: function __itemRender(item, index) {
    var _content = this.props.itemRender && this.props.itemRender(item, index);

    if (!_content && item) {
      var _checked = null,
          _selected = null,
          _value = item[this.props.valueKey];

      if (this.props.checkboxEnabled) {
        _checked = this.props.checked;

        if (!_checked) {
          _checked = (this.props.value || ',').indexOf(',' + _value + ',') != -1;
        }
      } else {
        _selected = this.props.value === _value;
      }

      _content = React.createElement(TreeColumn, {
        parent: this,
        key: index,
        depth: this.props.depth + 1,
        checked: _checked,
        selected: _selected,
        item: item,
        onClick: this.__onItemClick,
        onCheckboxChange: this.__onItemCheckboxChange
      });
    }

    return _content;
  },
  refresh: function refresh() {
    return this.props.data.refresh && this.props.data.refresh(), this;
  },
  render: function render() {
    return React.createElement(RTList, _extends({}, this.props, {
      className: zn.react.classname("zr-tree", this.props.className),
      itemRender: this.__itemRender,
      onLoaded: this.__onLoaded
    }));
  }
});
module.exports = Tree;