'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class lichThiDau extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            lichThiDau.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong1' });
            lichThiDau.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong2' });
            lichThiDau.hasOne(models.ketQua, { foreignKey: 'maLich' });
            lichThiDau.hasMany(models.dienBien, { foreignKey: 'maLich' });
        }
    };
    lichThiDau.init({
        ngayGio: DataTypes.DATE,
        vong: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'lichThiDau',
    });
    return lichThiDau;
};