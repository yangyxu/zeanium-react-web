module.exports = zn.arrayValueToObject(['Animate', 'Bubble', 'Button', 'ButtonGroup', 'Card', 'DataLoader', 'DownPuller', 'Dropdown', 'DropdownList', 'ErrorPage', 'FixedPage', 'Group', 'Icon', 'Icons', 'Image', 'LoadingView', 'Page', 'Panel', 'ProgressRing', 'RTFlexItem', 'RTItem', 'RTList', 'Search', 'Slider', 'Uploader', 'Watcher'], function (value, index) {
    return require('./' + value + '.js');
});