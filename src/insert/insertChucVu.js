const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/chucvu');

const sequelize = new Sequelize(config.development);

const cv = UserModel(sequelize, Sequelize.DataTypes);

async function insertCV()
{
    try
    {
        
        await sequelize.sync();
        const newCV1 = 
        {
            maChucVu: 'CV01',
            tenChucVu: 'Huấn luyện viên trưởng'    
        };
        const Cv1 = await cv.create(newCV1);
        
        console.log('CV1 created: ', Cv1.toJSON());
        const newCV2 =
        {
            maChucVu: 'CV02',
            tenChucVu: 'Trợ lý HLV'
        };
        const Cv2 = await cv.create(newCV2);
        console.log('CV2 created: ', Cv2.toJSON());
        const newCV3 =
        {
            maChucVu: 'CV03',
            tenChucVu: 'Huấn luyện viên thể lực'
        };
        const Cv3 = await cv.create(newCV3);
        console.log('CV3 created: ', Cv3.toJSON());
        const newCV4 =
        {
            maChucVu: 'CV04',
            tenChucVu: 'Huấn luyện viên thủ môn'
        };
        const Cv4 = await cv.create(newCV4);
        console.log('CV4 created: ', Cv4.toJSON());
    }
    catch(error)
    {
        console.error('Error inserting user: error');
    }
    finally
    {
        await sequelize.close();
    }
}
insertCV();