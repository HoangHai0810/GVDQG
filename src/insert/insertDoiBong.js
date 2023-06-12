const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/doibong');

const sequelize = new Sequelize(config.development);

const ĐB = UserModel(sequelize, Sequelize.DataTypes);

async function insertĐB()
{
    try
    {
        await sequelize.sync();
        const newĐB1 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            sanNha: 'Gò Dầu',
            mauAoSanNha: 'Đỏ',
            mauAoSanKhach: 'Xanh Dương'
        };
        const Đb1 = await ĐB.create(newĐB1);
        console.log('ĐB1 created: ', Đb1.toJSON());
        const newĐB2 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            sanNha: 'Pleiku',
            mauAoSanNha: 'Vàng',
            mauAoSanKhach: 'Trắng'
        };
        const Đb2 = await ĐB.create(newĐB2);
        console.log('ĐB2 created: ', Đb2.toJSON());
        const newĐB3 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            sanNha: 'Hòa Xuân',
            mauAoSanNha: 'Cam',
            mauAoSanKhach: 'Tím'
        };
        const Đb3 = await ĐB.create(newĐB3);
        console.log('ĐB3 created: ', Đb3.toJSON());
        const newĐB4 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            sanNha: 'Vinh',
            mauAoSanNha: 'Vàng',
            mauAoSanKhach: 'Đỏ'
        };
        const Đb4 = await ĐB.create(newĐB4);
        console.log('ĐB4 created: ', Đb4.toJSON());
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
insertĐB();