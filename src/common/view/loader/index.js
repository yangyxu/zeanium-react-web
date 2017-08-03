module.exports = zn.arrayValueToObject([
    'DataLoader'
], function (value){
    return require('./' + value + '.js');
});
