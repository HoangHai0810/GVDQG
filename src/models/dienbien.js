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
            Dienbien.belongsTo(models.Doibong);
            Dienbien.belongsTo(models.Cauthu);
            Dienbien.belongsTo(models.Lichthidau);
            Dienbien.belongsTo(models.Loaibanthang);
            Dienbien.belongsTo(models.loaiThe);
        }
    };
    Dienbien.init({
        maCauThu: DataTypes.STRING,
        tenDoiBong: DataTypes.TEXT,
        maLich: DataTypes.STRING,
        loaiBanThang: DataTypes.STRING,
        maDienBien: DataTypes.STRING,
        thoiDiem: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Dienbien',
    });
    return Dienbien;
};