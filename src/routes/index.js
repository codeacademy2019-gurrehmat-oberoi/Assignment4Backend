const ping = require('./ping.route');
const postForm = require('./postForm.route');
const getForms = require('./getForms.route');

module.exports = [].concat(
  ping,
  postForm,
  getForms,
);
