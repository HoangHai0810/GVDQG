'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tongKets', {
      maTK: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      tenDoiBong: {
        type: Sequelize.STRING,
        references: {
          model: 'doiBongs',
          key: 'tenDoiBong'
        }
      },
      soTranDau: {
        type: Sequelize.INTEGER
      },
      soTranThang: {
        type: Sequelize.INTEGER
      },
      soTranThua: {
        type: Sequelize.INTEGER
      },
      soTranHoa: {
        type: Sequelize.INTEGER
      },
      soBanThang: {
        type: Sequelize.INTEGER
      },
      soBanThua: {
        type: Sequelize.INTEGER
      },
      soTheVang: {
        type: Sequelize.INTEGER
      },
      soTheDo: {
        type: Sequelize.INTEGER
      },
      hieuSo: {
        type: Sequelize.INTEGER
      },
      diemSo: {
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
    await queryInterface.dropTable('tongKets');
  }
};