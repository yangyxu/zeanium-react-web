['global', 'basic', 'graph', 'table'].forEach(function (path, index){
    path = './' + path + '/index.js';
    zn.overwrite(zn.react, require(path));
});

module.exports = zn.react;
