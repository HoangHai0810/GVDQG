const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/chungchi');

const sequelize = new Sequelize(config.development);

const cc = UserModel(sequelize, Sequelize.DataTypes);

async function insertCC()
{
    try
    {
        await sequelize.sync();
        const newCC1 = 
        {
            soChungChi: 'A001',
            maLoaiChungChi: 'A',
            ngayCap: new Date('2022-12-24'),
            noiCap: 'VFF'
        };
        const Cc1 = await cc.create(newCC1);
        console.log('CC1 created: ', Cc1.toJSON());
        const newCC2 = 
        {
            soChungChi: 'B001',
            maLoaiChungChi: 'B',
            ngayCap: new Date('2022-06-05'),
            noiCap: 'VFF'
        };
        const Cc2 = await cc.create(newCC2);
        console.log('CC2 created: ', Cc2.toJSON());
        const newCC3 = 
        {
            soChungChi: 'P001',
            maLoaiChungChi: 'Pro',
            ngayCap: new Date('2022-04-15'),
            noiCap: 'AFF'
        };
        const Cc3 = await cc.create(newCC3);
        console.log('CC3 created: ', Cc3.toJSON());
        const newCC4 = 
        {
            soChungChi: 'A002',
            maLoaiChungChi: 'A',
            ngayCap: new Date('2022-11-20'),
            noiCap: 'VFF'
        };
        const Cc4 = await cc.create(newCC4);
        console.log('CC4 created: ', Cc4.toJSON());
        const newCC5 = 
        {
            soChungChi: 'A003',
            maLoaiChungChi: 'A',
            ngayCap: new Date('2022-03-08'),
            noiCap: 'VFF'
        };
        const Cc5 = await cc.create(newCC5);
        console.log('CC5 created: ', Cc5.toJSON());
        const newCC6 = 
        {
            soChungChi: 'B002',
            maLoaiChungChi: 'B',
            ngayCap: new Date('2022-02-01'),
            noiCap: 'VFF'
        };
        const Cc6 = await cc.create(newCC6);
        console.log('CC6 created: ', Cc6.toJSON());
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
insertCC();