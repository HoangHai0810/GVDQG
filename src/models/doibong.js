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
      doiBong.hasMany(models.cauThu);
      doiBong.hasMany(models.lichThiDau);
      doiBong.hasMany(models.dienBien);
      doiBong.hasMany(models.huanLuyenVien);
      doiBong.hasMany(models.tongKet, { foreignKey: 'tenDoiBong' });
    }
  };
  doiBong.init({
    tenDoiBong: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sanNha: DataTypes.TEXT,
    mauAoSanNha: DataTypes.TEXT,
    mauAoSanKhach: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'doiBong',
  });
  return doiBong;
};