'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chucVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chucVu.hasMany(models.huanLuyenVien)
    }
  };
  chucVu.init({
    maChucVu: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    tenChucVu: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'chucVu',
  });
  return chucVu;
};
