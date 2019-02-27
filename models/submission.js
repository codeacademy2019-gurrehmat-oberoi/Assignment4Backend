

module.exports = (sequelize, DataTypes) => {
  const submission = sequelize.define('submission', {
    formId: DataTypes.INTEGER,
    field: DataTypes.STRING,
    response: DataTypes.STRING,
  }, {});
  // submission.associate = function (models) {
  //   // associations can be defined here
  // };

  submission.getSubmissionsByFormId = (formId) => {
    const returnedPromise = submission.findAll({ where: { formId } });
    const filteredSubmissions = returnedPromise.then().map(row => row.dataValues);
    return filteredSubmissions;
  };

  submission.addSubmissions = (formId, submissions) => {
    const fields = Object.keys(submissions);
    return Promise.all(fields.map(field => submission.create({
      formId,
      field,
      response: submissions[field],
    })));
  };
  return submission;
};
