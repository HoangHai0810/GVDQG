'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class dienBien extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            dienBien.belongsTo(models.doiBong, { foreignKey: 'tenDoiBong', as: 'FK_dienBien_doiBong' });
            dienBien.belongsTo(models.cauThu, { foreignKey: 'maCauThu', as: 'FK_dienBien_cauThu' });
            dienBien.belongsTo(models.lichThiDau, { foreignKey: 'maLich', as: 'FK_dienBien_lichThiDau' });
            dienBien.belongsTo(models.loaiBanThang, { foreignKey: 'maLoaiBanThang', as: 'FK_dienBien_loaiBanThang' });
            dienBien.belongsTo(models.loaiThe, { foreignKey: 'maLoaiThe', as: 'FK_dienBien_loaiThe' });
        }
    };
    dienBien.init({
        maDienBien: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        tenDoiBong: DataTypes.STRING,
        maCauThu: DataTypes.INTEGER,
        maLich: DataTypes.STRING,
        maLoaiBanThang: DataTypes.STRING,
        maLoaiThe: DataTypes.STRING,
        thoiDiem: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'dienBien',
    });
    return dienBien;
};