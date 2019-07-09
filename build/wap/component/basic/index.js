"use strict";

module.exports = zn.arrayValueToObject(['FullPage', 'LineLock', 'ListFilter', 'PullRefresh', 'TabBar', 'TabFilter', 'WapRouter'], function (value) {
  return require('./' + value + '.js');
});