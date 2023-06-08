'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lichThiDaus', {
      maLich: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      ngayGio: {
        type: Sequelize.DATE
      },
      vong: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('lichThiDaus');
  }
};