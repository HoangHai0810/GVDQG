'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loaiBanThangs', {
      maLoaiBanThang: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenLoaiBanThang: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('loaiBanThangs');
  }
};