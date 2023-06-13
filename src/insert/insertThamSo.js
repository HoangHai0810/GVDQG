const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/thamso');

const sequelize = new Sequelize(config.development);

const Ts = UserModel(sequelize, Sequelize.DataTypes);

async function insertTS()
{
    try
    {
        await sequelize.sync();
        const newTS1 = 
        {
            tenThamSo: 'Tuổi cầu thủ tối thiểu',
            giaTri: '16'
        };
        const TS1 = await Ts.create(newTS1);
        console.log('TS1 created: ', TS1.toJSON());
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
insertTS();