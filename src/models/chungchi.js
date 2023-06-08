'use strict';
const {
  Model
} = require('sequelize');
const huanluyenvien = require('./huanluyenvien');
module.exports = (sequelize, DataTypes) => {
  class chungChi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chungChi.hasMany(models.huanLuyenVien, { foreignKey: 'soChungChi' });
      chungChi.belongsTo(models.loaiChungChi, { foreignKey: 'maLoaiChungChi' });
    }
  };
  chungChi.init({
    ngayCap: DataTypes.DATE,
    noiCap: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'chungChi',
  });
  return chungChi;
};
