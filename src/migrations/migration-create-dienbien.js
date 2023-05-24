'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dienbien', {
      maDienBien: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maCauThu: {
        type: Sequelize.STRING
      },
      tenDoiBong: {
        type: Sequelize.TEXT
      },
      maLich: {
        type: Sequelize.STRING
      },
      loaiBanThang: {
        type: Sequelize.STRING
      },
      loaiThe: {
        type: Sequelize.STRING
      },
      thoiDiem: {
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
    await queryInterface.dropTable('Dienbien');
  }
};