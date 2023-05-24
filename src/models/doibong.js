'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doibong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Doibong.hasMany(Cauthu, { foreignKey: 'tenDoiBong' });
      Doibong.hasMany(Loaithidau, { foreignKey: 'tenDoiBong', as: 'tenDoi1' });
      Doibong.hasMany(Loaithidau, { foreignKey: 'tenDoiBong', as: 'tenDoi2' });
      Doibong.hasMany(Dienbien, { foreignKey: 'tenDoibong' }) */
    }
  };
  Doibong.init({
    tenDoiBong: DataTypes.STRING,
    sanNha: DataTypes.TEXT,
    mauAoSanNha: DataTypes.TEXT,
    mauAoSanKhach: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Doibong',
  });
  return Doibong;
};