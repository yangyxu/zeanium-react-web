module.exports = zn.arrayValueToObject([
    'AjaxUploader',
    'AutoComplete',
    'Checkbox',
    'CheckboxGroup',
    'DropdownSelector',
    'DateTime',
    'FileUploader',
    'FormTitle',
    'ImageUploader',
    'Input',
    'Menu',
    'MultiInput',
    'RichEditor',
    'RichSelector',
    'Radio',
    'Select',
    'Label',
    'Textarea',
    'ToggleSwitch'
], function (value, index){
    return require('./'+value+'.js');
});
