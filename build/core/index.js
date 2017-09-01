require('./zn.react.js');
require('./zn.react.Application.js');
require('./util/index.js');
['global', 'layout', 'basic', 'data', 'form'].forEach(function (path, index) {
    path = './component/' + path + '/index.js';
    zn.overwrite(zn.react, require(path));
});
if (!zn.plugin) {
    zn.plugin = {};
}
module.exports = window.UI = zn.react;