'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class thamSo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  thamSo.init({
    tuoiCauThuToiThieu: DataTypes.INTEGER,
    tuoiCauThuToiDa: DataTypes.INTEGER,
    soCauThuToiThieu: DataTypes.INTEGER,
    soCauThuToiDa: DataTypes.INTEGER,
    soCauThuNuocNgoaiToiDa: DataTypes.INTEGER,
    chungChiHLVToiThieu: DataTypes.TEXT,
    chungChiTroLyHLVToiThieu: DataTypes.TEXT,
    thoiDiemGhiBanToiThieu: DataTypes.INTEGER,
    thoiDiemGhiBanToiDa: DataTypes.INTEGER,
    diemThang: DataTypes.INTEGER,
    diemHoa: DataTypes.INTEGER,
    diemThua: DataTypes.INTEGER,
    uuTienXepHang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'thamSo',
  });
  return thamSo;
};
