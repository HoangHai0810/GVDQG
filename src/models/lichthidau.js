'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lichthidau extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Lichthidau.belongsTo(models.Doibong, { foreignKey: 'maDoiBong', as: 'FK_Lichthidau_Doibong' });
            Lichthidau.hasOne(models.Ketqua, { foreignKey: 'maLich', as: 'FK_Ketqua_Lichthidau' });
        }
    };
    Lichthidau.init({
        //tenDoi1: DataTypes.TEXT,
        //tenDoi2: DataTypes.TEXT,
        malich: DataTypes.STRING,
        ngayGio: DataTypes.DATE,
        vong: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Lichthidau',
    });
    return Lichthidau;
};