const express = require('express');
const app = express.Router();

require('./endpoints/post')(app);
require('./endpoints/post')(app);
// require('./endpoints/user')(app);

module.exports = app;