"use strict";

zn.overwrite(zn.react, require('./component/basic/index.js'));
zn.overwrite(zn.react, require('./component/list/index.js'));
module.exports = zn.react;