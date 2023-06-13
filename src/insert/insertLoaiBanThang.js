const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/loaibanthang');

const sequelize = new Sequelize(config.development);

const lbt = UserModel(sequelize, Sequelize.DataTypes);

async function insertLBT()
{
    try
    {
        await sequelize.sync();
        const newLBT1 = 
        {
            maLoaiBanThang: 'LBT01',
            tenLoaiBanThang: 'Không'
        };
        const Lbt1 = await lbt.create(newLBT1);
        console.log('LBT1 created: ', Lbt1.toJSON());
        const newLBT2 = 
        {
            maLoaiBanThang: 'LBT02',
            tenLoaiBanThang: 'Trực tiếp'
        };
        const Lbt2 = await lbt.create(newLBT2);
        console.log('LBT2 created: ', Lbt2.toJSON());
        const newLBT3 = 
        {
            maLoaiBanThang: 'LBT03',
            tenLoaiBanThang: 'Đá phạt'
        };
        const Lbt3 = await lbt.create(newLBT3);
        console.log('LBT3 created: ', Lbt3.toJSON());
        const newLBT4 = 
        {
            maLoaiBanThang: 'LBT04',
            tenLoaiBanThang: 'Phản lưới nhà'
        };
        const Lbt4 = await lbt.create(newLBT4);
        console.log('LBT4 created: ', Lbt4.toJSON());
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
insertLBT();