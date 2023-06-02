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
            Dienbien.belongsto(models.doibong, { foreignKey: 'maDoiBong', as: 'FK_Dienbien_Doibong' });
            Dienbien.belongsto(models.cauthu, { foreignKey: 'maCauThu', as: 'FK_Dienbien_Cauthu' });
            Dienbien.belongsto(models.lichthidau, { foreignKey: 'maLich', as: 'FK_Dienbien_Lichthidau' });
            Dienbien.belongsto(models.loaibanthang, { foreignKey: 'maLoaibanthang', as: 'FK_Dienbien_Loaibanthang' });
            Dienbien.belongsto(models.loaithe, { foreignKey: 'maLoaiThe', as: 'FK_Dienbien_Loaithe' });
        }
    };
    Dienbien.init({
        //maCauThu: DataTypes.STRING,
        //tenDoiBong: DataTypes.TEXT,
        //maLich: DataTypes.STRING,
        //loaiBanThang: DataTypes.STRING,
        //loaiThe: DataTypes.STRING,
        maDienBien: DataTypes.STRING,
        thoiDiem: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Dienbien',
    });
    return Dienbien;
};