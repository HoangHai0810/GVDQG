'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loaiChungChi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  loaiChungChi.init({
    tenLoaiChungChi: DataTypes.TEXT,
    thoiHan: DataTypes.INTERGER
  }, {
    sequelize,
    modelName: 'loaiChungChi',
  });
  return loaiChungChi;
};
