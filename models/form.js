

module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('form', {
    title: DataTypes.STRING,
    fields: DataTypes.ARRAY(DataTypes.STRING),
  }, {});
  // form.associate = function (models) {
  //   // associations can be defined here
  // };

  form.addForm = ({ title, fields }) => form.findOrCreate({
    where: {
      title,
      fields,
    },
  });
  form.getAllForms = () => {
    const returnedPromise = form.findAll();
    const allForms = returnedPromise.then().map(row => row.dataValues);
    return allForms;
  };
  form.getFormById = id => form.findOne({ where: { id } }).then(row => row.dataValues);
  // const returnedPromise = form.findOne({ where: { id } });
  // const foundForm = returnedPromise.then().dataValues;
  // return foundForm;
  return form;
};
