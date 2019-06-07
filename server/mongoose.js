const config = require('./config');
const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoose.uri, config.mongoose.options);

mongoose.set('debug', config.mongoose.debug);

exports = mongoose;
