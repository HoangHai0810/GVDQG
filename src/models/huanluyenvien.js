'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class huanLuyenVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  };
  huanLuyenVien.init({
    tenDoiBong: DataTypes.TEXT,
    soChungChi: DataTypes.STRING,
    tenHLV: DataTypes.TEXT,
    ngaySinh: DataTypes.DATE,
    SDT: DataTypes.STRING,
    ghiChu: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'huanLuyenVien',
  });
  return huanLuyenVien;
};
