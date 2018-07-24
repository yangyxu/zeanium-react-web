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
    'Radio',
    'RichEditor',
    'RichSelector',
    'Select',
    'ImageUploader',
    'Menu',
    'MultiInput',
    'OrderCode',
    'Form',
    'FormItem',
    'FileUploader',
    'Input',
    'Label',
    'Textarea',
    'ToggleSwitch'
], function (value, index){
    return require('./'+value+'.js');
});
