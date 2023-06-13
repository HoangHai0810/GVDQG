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

        }
    };
    lichThiDau.init({
        maLich: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        tenDoiBong1: DataTypes.STRING,
        tenDoiBong2: DataTypes.STRING,
        ngayGio: {
            type: DataTypes.DATE,
            timezone: '+07:00',
            timezoneOffset: '+07:00'
        },
        vong: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'lichThiDau',
    });
    return lichThiDau;
};