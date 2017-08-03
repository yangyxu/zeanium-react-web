module.exports = zn.arrayValueToObject([
    'FullPage',
    'LineLock',
    'Router',
    'TabBar',
    'TabFilter',
], function (value){
    return require('./' + value + '.js');
});
