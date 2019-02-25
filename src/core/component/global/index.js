module.exports = zn.arrayValueToObject([
    'Ripple',
    'Alert',
    'Modal',
    'Modals',
    'Notify',
    'Notification',
    'Popover',
    'Popup',
    'Preloader',
    'Toast',
    'Tooltip'
], function (value, index){
    return require('./'+value+'.js');
});
