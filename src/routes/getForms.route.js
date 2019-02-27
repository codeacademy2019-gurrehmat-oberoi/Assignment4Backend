const models = require('../../models');

module.exports = {
  method: 'GET',
  path: '/forms',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: () => models.form.getAllForms(),
};
