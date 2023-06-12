const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/dienbien');

const sequelize = new Sequelize(config.development);

const DB = Usermodel(sequelize, Sequelize.DataTypes);

async function insertDB()
{
    try
    {
        await sequelize.sync();
        const newDB = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiBanThang: null,
            maLoaiThe: 2,
            thoiDiem: 21
        };
        const DB = await db.create(newDB);
        console.log('DB created: ', Db.toJSON());
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
insertDB();