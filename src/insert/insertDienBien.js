const {Sequelize} = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/dienbien');

const sequelize = new Sequelize(config.development);

const DB = UserModel(sequelize, Sequelize.DataTypes);

async function insertDB()
{
    try
    {
        await sequelize.sync();
        //LD1: SLNA(5) 0 - 1 Becamex Bình Dương(1)
        const newDB1 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 72,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 21
        };
        const Db1 = await DB.create(newDB1);
        console.log('DB1 created: ', Db1.toJSON());
        const newDB2 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 16,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 28
        };
        const Db2 = await DB.create(newDB2);
        console.log('DB2 created: ', Db2.toJSON());
        const newDB3 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 80,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 47
        };
        const Db3 = await DB.create(newDB3);
        console.log('DB3 created: ', Db3.toJSON());
        const newDB4 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 16,
            maLich: 1,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 56
        };
        const Db4 = await DB.create(newDB4);
        console.log('DB4 created: ', Db4.toJSON());
        const newDB5 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 61,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 70
        };
        const Db5 = await DB.create(newDB5);
        console.log('DB5 created: ', Db5.toJSON());
        const newDB6 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 77,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 90
        };
        const Db6 = await DB.create(newDB6);
        console.log('DB6 created: ', Db6.toJSON());
        const newDB7 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 78,
            maLich: 1,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 90
        };
        const Db7 = await DB.create(newDB7);
        console.log('DB7 created: ', Db7.toJSON());
        //LD2: SLNA(1) 2 - 0 HAGL(2)
        const newDB8 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 66,
            maLich: 2,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 45
        };
        const Db8 = await DB.create(newDB8);
        console.log('DB8 created: ', Db8.toJSON());
        const newDB9 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 65,
            maLich: 2,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 55
        };
        const Db9 = await DB.create(newDB9);
        console.log('DB9 created: ', Db9.toJSON());
        const newDB10 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 75,
            maLich: 2,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 67
        };
        const Db10 = await DB.create(newDB10);
        console.log('DB10 created: ', Db10.toJSON());
        const newDB11 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 31,
            maLich: 2,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 86
        };
        const Db11 = await DB.create(newDB11);
        console.log('DB11 created: ', Db11.toJSON());
        const newDB12 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 26,
            maLich: 2,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 90
        };
        const Db12 = await DB.create(newDB12);
        console.log('DB12 created: ', Db12.toJSON());
        //LD3: HAGL(0) 1 - 0SHB Đà Nẵng(1)
        const newDB13 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 23,
            maLich: 3,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 2
        };
        const Db13 = await DB.create(newDB13);
        console.log('DB13 created: ', Db13.toJSON());
        const newDB14 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 47,
            maLich: 3,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 22
        };
        const Db14 = await DB.create(newDB14);
        console.log('DB14 created: ', Db14.toJSON());
        //LD4: SHB Đà Nẵng(1) 2-2 Becamex Bình Dương(1)
        const newDB15 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 59,
            maLich: 4,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 21
        };
        const Db15 = await DB.create(newDB15);
        console.log('DB15 created: ', Db15.toJSON());
        const newDB16 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 52,
            maLich: 4,
            maLoaiBanThang: 'LBT03',
            maLoaiThe: 'LT01',
            thoiDiem: 26
        };
        const Db16 = await DB.create(newDB16);
        console.log('DB16 created: ', Db16.toJSON());
        const newDB17 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 1,
            maLich: 4,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 36
        };
        const Db17 = await DB.create(newDB17);
        console.log('DB17 created: ', Db17.toJSON());
        const newDB18 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 52,
            maLich: 4,
            maLoaiBanThang: 'LBT03',
            maLoaiThe: 'LT01',
            thoiDiem: 64
        };
        const Db18 = await DB.create(newDB18);
        console.log('DB18 created: ', Db18.toJSON());
        const newDB19 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 13,
            maLich: 4,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 76
        };
        const Db19 = await DB.create(newDB19);
        console.log('DB19 created: ', Db19.toJSON());
        const newDB20 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 60,
            maLich: 4,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 88
        };
        const Db20 = await DB.create(newDB20);
        console.log('DB20 created: ', Db20.toJSON());
        //LD05: SHB Đà Nẵng(1) 3-1 Sông Lam Nghệ An(0)
        const newDB21 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 50,
            maLich: 5,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 44
        };
        const Db21 = await DB.create(newDB21);
        console.log('DB21 created: ', Db21.toJSON());
        const newDB22 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 59,
            maLich: 5,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 54
        };
        const Db22 = await DB.create(newDB22);
        console.log('DB22 created: ', Db22.toJSON());
        const newDB23 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 59,
            maLich: 5,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 71
        };
        const Db23 = await DB.create(newDB23);
        console.log('DB23 created: ', Db23.toJSON());
        const newDB24 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 68,
            maLich: 5,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 77
        };
        const Db24 = await DB.create(newDB24);
        console.log('DB24 created: ', Db24.toJSON());
        const newDB25 = 
        {
            tenDoiBong: 'SHB Đà Nắng',
            maCauThu: 55,
            maLich: 5,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 90
        };
        const Db25 = await DB.create(newDB25);
        console.log('DB25 created: ', Db25.toJSON());
        //LD06: Hoàng Anh Gia Lai(3) 2-1 Becamex Bình Dương(2)
        const newDB26 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 32,
            maLich: 6,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 11
        };
        const Db26 = await DB.create(newDB26);
        console.log('DB26 created: ', Db26.toJSON());
        const newDB27 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 32,
            maLich: 6,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 34
        };
        const Db27 = await DB.create(newDB27);
        console.log('DB27 created: ', Db27.toJSON());
        const newDB28 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 17,
            maLich: 6,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 50
        };
        const Db28 = await DB.create(newDB28);
        console.log('DB28 created: ', Db28.toJSON());
        const newDB29 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 40,
            maLich: 6,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 57
        };
        const Db29 = await DB.create(newDB29);
        console.log('DB29 created: ', Db29.toJSON());
        const newDB30 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 2,
            maLich: 6,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 58
        };
        const Db30 = await DB.create(newDB30);
        console.log('DB30 created: ', Db30.toJSON());
        const newDB31 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 37,
            maLich: 6,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 75
        };
        const Db31 = await DB.create(newDB31);
        console.log('DB31 created: ', Db31.toJSON());
        const newDB32 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 5,
            maLich: 6,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 79
        };
        const Db32 = await DB.create(newDB32);
        console.log('DB32 created: ', Db32.toJSON());
        const newDB33 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 39,
            maLich: 6,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 89
        };
        const Db33 = await DB.create(newDB33);
        console.log('DB33 created: ', Db33.toJSON());
        //LV01: Becamex Bình Dương(5) 1-1 Hoàng Anh Gia Lai(1)
        const newDB34 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 14,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 24
        };
        const Db34 = await DB.create(newDB34);
        console.log('DB34 created: ', Db34.toJSON());
        const newDB35 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 32,
            maLich: 7,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 35
        };
        const Db35 = await DB.create(newDB35);
        console.log('DB35 created: ', Db35.toJSON());
        const newDB36 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 36,
            maLich: 7,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 44
        };
        const Db36 = await DB.create(newDB36);
        console.log('DB36 created: ', Db36.toJSON());
        const newDB37 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 18,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 55
        };
        const Db37 = await DB.create(newDB37);
        console.log('DB37 created: ', Db37.toJSON());
        const newDB38 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 10,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 64
        };
        const Db38 = await DB.create(newDB38);
        console.log('DB38 created: ', Db38.toJSON());
        const newDB39 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 27,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 74
        };
        const Db39 = await DB.create(newDB39);
        console.log('DB39 created: ', Db39.toJSON());
        const newDB40 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 5,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 84
        };
        const Db40 = await DB.create(newDB40);
        console.log('DB40 created: ', Db40.toJSON());
        const newDB41 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 19,
            maLich: 7,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 90
        };
        const Db41 = await DB.create(newDB41);
        console.log('DB41 created: ', Db41.toJSON());
        //LV02: SHB Đà Nẵng(2) 2-2 Sông Lam Nghệ An(1), "1 thẻ đỏ SLNA"
        const newDB42 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 55,
            maLich: 8,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 7
        };
        const Db42 = await DB.create(newDB42);
        console.log('DB42 created: ', Db42.toJSON());
        const newDB43 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 80,
            maLich: 8,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 16
        };
        const Db43 = await DB.create(newDB43);
        console.log('DB43 created: ', Db43.toJSON());
        const newDB44 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 66,
            maLich: 8,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 24
        };
        const Db44 = await DB.create(newDB44);
        console.log('DB44 created: ', Db44.toJSON());
        const newDB45 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 56,
            maLich: 8,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 32
        };
        const Db45 = await DB.create(newDB45);
        console.log('DB45 created: ', Db45.toJSON());
        const newDB46 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 55,
            maLich: 8,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 45
        };
        const Db46 = await DB.create(newDB46);
        console.log('DB46 created: ', Db46.toJSON());
        const newDB47 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 61,
            maLich: 8,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 80
        };
        const Db47 = await DB.create(newDB47);
        console.log('DB47 created: ', Db47.toJSON());
        const newDB48 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 61,
            maLich: 8,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT03',
            thoiDiem: 89
        };
        const Db48 = await DB.create(newDB48);
        console.log('DB48 created: ', Db48.toJSON());
        const newDB49 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 53,
            maLich: 8,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 90
        };
        const Db49 = await DB.create(newDB49);
        console.log('DB49 created: ', Db49.toJSON());
        //LV03: Becamex Bình Dương(3) 4-0 SHB Đà Nẵng(2)
        const newDB50 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 20,
            maLich: 9,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 20
        };
        const Db50 = await DB.create(newDB50);
        console.log('DB50 created: ', Db50.toJSON());
        const newDB51 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 20,
            maLich: 9,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 43
        };
        const Db51 = await DB.create(newDB51);
        console.log('DB51 created: ', Db51.toJSON());
        const newDB52 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 1,
            maLich: 9,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 60
        };
        const Db52 = await DB.create(newDB52);
        console.log('DB52 created: ', Db52.toJSON());
        const newDB53 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 1,
            maLich: 9,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 66
        };
        const Db53 = await DB.create(newDB53);
        console.log('DB53 created: ', Db53.toJSON());
        const newDB54 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 11,
            maLich: 9,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 66
        };
        const Db54 = await DB.create(newDB54);
        console.log('DB54 created: ', Db54.toJSON());
        const newDB55 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 1,
            maLich: 9,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 68
        };
        const Db55 = await DB.create(newDB55);
        console.log('DB55 created: ', Db55.toJSON());
        const newDB56 = 
        {
            tenDoiBong: 'Becamex Bình Dương',
            maCauThu: 4,
            maLich: 9,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 75
        };
        const Db56 = await DB.create(newDB56);
        console.log('DB56 created: ', Db56.toJSON());
        const newDB57 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 50,
            maLich: 9,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 82
        };
        const Db57 = await DB.create(newDB57);
        console.log('DB57 created: ', Db57.toJSON());
        const newDB58 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 47,
            maLich: 9,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 83
        };
        const Db58 = await DB.create(newDB58);
        console.log('DB58 created: ', Db58.toJSON());
        //LV04: Sông Lam Nghệ An(2) 2-1 Hoàng Anh Gia Lai(0)
        const newDB59 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 70,
            maLich: 10,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 23
        };
        const Db59 = await DB.create(newDB59);
        console.log('DB59 created: ', Db59.toJSON());
        const newDB60 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 79,
            maLich: 10,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 43
        };
        const Db60 = await DB.create(newDB60);
        console.log('DB60 created: ', Db60.toJSON());
        const newDB61 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 76,
            maLich: 10,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 56
        };
        const Db61 = await DB.create(newDB61);
        console.log('DB61 created: ', Db61.toJSON());
        const newDB62 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 32,
            maLich: 10,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 61
        };
        const Db62 = await DB.create(newDB62);
        console.log('DB62 created: ', Db62.toJSON());
        const newDB63 = 
        {
            tenDoiBong: 'Hoàng Anh Gia Lai',
            maCauThu: 28,
            maLich: 10,
            maLoaiBanThang: 'LBT04',
            maLoaiThe: 'LT01',
            thoiDiem: 90
        };
        const Db63 = await DB.create(newDB63);
        console.log('DB63 created: ', Db63.toJSON());
        //LV05: SHB Đà Nẵng(1) 0-0 Hoàng Anh Gia Lai(0)
        const newDB64 = 
        {
            tenDoiBong: 'SHB Đà Nẵng',
            maCauThu: 44,
            maLich: 11,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 55
        };
        const Db64 = await DB.create(newDB64);
        console.log('DB64 created: ', Db64.toJSON());
        //LV06: Sông Lam Nghệ An(3) 3-0 Becamex Bình Dương(0)
        const newDB65 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 75,
            maLich: 12,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 24
        };
        const Db65 = await DB.create(newDB65);
        console.log('DB65 created: ', Db65.toJSON());
        const newDB66 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 75,
            maLich: 12,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 45
        };
        const Db66 = await DB.create(newDB66);
        console.log('DB66 created: ', Db66.toJSON());
        const newDB67 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 67,
            maLich: 12,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 55
        };
        const Db67 = await DB.create(newDB67);
        console.log('DB67 created: ', Db67.toJSON());
        const newDB68 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 68,
            maLich: 12,
            maLoaiBanThang: 'LBT02',
            maLoaiThe: 'LT01',
            thoiDiem: 69
        };
        const Db68 = await DB.create(newDB68);
        console.log('DB68 created: ', Db68.toJSON());
        const newDB69 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 61,
            maLich: 12,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 74
        };
        const Db69 = await DB.create(newDB69);
        console.log('DB69 created: ', Db69.toJSON());
        const newDB70 = 
        {
            tenDoiBong: 'Sông Lam Nghệ An',
            maCauThu: 71,
            maLich: 12,
            maLoaiBanThang: 'LBT01',
            maLoaiThe: 'LT02',
            thoiDiem: 83
        };
        const Db70 = await DB.create(newDB70);
        console.log('DB70 created: ', Db70.toJSON());
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