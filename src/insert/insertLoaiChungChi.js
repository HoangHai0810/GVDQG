const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/loaichungchi');

const sequelize = new Sequelize(config.development);

const lcc = UserModel(sequelize, Sequelize.DataTypes);

async function insertLCC()
{
    try
    {
        await sequelize.sync();
        const newLCC1 = 
        {
            maLoaiChungChi: 'C',
            tenLoaiChungChi: 'Chứng chỉ C',
            thoiHan: 12
        };
        const Lcc1= await lcc.create(newLCC1);
        console.log('LCC1 created: ', Lcc1.toJSON());
        const newLCC2 = 
        {
            maLoaiChungChi: 'B',
            tenLoaiChungChi: 'Chứng chỉ B',
            thoiHan: 12
        };
        const Lcc2 = await lcc.create(newLCC2);
        console.log('LCC2 created: ', Lcc2.toJSON());
        const newLCC3 = 
        {
            maLoaiChungChi: 'A',
            tenLoaiChungChi: 'Chứng chỉ A',
            thoiHan: 24
        };
        const Lcc3 = await lcc.create(newLCC3);
        console.log('LCC3 created: ', Lcc3.toJSON());
        const newLCC4 = 
        {
            maLoaiChungChi: 'Pro',
            tenLoaiChungChi: 'Chứng chỉ Pro',
            thoiHan: 24
        };
        const Lcc4 = await lcc.create(newLCC4);
        console.log('LCC4 created: ', Lcc4.toJSON());
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
insertLCC();