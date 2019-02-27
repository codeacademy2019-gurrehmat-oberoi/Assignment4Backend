const ping = require('./ping.route');
const postForm = require('./postForm.route');
const getForms = require('./getForms.route');
const getFormById = require('./getFormById.route');
const postSubmission = require('./postSubmission.route');
const getSubmissions = require('./getSubmissions.route');

module.exports = [].concat(
  ping,
  postForm,
  getForms,
  getFormById,
  postSubmission,
  getSubmissions,
);
