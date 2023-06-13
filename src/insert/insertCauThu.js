const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/cauthu');

const sequelize = new Sequelize(config.development);

const ct = UserModel(sequelize, Sequelize.DataTypes);

async function insertCT()
{
    try
    {
        await sequelize.sync();
        //Becamex Bình Dương
       const newCT1 = 
        {
            tenCauThu: 'Nguyễn Tiến Linh',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 22,
            ngaySinh: new Date('1997-10-20'),
            chieuCao: 178,
            canNang: 72,
            quocTich: 'Việt Nam',
            ghiChu: 'Đội trưởng'       
        };
        const Ct1 = await ct.create(newCT1);
        console.log('CT1 created: ', Ct1.toJSON());
        const newCT2 = 
        {
            tenCauThu: 'Nguyễn Thanh Thảo',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 3,
            ngaySinh: new Date('1995-05-14'),
            chieuCao: 178,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct2 = await ct.create(newCT2);
        console.log('CT2 created: ', Ct2.toJSON());
        const newCT3 = 
        {
            tenCauThu: 'Nguyễn Trọng Huy',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 23,
            ngaySinh: new Date('1997-06-25'),
            chieuCao: 180,
            canNang: 75,
            quocTich: 'Việt Nam'    
        };
        const Ct3 = await ct.create(newCT3);
        console.log('CT3 created: ', Ct3.toJSON())
        const newCT4 = 
        {
            tenCauThu: 'Wellington Adão',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 37,
            ngaySinh: new Date('1988-05-07'),
            chieuCao: 180,
            canNang: 70,
            quocTich: 'Brazil'    
        };
        const Ct4 = await ct.create(newCT4);
        console.log('CT4 created: ', Ct4.toJSON())
        const newCT5 = 
        {
            tenCauThu: 'Hồ Sỹ Giáp',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 18,
            ngaySinh: new Date('1994-04-18'),
            chieuCao: 175,
            canNang: 70,
            quocTich: 'Việt Nam'    
        };
        const Ct5 = await ct.create(newCT5);
        console.log('CT5 created: ', Ct5.toJSON())
        const newCT6 = 
        {
            tenCauThu: 'Trần Duy Khánh',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 12,
            ngaySinh: new Date('1997-07-20'),
            chieuCao: 173,
            canNang: 78,
            quocTich: 'Việt Nam'    
        };
        const Ct6 = await ct.create(newCT6);
        console.log('CT6 created: ', Ct6.toJSON())
        const newCT7 = 
        {
            tenCauThu: 'Nguyễn Trần Việt Cường',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 16,
            ngaySinh: new Date('2000-12-27'),
            chieuCao: 179,
            canNang: 68,
            quocTich: 'Việt Nam'    
        };
        const Ct7 = await ct.create(newCT7);
        console.log('CT7 created: ', Ct7.toJSON())
        const newCT8 = 
        {
            tenCauThu: 'Rimario Allando Gordon',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 9,
            ngaySinh: new Date('1994-07-06'),
            chieuCao: 180,
            canNang: 75,
            quocTich: 'Jamaica'    
        };
        const Ct8 = await ct.create(newCT8);
        console.log('CT8 created: ', Ct8.toJSON())
        const newCT9 = 
        {
            tenCauThu: 'Tổng Anh Tỷ',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 17,
            ngaySinh: new Date('1997-01-21'),
            chieuCao: 173,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct9 = await ct.create(newCT9);
        console.log('CT9 created: ', Ct9.toJSON())
        const newCT10 = 
        {
            tenCauThu: 'Trương Dũ Đạt',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 15,
            ngaySinh: new Date('1997-07-25'),
            chieuCao: 180,
            canNang: 75,
            quocTich: 'Việt Nam'    
        };
        const Ct10 = await ct.create(newCT10);
        console.log('CT10 created: ', Ct10.toJSON())
        const newCT11 = 
        {
            tenCauThu: 'Nguyễn Sơn Hải',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 1,
            ngaySinh: new Date('1994-05-06'),
            chieuCao: 178,
            canNang: 86,
            quocTich: 'Việt Nam'    
        };
        const Ct11 = await ct.create(newCT11);
        console.log('CT11 created: ', Ct11.toJSON())
        const newCT12 = 
        {
            tenCauThu: 'Phan Minh Thành',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 46,
            ngaySinh: new Date('1998-11-22'),
            chieuCao: 192,
            canNang: 80,
            quocTich: 'Việt Nam'    
        };
        const Ct12 = await ct.create(newCT12);
        console.log('CT12 created: ', Ct12.toJSON())
        const newCT13 = 
        {
            tenCauThu: 'Nguyễn Trung Tín',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 27,
            ngaySinh: new Date('1991-05-11'),
            chieuCao: 177,
            canNang: 70,
            quocTich: 'Việt Nam'    
        };
        const Ct13 = await ct.create(newCT13);
        console.log('CT13 created: ', Ct13.toJSON())
        const newCT14 = 
        {
            tenCauThu: 'Trần Hoàng Bảo',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 24,
            ngaySinh: new Date('2001-05-15'),
            chieuCao: 176,
            canNang: 68,
            quocTich: 'Việt Nam'    
        };
        const Ct14 = await ct.create(newCT14);
        console.log('CT14 created: ', Ct14.toJSON())
        const newCT15 = 
        {
            tenCauThu: 'Đặng Thanh Hoàng',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 32,
            ngaySinh: new Date('1997-07-21'),
            chieuCao: 175,
            canNang: 70,
            quocTich: 'Việt Nam'    
        };
        const Ct15 = await ct.create(newCT15);
        console.log('CT15 created: ', Ct15.toJSON())
        const newCT16 = 
        {
            tenCauThu: 'Võ Hoàng Minh Khoa',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 29,
            ngaySinh: new Date('2001-03-12'),
            chieuCao: 175,
            canNang: 70,
            quocTich: 'Việt Nam'    
        };
        const Ct16 = await ct.create(newCT16);
        console.log('CT16 created: ', Ct16.toJSON())
        const newCT17 = 
        {
            tenCauThu: 'Bùi Vĩ Hào',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 11,
            ngaySinh: new Date('2003-02-24'),
            chieuCao: 180,
            canNang: 65,
            quocTich: 'Việt Nam'    
        };
        const Ct17 = await ct.create(newCT17);
        console.log('CT17 created: ', Ct17.toJSON())
        const newCT18 = 
        {
            tenCauThu: 'Tô Văn Vũ',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 28,
            ngaySinh: new Date('1993-10-20'),
            chieuCao: 175,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct18 = await ct.create(newCT18);
        console.log('CT18 created: ', Ct18.toJSON())
        const newCT19 = 
        {
            tenCauThu: 'Nguyễn Trọng Huy',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 6,
            ngaySinh: new Date('1997-06-25'),
            chieuCao: 180,
            canNang: 75,
            quocTich: 'Việt Nam'    
        };
        const Ct19 = await ct.create(newCT19);
        console.log('CT19 created: ', Ct19.toJSON())
        const newCT20 = 
        {
            tenCauThu: 'Eydison Teofilo Soares',
            tenDoiBong: 'Becamex Bình Dương',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 10,
            ngaySinh: new Date('1998-05-30'),
            chieuCao: 178,
            canNang: 78,
            quocTich: 'Brazil'    
        };
        const Ct20 = await ct.create(newCT20);
        console.log('CT20 created: ', Ct20.toJSON())
         //Hoàng Anh Gia Lai
        const newCT21 = 
        {
            tenCauThu: 'Nguyễn Tuấn Anh',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 11,
            ngaySinh: new Date('1995-05-16'),
            chieuCao: 183,
            canNang: 83,
            quocTich: 'Việt Nam',
            ghiChu: 'Đội trưởng'    
        };
        const Ct21 = await ct.create(newCT21);
        console.log('CT21 created: ', Ct21.toJSON());
        const newCT22 = 
        {
            tenCauThu: 'Dương Văn Lợi',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 1,
            ngaySinh: new Date('2000-12-02'),
            chieuCao: 177,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct22 = await ct.create(newCT22);
        console.log('CT22 created: ', Ct22.toJSON());
        const newCT23 = 
        {
            tenCauThu: 'Nguyễn Công Phượng',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 10,
            ngaySinh: new Date('1995-01-21'),
            chieuCao: 168,
            canNang: 62,
            quocTich: 'Việt Nam'    
        };
        const Ct23 = await ct.create(newCT23);
        console.log('CT23 created: ', Ct23.toJSON());
        const newCT24 = 
        {
            tenCauThu: 'Nguyễn Thanh Nhân',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 23,
            ngaySinh: new Date('2000-10-25'),
            chieuCao: 167,
            canNang: 65,
            quocTich: 'Việt Nam'    
        };
        const Ct24 = await ct.create(newCT24);
        console.log('CT24 created: ', Ct24.toJSON());
        const newCT25 = 
        {
            tenCauThu: 'Nguyễn Quốc Việt',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 19,
            ngaySinh: new Date('2003-05-04'),
            chieuCao: 173,
            canNang: 63,
            quocTich: 'Việt Nam'    
        };
        const Ct25 = await ct.create(newCT25);
        console.log('CT25 created: ', Ct25.toJSON());
        const newCT26 = 
        {
            tenCauThu: 'Kim Dong Su',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'NN',
            viTri: 'Hậu vệ',
            soAo: 3,
            ngaySinh: new Date('1995-02-21'),
            chieuCao: 188,
            canNang: 68,
            quocTich: 'Hàn Quốc'    
        };
        const Ct26 = await ct.create(newCT26);
        console.log('CT26 created: ', Ct26.toJSON());
        const newCT27 = 
        {
            tenCauThu: 'Lê Văn Sơn',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 2,
            ngaySinh: new Date('1996-12-20'),
            chieuCao: 169,
            canNang: 64,
            quocTich: 'Việt Nam'    
        };
        const Ct27 = await ct.create(newCT27);
        console.log('CT27 created: ', Ct27.toJSON());
        const newCT28 = 
        {
            tenCauThu: 'Washington Brandão Dos Santos',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 12,
            ngaySinh: new Date('1990-08-18'),
            chieuCao: 183,
            canNang: 83,
            quocTich: 'Brazil'    
        };
        const Ct28 = await ct.create(newCT28);
        console.log('CT28 created: ', Ct28.toJSON());
        const newCT29 = 
        {
            tenCauThu: 'Trần Bảo Toàn',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 20,
            ngaySinh: new Date('2000-07-14'),
            chieuCao: 169,
            canNang: 63,
            quocTich: 'Việt Nam'    
        };
        const Ct29 = await ct.create(newCT29);
        console.log('CT29 created: ', Ct29.toJSON());
        const newCT30 = 
        {
            tenCauThu: 'Trần Minh Vương',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 8,
            ngaySinh: new Date('1995-03-28'),
            chieuCao: 165,
            canNang: 59,
            quocTich: 'Việt Nam'    
        };
        const Ct30 = await ct.create(newCT30);
        console.log('CT30 created: ', Ct30.toJSON());
        const newCT31 = 
        {
            tenCauThu: 'Nguyễn Đức Việt',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 24,
            ngaySinh: new Date('2004-01-01'),
            chieuCao: 174,
            canNang: 68,
            quocTich: 'Việt Nam'    
        };
        const Ct31 = await ct.create(newCT31);
        console.log('CT31 created: ', Ct31.toJSON());
        const newCT32 = 
        {
            tenCauThu: 'Nguyễn Văn Toàn',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 9,
            ngaySinh: new Date('1996-04-12'),
            chieuCao: 170,
            canNang: 58,
            quocTich: 'Việt Nam'    
        };
        const Ct32 = await ct.create(newCT32);
        console.log('CT32 created: ', Ct32.toJSON());
        const newCT33 = 
        {
            tenCauThu: 'Lê Minh Bình',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 10,
            ngaySinh: new Date('1999-12-25'),
            chieuCao: 175,
            canNang: 68,
            quocTich: 'Việt Nam'    
        };
        const Ct33 = await ct.create(newCT33);
        console.log('CT33 created: ', Ct33.toJSON());
        const newCT34 = 
        {
            tenCauThu: 'Nguyễn Hữu Anh Tài',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 5,
            ngaySinh: new Date('1996-02-28'),
            chieuCao: 172,
            canNang: 69,
            quocTich: 'Việt Nam'    
        };
        const Ct34 = await ct.create(newCT34);
        console.log('CT34 created: ', Ct34.toJSON());
        const newCT35 = 
        {
            tenCauThu: 'Lê Hữu Phước',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 34,
            ngaySinh: new Date('2001-05-07'),
            chieuCao: 177,
            canNang: 62,
            quocTich: 'Việt Nam'    
        };
        const Ct35 = await ct.create(newCT35);
        console.log('CT35 created: ', Ct35.toJSON());
        const newCT36 = 
        {
            tenCauThu: 'Âu Dương Quân',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 29,
            ngaySinh: new Date('2000-04-30'),
            chieuCao: 181,
            canNang: 75,
            quocTich: 'Việt Nam'    
        };
        const Ct36 = await ct.create(newCT36);
        console.log('CT36 created: ', Ct36.toJSON());
        const newCT37 = 
        {
            tenCauThu: 'Nguyễn Phong Hồng Duy',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 7,
            ngaySinh: new Date('1996-06-13'),
            chieuCao: 169,
            canNang: 66,
            quocTich: 'Việt Nam'    
        };
        const Ct37 = await ct.create(newCT37);
        console.log('CT37 created: ', Ct37.toJSON());
        const newCT38 = 
        {
            tenCauThu: 'Trần Đình Bảo',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 66,
            ngaySinh: new Date('1997-06-18'),
            chieuCao: 176,
            canNang: 74,
            quocTich: 'Việt Nam'    
        };
        const Ct38 = await ct.create(newCT38);
        console.log('CT38 created: ', Ct38.toJSON());
        const newCT39 = 
        {
            tenCauThu: 'Võ Đình Lâm',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 60,
            ngaySinh: new Date('2000-01-10'),
            chieuCao: 167,
            canNang: 69,
            quocTich: 'Việt Nam'    
        };
        const Ct39 = await ct.create(newCT39);
        console.log('CT39 created: ', Ct39.toJSON());
        const newCT40 = 
        {
            tenCauThu: 'Vũ Văn Thanh',
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 17,
            ngaySinh: new Date('1996-04-14'),
            chieuCao: 172,
            canNang: 67,
            quocTich: 'Việt Nam'    
        };
        const Ct40 = await ct.create(newCT40);
        console.log('CT40 created: ', Ct40.toJSON());
        //SHB Đà Nẵng
        const newCT41 = 
        {
            tenCauThu: 'Hoàng Minh Tâm',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 12,
            ngaySinh: new Date('1990-10-28'),
            chieuCao: 171,
            canNang: 68,
            quocTich: 'Việt Nam',
            ghiChu: 'Đội trưởng'    
        };
        const Ct41 = await ct.create(newCT41);
        console.log('CT41 created: ', Ct41.toJSON());
        const newCT42 = 
        {
            tenCauThu: 'Đặng Anh Tuấn',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 6,
            ngaySinh: new Date('1994-08-01'),
            chieuCao: 173,
            canNang: 66,
            quocTich: 'Việt Nam'    
        };
        const Ct42 = await ct.create(newCT42);
        console.log('CT42 created: ', Ct42.toJSON());
        const newCT43 = 
        {
            tenCauThu: 'Rodrigo Da Silva Dias',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 7,
            ngaySinh: new Date('1994-01-26'),
            chieuCao: 190,
            canNang: 92,
            quocTich: 'Brazil'    
        };
        const Ct43 = await ct.create(newCT43);
        console.log('CT43 created: ', Ct43.toJSON());
        const newCT44 = 
        {
            tenCauThu: 'Lương Duy Cương',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 20,
            ngaySinh: new Date('2001-11-07'),
            chieuCao: 180,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct44 = await ct.create(newCT44);
        console.log('CT44 created: ', Ct44.toJSON());
        const newCT45 = 
        {
            tenCauThu: 'Phan Văn Biểu',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 1,
            ngaySinh: new Date('1998-03-12'),
            chieuCao: 175,
            canNang: 72,
            quocTich: 'Việt Nam'    
        };
        const Ct45 = await ct.create(newCT45);
        console.log('CT45 created: ', Ct45.toJSON());
        const newCT46 = 
        {
            tenCauThu: 'Phùng Lê Cao Sơn',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 99,
            ngaySinh: new Date('1999-05-17'),
            chieuCao: 177,
            canNang: 80,
            quocTich: 'Việt Nam'    
        };
        const Ct46 = await ct.create(newCT46);
        console.log('CT46 created: ', Ct46.toJSON());
        const newCT47 = 
        {
            tenCauThu: 'Lâm Anh Quang',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 97,
            ngaySinh: new Date('1991-04-24'),
            chieuCao: 180,
            canNang: 72,
            quocTich: 'Việt Nam'    
        };
        const Ct47 = await ct.create(newCT47);
        console.log('CT47 created: ', Ct47.toJSON());
        const newCT48 = 
        {
            tenCauThu: 'Hà Minh Tuấn',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 92,
            ngaySinh: new Date('1991-01-10'),
            chieuCao: 178,
            canNang: 75,
            quocTich: 'Việt Nam'    
        };
        const Ct48 = await ct.create(newCT48);
        console.log('CT48 created: ', Ct48.toJSON());
        const newCT49 = 
        {
            tenCauThu: 'Liều Quang Vinh',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 86,
            ngaySinh: new Date('1999-05-30'),
            chieuCao: 171,
            canNang: 65,
            quocTich: 'Việt Nam'    
        };
        const Ct49 = await ct.create(newCT49);
        console.log('CT49 created: ', Ct49.toJSON());
        const newCT50 = 
        {
            tenCauThu: 'Võ Ngọc Toàn',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 8,
            ngaySinh: new Date('1994-10-20'),
            chieuCao: 171,
            canNang: 66,
            quocTich: 'Việt Nam'    
        };
        const Ct50 = await ct.create(newCT50);
        console.log('CT50 created: ', Ct50.toJSON());
        const newCT51 = 
        {
            tenCauThu: 'Lâm Quí',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 67,
            ngaySinh: new Date('1997-02-18'),
            chieuCao: 173,
            canNang: 72,
            quocTich: 'Việt Nam'    
        };
        const Ct51 = await ct.create(newCT51);
        console.log('CT51 created: ', Ct51.toJSON());
        const newCT52 = 
        {
            tenCauThu: 'Phạm Nguyên Sa',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 43,
            ngaySinh: new Date('1989-01-17'),
            chieuCao: 172,
            canNang: 68,
            quocTich: 'Việt Nam'    
        };
        const Ct52 = await ct.create(newCT52);
        console.log('CT52 created: ', Ct52.toJSON());
        const newCT53 = 
        {
            tenCauThu: 'Phạm Văn Hữu',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 15,
            ngaySinh: new Date('2001-06-03'),
            chieuCao: 165,
            canNang: 65,
            quocTich: 'Việt Nam'    
        };
        const Ct53 = await ct.create(newCT53);
        console.log('CT53 created: ', Ct53.toJSON());
        const newCT54 = 
        {
            tenCauThu: 'Đặng Anh Tuấn',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 28,
            ngaySinh: new Date('2000-11-06'),
            chieuCao: 182,
            canNang: 80,
            quocTich: 'Việt Nam'    
        };
        const Ct54 = await ct.create(newCT54);
        console.log('CT54 created: ', Ct54.toJSON());
        const newCT55 = 
        {
            tenCauThu: 'Phạm Đình Duy',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 18,
            ngaySinh: new Date('2002-04-02'),
            chieuCao: 174,
            canNang: 63,
            quocTich: 'Việt Nam'    
        };
        const Ct55 = await ct.create(newCT55);
        console.log('CT55 created: ', Ct55.toJSON());
        const newCT56 = 
        {
            tenCauThu: 'Phan Văn Long',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 11,
            ngaySinh: new Date('1996-06-01'),
            chieuCao: 178,
            canNang: 73,
            quocTich: 'Việt Nam'    
        };
        const Ct56 = await ct.create(newCT56);
        console.log('CT56 created: ', Ct56.toJSON());
        const newCT57 = 
        {
            tenCauThu: 'Nguyễn Trọng Nam',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 24,
            ngaySinh: new Date('2002-03-17'),
            chieuCao: 173,
            canNang: 65,
            quocTich: 'Việt Nam'    
        };
        const Ct57 = await ct.create(newCT57);
        console.log('CT57 created: ', Ct57.toJSON());
        const newCT58 = 
        {
            tenCauThu: 'Nguyễn Công Nhật',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 22,
            ngaySinh: new Date('1993-05-12'),
            chieuCao: 173,
            canNang: 63,
            quocTich: 'Việt Nam'    
        };
        const Ct58 = await ct.create(newCT58);
        console.log('CT58 created: ', Ct58.toJSON());
        const newCT59 = 
        {
            tenCauThu: 'Nguyễn Phi Hoàng',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 21,
            ngaySinh: new Date('2003-02-27'),
            chieuCao: 172,
            canNang: 62,
            quocTich: 'Việt Nam'    
        };
        const Ct59 = await ct.create(newCT59);
        console.log('CT59 created: ', Ct59.toJSON());
        const newCT60 = 
        {
            tenCauThu: 'Trịnh Văn Quang',
            tenDoiBong: 'SHB Đà Nẵng',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 19,
            ngaySinh: new Date('1996-01-13'),
            chieuCao: 174,
            canNang: 70,
            quocTich: 'Việt Nam'    
        };
        const Ct60 = await ct.create(newCT60);
        console.log('CT60 created: ', Ct60.toJSON());
        //Sông Lam Nghệ An
        const newCT61 = 
        {
            tenCauThu: 'Quế Ngọc Hải',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 3,
            ngaySinh: new Date('1993-05-12'),
            chieuCao: 180,
            canNang: 72,
            quocTich: 'Việt Nam',
            ghiChu: 'Đội trưởng'   
        };
        const Ct61 = await ct.create(newCT61);
        console.log('CT61 created: ', Ct61.toJSON());
        const newCT62 = 
        {
            tenCauThu: 'Nguyễn Văn Việt',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Thủ môn',
            soAo: 1,
            ngaySinh: new Date('1994-04-06'),
            chieuCao: 180,
            canNang: 70,
            quocTich: 'Việt Nam'  
        };
        const Ct62 = await ct.create(newCT62);
        console.log('CT62 created: ', Ct62.toJSON());
        const newCT63 = 
        {
            tenCauThu: 'Trần Nam Hải',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 17,
            ngaySinh: new Date('2004-02-05'),
            chieuCao: 182,
            canNang: 75,
            quocTich: 'Việt Nam'  
        };
        const Ct63 = await ct.create(newCT63);
        console.log('CT63 created: ', Ct63.toJSON());
        const newCT64 = 
        {
            tenCauThu: 'Phan Xuân Đại',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 21,
            ngaySinh: new Date('2003-01-01'),
            chieuCao: 173,
            canNang: 65,
            quocTich: 'Việt Nam'  
        };
        const Ct64 = await ct.create(newCT64);
        console.log('CT64 created: ', Ct64.toJSON());
        const newCT65 = 
        {
            tenCauThu: 'Nguyễn Văn Bách',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 29,
            ngaySinh: new Date('2003-01-02'),
            chieuCao: 172,
            canNang: 70,
            quocTich: 'Việt Nam'  
        };
        const Ct65 = await ct.create(newCT65);
        console.log('CT65 created: ', Ct65.toJSON());
        const newCT66 = 
        {
            tenCauThu: 'Phạm Xuân Mạnh',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 7,
            ngaySinh: new Date('1996-02-09'),
            chieuCao: 174,
            canNang: 68,
            quocTich: 'Việt Nam'  
        };
        const Ct66 = await ct.create(newCT66);
        console.log('CT66 created: ', Ct66.toJSON());
        const newCT67 = 
        {
            tenCauThu: 'Trần Đình Hoàng',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 66,
            ngaySinh: new Date('1991-12-08'),
            chieuCao: 175,
            canNang: 75,
            quocTich: 'Việt Nam'  
        };
        const Ct67 = await ct.create(newCT67);
        console.log('CT67 created: ', Ct67.toJSON());
        const newCT68 = 
        {
            tenCauThu: 'Ganiyu Bolaji Oseni',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 91,
            ngaySinh: new Date('1991-09-19'),
            chieuCao: 177,
            canNang: 85,
            quocTich: 'Nigeria'  
        };
        const Ct68 = await ct.create(newCT68);
        console.log('CT68 created: ', Ct68.toJSON());
        const newCT69 = 
        {
            tenCauThu: 'Nguyễn Trọng Hoàng',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 9,
            ngaySinh: new Date('1989-04-14'),
            chieuCao: 172,
            canNang: 65,
            quocTich: 'Việt Nam'  
        };
        const Ct69 = await ct.create(newCT69);
        console.log('CT69 created: ', Ct69.toJSON());
        const newCT70 = 
        {
            tenCauThu: 'Michael Olaha',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 10,
            ngaySinh: new Date('1996-07-04'),
            chieuCao: 186,
            canNang: 72,
            quocTich: 'Nigeria'  
        };
        const Ct70 = await ct.create(newCT70);
        console.log('CT70 created: ', Ct70.toJSON());
        const newCT71 = 
        {
            tenCauThu: 'Hoàng Văn Khánh',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 5,
            ngaySinh: new Date('1995-04-05'),
            chieuCao: 181,
            canNang: 71,
            quocTich: 'Việt Nam'  
        };
        const Ct71 = await ct.create(newCT71);
        console.log('CT71 created: ', Ct71.toJSON());
        const newCT72 = 
        {
            tenCauThu: 'Mohammed Abdul Basit',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền đạo',
            soAo: 11,
            ngaySinh: new Date('1996-12-10'),
            chieuCao: 180,
            canNang: 70,
            quocTich: 'Ghana'  
        };
        const Ct72 = await ct.create(newCT72);
        console.log('CT72 created: ', Ct72.toJSON());
        const newCT73 = 
        {
            tenCauThu: 'Hồ Phúc Tịnh',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền đạo',
            soAo: 28,
            ngaySinh: new Date('1994-08-28'),
            chieuCao: 175,
            canNang: 68,
            quocTich: 'Việt Nam'  
        };
        const Ct73 = await ct.create(newCT73);
        console.log('CT73 created: ', Ct73.toJSON());
        const newCT74 = 
        {
            tenCauThu: 'Mai Sỹ Hoàng',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 79,
            ngaySinh: new Date('1999-01-01'),
            chieuCao: 171,
            canNang: 60,
            quocTich: 'Việt Nam'  
        };
        const Ct74 = await ct.create(newCT74);
        console.log('CT74 created: ', Ct74.toJSON());
        const newCT75 = 
        {
            tenCauThu: 'Phan Văn Đức',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 20,
            ngaySinh: new Date('1996-04-11'),
            chieuCao: 170,
            canNang: 63,
            quocTich: 'Việt Nam'  
        };
        const Ct75 = await ct.create(newCT75);
        console.log('CT75 created: ', Ct75.toJSON());
        const newCT76 = 
        {
            tenCauThu: 'Hồ Khắc Lương',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 24,
            ngaySinh: new Date('2001-01-10'),
            chieuCao: 172,
            canNang: 68,
            quocTich: 'Việt Nam'  
        };
        const Ct76 = await ct.create(newCT76);
        console.log('CT76 created: ', Ct76.toJSON());
        const newCT77 = 
        {
            tenCauThu: 'Mark Mkhongho O"Ojong',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'NN',
            viTri: 'Tiền vệ',
            soAo: 90,
            ngaySinh: new Date('1997-04-25'),
            chieuCao: 175,
            canNang: 68,
            quocTich: 'Cameroon'  
        };
        const Ct77 = await ct.create(newCT77);
        console.log('CT77 created: ', Ct77.toJSON());
        const newCT78 = 
        {
            tenCauThu: 'Bùi Đình Châu',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Tiền vệ',
            soAo: 4,
            ngaySinh: new Date('1996-02-06'),
            chieuCao: 168,
            canNang: 65,
            quocTich: 'Việt Nam'  
        };
        const Ct78 = await ct.create(newCT78);
        console.log('CT78 created: ', Ct78.toJSON());
        const newCT79 = 
        {
            tenCauThu: 'Hồ Văn Cường',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 30,
            ngaySinh: new Date('2003-01-15'),
            chieuCao: 167,
            canNang: 68,
            quocTich: 'Việt Nam'  
        };
        const Ct79 = await ct.create(newCT79);
        console.log('CT79 created: ', Ct79.toJSON());
        const newCT80 = 
        {
            tenCauThu: 'Thái Bá Sang',
            tenDoiBong: 'Sông Lam Nghệ An',
            maLoaiCauThu: 'TN',
            viTri: 'Hậu vệ',
            soAo: 86,
            ngaySinh: new Date('1999-05-21'),
            chieuCao: 170,
            canNang: 65,
            quocTich: 'Việt Nam'  
        };
        const Ct80 = await ct.create(newCT80);
        console.log('CT80 created: ', Ct80.toJSON());
        
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
insertCT();