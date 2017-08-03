module.exports = zn.arrayValueToObject([
    'ActivityLayout',
    'Alert',
    'Animate',
    'FixedLayout',
    'Button',
    'ButtonGroup',
    'Toast',
    'Card',
    'Panel',
    'Icon',
    'Image',
    'Layout',
    'ListFilter',
    'LoadingView',
    'RTList',
    'DownPuller',
    'Dropdown',
    'DropdownList',
    'ErrorPage',
    'Modal',
    'Page',
    'Popup',
    'Popover',
    'ProgressRing',
    'PullRefresh',
    'Scrollable',
    'Slider',
    'Search',
    'Uploader'
], function (value, index){
    var _value = require('./'+value+'.js');
    if(_value.global){
        window[value] = _value;
    }
    return _value;
});
