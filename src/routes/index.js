const ping = require('./ping.route');
const postForm = require('./postForm.route');
const getForms = require('./getForms.route');
const getFormById = require('./getFormById.route');

module.exports = [].concat(
  ping,
  postForm,
  getForms,
  getFormById,
);
