'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ketQua extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ketQua.belongsTo(models.lichThiDau, { foreignKey: 'maLich' });
        }
    };
    ketQua.init({
        maKetQua: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        maLich: DataTypes.STRING,
        soBanThangDoi1: DataTypes.INTEGER,
        soBanThangDoi2: DataTypes.INTEGER,
        soTheVang: DataTypes.INTEGER,
        soTheDo: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ketQua',
    });
    return ketQua;
};