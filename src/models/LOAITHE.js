'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loaiThe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      loaiThe.hasMany(models.dienBien, { foreignKey: 'maLoaiThe' });
    }
  };
  loaiThe.init({
    tenLoaiThe: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'loaiThe',
  });
  return loaiThe;
};
