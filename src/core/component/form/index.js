module.exports = zn.arrayValueToObject([
    'AjaxUploader',
    'AutoComplete',
    'Checkbox',
    'CheckboxGroup',
    'DropdownSelector',
    'FileUploader',
    'ImageUploader',
    'Radio',
    'RichEditor',
    'RichSelector',
    'Select',
    'ImageUploader',
    'Menu',
    'OrderCode',
    'Form',
    'FormItem',
    'FileUploader',
    'Input',
    'Label',
    'Textarea',
    'Timer',
    'ToggleSwitch'
], function (value, index){
    return require('./'+value+'.js');
});
