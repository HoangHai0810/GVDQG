'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doiBong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doiBong.hasMany(models.cauThu, { foreignKey: 'tenDoiBong' });
      doiBong.hasMany(models.lichThiDau, { foreignKey: 'tenDoiBong1' });
      doiBong.hasMany(models.lichThiDau, { foreignKey: 'tenDoiBong2' });
      doiBong.hasMany(models.dienBien, { foreignKey: 'tenDoibong' })
      doiBong.hasMany(models.huanLuyenVien, { foreignKey: 'tenDoiBong' });
      doiBong.hasMany(models.tongKet, { foreignKey: 'tenDoiBong' });
    }
  };
<<<<<<< HEAD
  Doibong.init({
=======
  doiBong.init({
>>>>>>> 4150543b70a16127ef3735e39017ac33e15b20d5
    sanNha: DataTypes.TEXT,
    mauAoSanNha: DataTypes.TEXT,
    mauAoSanKhach: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'doiBong',
  });
  return doiBong;
};