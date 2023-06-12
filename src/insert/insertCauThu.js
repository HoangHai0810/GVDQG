const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/cauthu');

const sequelize = new Sequelize(config.development);

const ct = UserModel(sequelize, Sequelize.DataTypes);

async function insertCT()
{
    try
    {
        await sequelize.sync();
        const newCT = 
        {
            maLoaiCauThu: 'TN',
            tenDoiBong: 'Becamex Bình Dương',
            tenCauThu: 'Nguyễn Tiến Linh',
            soAo: 22,
            viTri: 'Tiền đạo',
            ngaySinh: '20/10/1997',
            chieuCao: 178,
            canNang: 72,
            quocTich: 'Việt Nam'       
        };
        const Ct = await db.create(newCT);
        console.log('CT created: ', Ct.toJSON());
    }
    catch(error)
    {
        console.error('Error inserting user:, error');
    }
    finally
    {
        await sequelize.close();
    }
}
insertCT();