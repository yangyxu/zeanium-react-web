module.exports = zn.arrayValueToObject(['ActivityLayout', 'FixedLayout'], function (value, index) {
    return require('./' + value + '.js');
});