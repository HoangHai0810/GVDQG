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
            Dienbien.belongsto(Doibong);
            Dienbien.belongsto(Cauthu);
            Dienbien.belongsto(Lichthidau);
            Dienbien.belongsto(Loaibanthang);
            Dienbien.belongsto(Loaithe);
        }
    };
    Dienbien.init({
        maCauThu: DataTypes.STRING,
        tenDoiBong: DataTypes.TEXT,
        maLich: DataTypes.STRING,
        loaiBanThang: DataTypes.STRING,
        loaiThe: DataTypes.STRING,
        thoiDiem: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Dienbien',
    });
    return Dienbien;
};