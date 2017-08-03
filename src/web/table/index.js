module.exports = zn.arrayValueToObject([
    'TableColgroup',
    'TableFilter',
    'TableRow',
    'TableHeader',
    'TableBody',
    'Table',
    'EditableTable'
], function (value){
    return require('./' + value + '.js');
});
