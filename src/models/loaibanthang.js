'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loaiBanThang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      loaiBanThang.hasMany(models.dienBien)
    }
  };
  loaiBanThang.init({
    maLoaiBanThang: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    tenLoaiBanThang: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'loaiBanThang',
  });
  return loaiBanThang;
};