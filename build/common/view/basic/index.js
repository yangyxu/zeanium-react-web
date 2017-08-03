module.exports = zn.arrayValueToObject(['ActivityLayout', 'Alert', 'Animate', 'FixedLayout', 'Button', 'ButtonGroup', 'Toast', 'Card', 'Panel', 'Icon', 'Image', 'Layout', 'LoadingView', 'RTItem', 'RTFlexItem', 'RTList', 'DownPuller', 'Dropdown', 'DropdownList', 'ErrorPage', 'Modal', 'Page', 'Popup', 'Popover', 'ProgressRing', 'Scrollable', 'Slider', 'Search', 'Uploader'], function (value, index) {
    var _value = require('./' + value + '.js');
    if (_value.global) {
        window[value] = _value;
    }
    return _value;
});