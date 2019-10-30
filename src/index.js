var deocoinjs = require('bitcoinjs-lib');

Object.assign(deocoinjs.networks, require('./networks'));

deocoinjs.utils = require('./utils');

module.exports = deocoinjs;