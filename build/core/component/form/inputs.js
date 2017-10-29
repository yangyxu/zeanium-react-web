module.exports = zn.arrayValueToObject(['AjaxUploader', 'AutoComplete', 'Checkbox', 'CheckboxGroup', 'DropdownSelector', 'FileUploader', 'ImageUploader', 'Input', 'Menu', 'RichEditor', 'RichSelector', 'Radio', 'Select', 'Label', 'Textarea', 'Timer', 'ToggleSwitch'], function (value, index) {
    return require('./' + value + '.js');
});