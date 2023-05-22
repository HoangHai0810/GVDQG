'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cauthu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cauthu.init({
    TenCauThu: DataTypes.STRING,
    ViTri: DataTypes.STRING,
    SoAo: DataTypes.INTEGER,
    NgaySinh: DataTypes.DATE,
    ChieuCao: DataTypes.FLOAT,
    CanNang: DataTypes.FLOAT,
    QuocTich: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cauthu',
  });
  return Cauthu;
};