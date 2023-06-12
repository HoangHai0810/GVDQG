'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dienBiens', {
      maDienBien: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenDoiBong: {
        type: Sequelize.STRING,
        references: {
          model: 'doiBongs',
          key: 'tenDoiBong'
        }
      },
      maCauThu: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cauThus',
          key: 'maCauThu'
        }
      },
      maLich: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lichThiDaus',
          key: 'maLich'
        }
      },
      maLoaiBanThang: {
        type: Sequelize.STRING,
        references: {
          model: 'loaiBanThangs',
          key: 'maLoaiBanThang'
        }
      },
      maLoaiThe: {
        type: Sequelize.STRING,
        references: {
          model: 'loaiThes',
          key: 'maLoaiThe'
        }
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
    await queryInterface.dropTable('dienBiens');
  }
};