const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/huanluyenvien');

const sequelize = new Sequelize(config.development);

const hlv = UserModel(sequelize, Sequelize.DataTypes);

async function insertHLV()
{
    try
    {
        await sequelize.sync();
        const newHLV1 = 
        {
            tenHLV: 'Lê Huỳnh Đức',
            tenDoiBong: 'Becamex Bình Dương',
            maChucVu: 'CV01',
            soChungChi: 'A001',
            ngaySinh: new Date('1972-04-20'),
            SDT: '0908565924',
            quocTich: 'Việt Nam',
        };
        const Hlv1 = await hlv.create(newHLV1);
        console.log('HLV1 created: ', Hlv1.toJSON());
        const newHLV2 = 
        {
            tenHLV: 'Nguyễn Quang Hải',
            tenDoiBong: 'Becamex Bình Dương',
            maChucVu: 'CV02',
            soChungChi: 'B001',
            ngaySinh: new Date('1985-11-01'),
            SDT: '0168256595',
            quocTich: 'Việt Nam',
        };
        const Hlv2 = await hlv.create(newHLV2);
        console.log('HLV2 created: ', Hlv2.toJSON());
        const newHLV3 = 
        {
            tenHLV: 'Kiatisuk Senamuang',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maChucVu: 'CV01',
            soChungChi: 'P001',
            ngaySinh: new Date('1973-08-11'),
            quocTich: 'Thái Lan',
        };
        const Hlv3 = await hlv.create(newHLV3);
        console.log('HLV3 created: ', Hlv3.toJSON());
        const newHLV4 = 
        {
            tenHLV: 'Phạm Minh Đức',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maChucVu: 'CV01',
            soChungChi: 'A002',
            ngaySinh: new Date('1976-05-05'),
            SDT: '0958483365',
            quocTich: 'Việt Nam',
        };
        const Hlv4 = await hlv.create(newHLV4);
        console.log('HLV4 created: ', Hlv4.toJSON());
        const newHLV5 = 
        {
            tenHLV: 'Phạm Như Thuật',
            tenDoiBong: 'Sông Lam Nghệ An',
            maChucVu: 'CV01',
            soChungChi: 'A003',
            ngaySinh: new Date('1984-03-11'),
            SDT: '0365871269',
            quocTich: 'Việt Nam',
        };
        const Hlv5 = await hlv.create(newHLV5);
        console.log('HLV5 created: ', Hlv5.toJSON());
        const newHLV6 = 
        {
            tenHLV: 'Phạm Văn Quyến',
            tenDoiBong: 'Sông Lam Nghệ An',
            maChucVu: 'CV02',
            soChungChi: 'B002',
            ngaySinh: new Date('1984-04-29'),
            SDT: '0558122921',
            quocTich: 'Việt Nam',
        };
        const Hlv6 = await hlv.create(newHLV6);
        console.log('HLV6 created: ', Hlv6.toJSON());
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
insertHLV();