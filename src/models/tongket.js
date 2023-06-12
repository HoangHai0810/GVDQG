'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tongKet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tongKet.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong' });
    }
  };
  tongKet.init({
    maTK: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tenDoiBong: DataTypes.STRING,
    soTranDau: DataTypes.INTEGER,
    soTranThang: DataTypes.INTEGER,
    soTranHoa: DataTypes.INTEGER,
    soTranThua: DataTypes.INTEGER,
    soBanThang: DataTypes.INTEGER,
    soBanThua: DataTypes.INTEGER,
    soTheVang: DataTypes.INTEGER,
    soTheDo: DataTypes.INTEGER,
    hieuSo: DataTypes.INTEGER,
    diemSo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tongKet',
  });
  return tongKet;
};
