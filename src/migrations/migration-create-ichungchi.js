'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chungChis', {
      soChungChi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maLoaiChungChi: {
        type: Sequelize.STRING,
        references: {
          model: 'loaiChungChis',
          key: 'maLoaiChungChi'
        }
      },
      ngayCap: {
        type: Sequelize.DATE
      },
      noiCap: {
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
    await queryInterface.dropTable('chungChis');
  }
};