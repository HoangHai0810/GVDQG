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
      huanLuyenVien.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong' });
      huanLuyenVien.belongsTo(models.chungChi, { foreignKey: 'soChungChi' });
      huanLuyenVien.belongsTo(models.chucVu, { foreignKey: 'maChucVu' });
    }
  };
  huanLuyenVien.init({
    maHLV: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tenHLV: DataTypes.TEXT,
    tenDoiBong: DataTypes.STRING,
    soChungChi: DataTypes.STRING,
    maChucVu: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    SDT: DataTypes.STRING,
    quocTich: DataTypes.TEXT,
    ghiChu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'huanLuyenVien',
  });
  return huanLuyenVien;
};
