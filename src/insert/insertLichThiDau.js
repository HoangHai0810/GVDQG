const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/lichthidau');

const sequelize = new Sequelize(config.development);

const Ltd = UserModel(sequelize, Sequelize.DataTypes);

async function insertLTD()
{
    try
    {
        await sequelize.sync();
        const newLTD1 = 
        {
            tenDoiBong1: 'Becamex Bình Dương',
            tenDoiBong2: 'Sông Lam Nghệ An',
            ngayGio: new Date('2022-02-25'),
            vong: 1
        };
        const Ltd1 = await Ltd.create(newLTD1);
        console.log('LTD1 created: ', Ltd1.toJSON());
        const newLTD2 = 
        {
            tenDoiBong1: 'Sông Lam Nghệ An',
            tenDoiBong2: 'Hoàng Anh Gia Lai',
            ngayGio: new Date('2022-03-06'),
            vong: 1
        };
        const Ltd2 = await Ltd.create(newLTD2);
        console.log('LTD2 created: ', Ltd2.toJSON());
        const newLTD3 = 
        {
            tenDoiBong1: 'Hoàng Anh Gia Lai',
            tenDoiBong2: 'SHB Đà Nẵng',
            ngayGio: new Date('2022-07-10'),
            vong: 1
        };
        const Ltd3 = await Ltd.create(newLTD3);
        console.log('LTD3 created: ', Ltd3.toJSON());
        const newLTD4 = 
        {
            tenDoiBong1: 'Becamex Bình Dương',
            tenDoiBong2: 'SHB Đà Nẵng',
            ngayGio: new Date('2022-07-15'),
            vong: 1
        };
        const Ltd4 = await Ltd.create(newLTD4);
        console.log('LTD4 created: ', Ltd4.toJSON());
        const newLTD5 = 
        {
            tenDoiBong1: 'SHB Đà Nẵng',
            tenDoiBong2: 'Sông Lam Nghệ An',
            ngayGio: new Date('2022-07-19'),
            vong: 1
        };
        const Ltd5 = await Ltd.create(newLTD5);
        console.log('LTD5 created: ', Ltd5.toJSON());
        const newLTD6 = 
        {
            tenDoiBong1: 'Hoàng Anh Gia Lai',
            tenDoiBong2: 'Becamex Bình Dương',
            ngayGio: new Date('2022-07-20'),
            vong: 1
        };
        const Ltd6 = await Ltd.create(newLTD6);
        console.log('LTD6 created: ', Ltd6.toJSON());
        const newLTD7 = 
        {
            tenDoiBong1: 'Becamex Bình Dương',
            tenDoiBong2: 'Hoàng Anh Gia Lai',
            ngayGio: new Date('2022-09-13'),
            vong: 2
        };
        const Ltd7 = await Ltd.create(newLTD7);
        console.log('LTD7 created: ', Ltd7.toJSON());
        const newLTD8 = 
        {
            tenDoiBong1: 'Sông Lam Nghệ An',
            tenDoiBong2: 'SHB Đà Nẵng',
            ngayGio: new Date('2022-09-13'),
            vong: 2
        };
        const Ltd8 = await Ltd.create(newLTD8);
        console.log('LTD8 created: ', Ltd8.toJSON());
        const newLTD9 = 
        {
            tenDoiBong1: 'SHB Đà Nẵng',
            tenDoiBong2: 'Becamex Bình Dương',
            ngayGio: new Date('2022-10-07'),
            vong: 2
        };
        const Ltd9 = await Ltd.create(newLTD9);
        console.log('LTD9 created: ', Ltd9.toJSON());
        const newLTD10 = 
        {
            tenDoiBong1: 'Hoàng Anh Gia Lai',
            tenDoiBong2: 'Sông Lam Nghệ An',
            ngayGio: new Date('2022-10-14'),
            vong: 2
        };
        const Ltd10 = await Ltd.create(newLTD10);
        console.log('LTD10 created: ', Ltd10.toJSON());
        const newLTD11 = 
        {
            tenDoiBong1: 'SHB Đà Nẵng',
            tenDoiBong2: 'Hoàng Anh Gia Lai',
            ngayGio: new Date('2022-10-22'),
            vong: 2
        };
        const Ltd11 = await Ltd.create(newLTD11);
        console.log('LTD11 created: ', Ltd11.toJSON());
        const newLTD12 = 
        {
            tenDoiBong1: 'Sông Lam Nghệ An',
            tenDoiBong2: 'Becamex Bình Dương',
            ngayGio: new Date('2022-11-03'),
            vong: 2
        };
        const Ltd12 = await Ltd.create(newLTD12);
        console.log('LTD12 created: ', Ltd12.toJSON());
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
insertLTD();