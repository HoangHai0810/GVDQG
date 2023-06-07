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
      Cauthu.belongsTo(models.Loaicauthu, { foreignKey: 'maLoaiCauThu', as: 'FK_Cauthu_Loaicauthu' });
      Cauthu.belongsTo(models.Doibong, { foreignKey: 'tenDoiBong', as: 'FK_Cauthu_Doibong' });
      Cauthu.hasMany(models.Dienbien, { foreignKey: 'maCauThu', as: 'FK_Dienbien_Cauthu' });
    }
  };
  Cauthu.init({
    //loaiCauThu: DataTypes.STRING,
    //tenDoiBong: DataTypes.STRING,
    maCauThu: DataTypes.STRING,
    tenCauThu: DataTypes.STRING,
    viTri: DataTypes.TEXT,
    soAo: DataTypes.INTEGER,
    ngaySinh: DataTypes.DATE,
    chieuCao: DataTypes.FLOAT,
    canNang: DataTypes.FLOAT,
    quocTich: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cauthu',
  });
  return Cauthu;
};