const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(config.mongoose.uri, config.mongoose.options);

mongoose.set('debug', config.debug);

module.exports = mongoose;
