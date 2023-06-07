'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chungChi', {
      soChungChi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maLoaiChungChi: {
        type: Sequelize.STRING
      },
      ngayCap: {
        type: Sequelize.DATE
      },
      noiCap: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chungChi');
  }
};