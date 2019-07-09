var React = require('react');
if(!React.createClass){
    React.createClass = require('create-react-class');
}

require('./zn.react.js');
require('./zn.react.Application.js');
require('./style/index.js')
require('./util/index.js');

zn.overwrite(zn.react, require('./component/global/index.js'));
zn.overwrite(zn.react, require('./component/layout/index.js'));
zn.overwrite(zn.react, require('./component/basic/index.js'));
zn.overwrite(zn.react, require('./component/data/index.js'));
zn.overwrite(zn.react, require('./component/form/index.js'));

if(!zn.plugin){
    zn.plugin = {};
}

if(!zn.app){
    zn.app = {};
}

module.exports = zn.react;
