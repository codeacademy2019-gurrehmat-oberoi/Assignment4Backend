

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('submissions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    formId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    field: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    response: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('submissions'),
};
