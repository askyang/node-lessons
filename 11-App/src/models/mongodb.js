"use strict";

const mongoose = require('mongoose');
const connectionString = require('../../config.js').connectionString;

mongoose.connect(connectionString);

module.exports = mongoose;