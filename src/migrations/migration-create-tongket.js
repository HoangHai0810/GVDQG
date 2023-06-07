'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tongKet', {
      maTK: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      soBanThangSanKhach: {
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
    await queryInterface.dropTable('tongKet');
  }
};