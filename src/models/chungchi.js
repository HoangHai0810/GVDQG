'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chungChi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chungChi.init({
    ngayCap: DataTypes.DATE,
    noiCap: DataTypesTEXT.
  }, {
    sequelize,
    modelName: 'chungChi',
  });
  return chungChi;
};
