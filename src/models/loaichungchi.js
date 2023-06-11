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
      loaiChungChi.hasMany(models.chungChi);
    }
  };
  loaiChungChi.init({
    maLoaiChungChi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tenLoaiChungChi: DataTypes.TEXT,
    thoiHan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'loaiChungChi',
  });
  return loaiChungChi;
};
