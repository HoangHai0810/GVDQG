'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ketqua extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Ketqua.init({
        soBanThangDoi1: DataTypes.INTERGER,
        soBanThangDoi2: DataTypes.INTERGER,
        soTheVang: DataTypes.INTERGER,
        soTheDo: DataTypes.INTERGER
    }, {
        sequelize,
        modelName: 'Ketqua',
    });
    return Loaibanthang;
};