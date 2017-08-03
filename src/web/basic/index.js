module.exports = zn.arrayValueToObject([
    'FilterItem',
    'WebRouter',
    'XlsxImporter',
], function (value){
    return require('./' + value + '.js');
});
