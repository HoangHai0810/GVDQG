'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cauthu', {
      maCauThu: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      loaiCauThu: {
        type: Sequelize.STRING
      },
      tenDoiBong: {
        type: Sequelize.STRING
      },
      tenCauThu: {
        type: Sequelize.STRING
      },
      viTri: {
        type: Sequelize.TEXT
      },
      soAo: {
        type: Sequelize.INTEGER
      },
      ngaySinh: {
        type: Sequelize.DATE
      },
      chieuCao: {
        type: Sequelize.FLOAT
      },
      canNang: {
        type: Sequelize.FLOAT
      },
      quocTich: {
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
    await queryInterface.dropTable('Cauthu');
  }
};