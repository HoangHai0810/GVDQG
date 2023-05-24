'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dienbien extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Dienbien.init({
        tenDoiBong: DataTypes.TEXT,
        thoiDiem: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Dienbien',
    });
    return Dienbien;
};