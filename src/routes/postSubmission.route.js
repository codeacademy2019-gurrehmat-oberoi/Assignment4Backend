const models = require('../../models');

module.exports = {
  method: 'POST',
  path: '/submission/{formId}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const { params, payload } = request;
    const result = await models.submission.addSubmissions(params.formId, payload);
    return result;
  },
};
