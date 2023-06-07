'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doibong', {
      tenDoiBong: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sanNha: {
        type: Sequelize.TEXT
      },
      mauAoSanNha: {
        type: Sequelize.TEXT
      },
      mauAoSanKhach: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Doibong');
  }
};