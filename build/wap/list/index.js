module.exports = zn.arrayValueToObject(['List'], function (value) {
    return require('./' + value + '.js');
});