'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('huanLuyenVien', {
      maHLV: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenHLV: {
        type: Sequelize.TEXT
      },
      ngaySinh: {
        type: Sequelize.DATE
      },
      SDT: {
        type: Sequelize.STRING
      },
      quocTich: {
        type: Sequelize.TEXT
      },
      ghiChu: {
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
    await queryInterface.dropTable('huanLuyenVien');
  }
};