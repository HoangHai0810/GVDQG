const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/loaithe');

const sequelize = new Sequelize(config.development);

const lt = UserModel(sequelize, Sequelize.DataTypes);

async function insertLT()
{
    try
    {
        await sequelize.sync();
        const newLT1 = 
        {
            maLoaiThe: 'LT01',
            tenLoaiThe: 'Không'
        };
        const Lt1 = await lt.create(newLT1);
        console.log('LT1 created: ', Lt1.toJSON());
        const newLT2 = 
        {
            maLoaiThe: 'LT02',
            tenLoaiThe: 'Thẻ vàng'
        };
        const Lt2 = await lt.create(newLT2);
        console.log('LT2 created: ', Lt2.toJSON());
        const newLT3 = 
        {
            maLoaiThe: 'LT03',
            tenLoaiThe: 'Thẻ đỏ'
        };
        const Lt3 = await lt.create(newLT3);
        console.log('LT3 created: ', Lt3.toJSON());
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
insertLT();