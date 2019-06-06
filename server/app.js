const express = require('express');

const app = express();
const routes = require('./routes');

app.use('/', routes.route);
app.use('/api', routes.api);

module.exports = app;
