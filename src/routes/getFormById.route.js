const models = require('../../models');

module.exports = {
  method: 'GET',
  path: '/form/{id}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: request => models.form.getFormById(request.params.id),
};
