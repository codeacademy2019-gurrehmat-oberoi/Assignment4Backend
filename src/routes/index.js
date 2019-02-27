const ping = require('./ping.route');
const postForm = require('./postForm.route');

module.exports = [].concat(
  ping,
  postForm,
);
