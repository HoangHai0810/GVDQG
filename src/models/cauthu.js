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
    TenCT: DataTypes.STRING,
    ViTri: DataTypes.STRING,
    SoAo: DataTypes.INTEGER,
    ChieuCao: DataTypes.FLOAT,
    CanNang: DataTypes.FLOAT,
    SoBT: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cauthu',
  });
  return Cauthu;
};