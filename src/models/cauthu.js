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
      Cauthu.belongsTo(models.Loaicauthu, { foreignKey: 'LoaiCauThu' });
      /*Cauthu.belongsto(Doibong, { foreignKey: 'tenDoiBong' } );
      Cauthu.hasMany(Dienbien, { foreignKey: 'maCauThu' }); */
    }
  };
  Cauthu.init({
    /* loaiCauThu: DataTypes.STRING, */
    tenDoiBong: DataTypes.STRING,
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