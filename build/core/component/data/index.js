module.exports = zn.arrayValueToObject(['ListView', 'Pager', 'PagerView', 'PagingList', 'PullRefreshList', 'Steps', 'TreeListView'], function (value, index) {
    return require('./' + value + '.js');
});