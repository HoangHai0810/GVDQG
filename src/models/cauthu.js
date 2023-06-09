'use strict';
const {
  Model
} = require('sequelize');
const doibong = require('./doibong');
module.exports = (sequelize, DataTypes) => {
  class cauThu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cauThu.belongsTo(models.loaiCauThu, { foreignKey: 'maLoaiCauThu', as: 'FK_Cauthu_Loaicauthu' });
      cauThu.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong', as: 'FK_Cauthu_Doibong' });
      cauThu.hasMany(models.dienBien);
    }
  };
  cauThu.init({
    maCauThu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tenCauThu: DataTypes.STRING,
    tenDoiBong: DataTypes.STRING,
    maLoaiCauThu: DataTypes.STRING,
    viTri: DataTypes.TEXT,
    soAo: DataTypes.INTEGER,
    ngaySinh: DataTypes.DATE,
    chieuCao: DataTypes.FLOAT,
    canNang: DataTypes.FLOAT,
    quocTich: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'cauThu',
  });
  return cauThu;
};