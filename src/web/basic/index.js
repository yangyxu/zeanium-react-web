module.exports = zn.arrayValueToObject([
    'URLRouter',
    'XlsxImporter',
], function (value){
    return require('./' + value + '.js');
});
