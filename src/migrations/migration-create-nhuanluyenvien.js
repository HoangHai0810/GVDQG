'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('huanLuyenViens', {
      maHLV: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      tenHLV: {
        type: Sequelize.TEXT
      },
      tenDoiBong: {
        type: Sequelize.STRING,
        references: {
          model: 'doiBongs',
          key: 'tenDoiBong'
        }
      },
      soChungChi: {
        type: Sequelize.STRING,
        references: {
          model: 'chungChis',
          key: 'soChungChi'
        }
      },
      maChucVu: {
        type: Sequelize.STRING,
        references: {
          model: 'chucVus',
          key: 'maChucVu'
        }
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
    await queryInterface.dropTable('huanLuyenViens');
  }
};