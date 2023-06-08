'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loaiChungChi', {
      maLoaiChungChi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenLoaiChungChi: {
        type: Sequelize.TEXT
      },
      thoiHan: {
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
    await queryInterface.dropTable('loaiChungChi');
  }
};