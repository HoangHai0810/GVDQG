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
    soTranDau: DataTypes.INTERGER,
    soTranThang: DataTypes.INTERGER,
    soTranHoa: DataTypes.INTERGER,
    soTranThua: DataTypes.INTERGER,
    soBanThangSanKhach: DataTypes.INTERGER,
    soTheVang: DataTypes.INTERGER,
    soTheDo: DataTypes.INTERGER,
    hieuSo: DataTypes.INTERGER,
    diemSo: DataTypes.INTERGER
  }, {
    sequelize,
    modelName: 'tongKet',
  });
  return tongKet;
};
