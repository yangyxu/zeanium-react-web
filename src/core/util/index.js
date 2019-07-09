module.exports = zn.arrayValueToObject([
    'Session',
    'Draggable',
    'Router',
    'RestfulHandler'
], function (value){
    zn.react[value] = require('./' + value + '.js');
});
