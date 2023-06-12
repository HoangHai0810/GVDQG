const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/loaicauthu');

const sequelize = new Sequelize(config.development);

const lct = UserModel(sequelize, Sequelize.DataTypes);

async function insertLCT()
{
    try
    {
        await sequelize.sync();
        const newLCT1 = 
        {
            maLoaiCauThu: 'TN',
            tenLoaiCauThu: 'Cầu thủ trong nước',
            moTa: 'Cầu thủ có quốc tịch là Việt Nam'
        };
        const Lct1 = await lct.create(newLCT1);
        console.log('LCT1 created: ', Lct1.toJSON());
        const newLCT2 = 
        {
            maLoaiCauThu: 'NN',
            tenLoaiCauThu: 'Cầu thủ nước ngoài',
            moTa: 'Cầu thủ có quốc tịch khác Việt Nam'
        };
        const Lct2 = await lct.create(newLCT2);
        console.log('LCT2 created: ', Lct2.toJSON());
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
insertLCT();