'use strict';

var _kv = zn.arrayValueToObject(['AutoComplete', 'Input', 'Checkbox', 'CheckboxGroup', 'RichEditor', 'Radio', 'Select', 'FileUploader', 'ImageUploader', 'Menu', 'TreeMenu', 'SearchMenu', 'Textarea', 'Timer', 'ToggleSwitch'], function (value, index) {
    return require('./' + value + '.js');
});
//_kv.EditableTable = require('../data/EditableTable.js');
_kv.TreeListView = require('../data/TreeListView.js');
module.exports = _kv;