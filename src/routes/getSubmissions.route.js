const models = require('../../models');

module.exports = {
  method: 'GET',
  path: '/submission/{formId}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: request => models.submission.getSubmissionsByFormId(request.params.formId),
};
