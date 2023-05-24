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
      // define association here
    }
  };
  tongKet.init({
    soTranDau: DataTypes.INTEGER,
    soTranThang: DataTypes.INTEGER,
    soTranHoa: DataTypes.INTEGER,
    soTranThua: DataTypes.INTEGER,
    soBanThangSanKhach: DataTypes.INTEGER,
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
