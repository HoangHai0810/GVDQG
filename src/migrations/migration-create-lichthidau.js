'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lichthidau', {
      maLich: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenDoi1: {
        type: Sequelize.TEXT
      },
      tenDoi2: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Lichthidau');
  }
};