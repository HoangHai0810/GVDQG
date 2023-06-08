'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loaiCauThu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      loaiCauThu.hasMany(models.cauThu, { foreignKey: 'maLoaiCauThu' });
    }
  };
  loaiCauThu.init({
    tenLoaiCauThu: DataTypes.TEXT,
    moTa: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'loaiCauThu',
  });
  return loaiCauThu;
};