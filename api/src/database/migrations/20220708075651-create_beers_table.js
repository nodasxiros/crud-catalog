'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('beers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
     });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('beers');
  }
};
