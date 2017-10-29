module.exports = zn.arrayValueToObject(['ListView', 'Pager', 'PagerView', 'PagingList', 'PullRefreshList', 'Steps', 'Tree', 'TreeListView'], function (value, index) {
    return require('./' + value + '.js');
});