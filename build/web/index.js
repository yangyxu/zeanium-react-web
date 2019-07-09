"use strict";

zn.overwrite(zn.react, require('./component/global/index.js'));
zn.overwrite(zn.react, require('./component/basic/index.js'));
zn.overwrite(zn.react, require('./component/graph/index.js'));
zn.overwrite(zn.react, require('./component/table/index.js'));
module.exports = zn.react;