import doibong from '../models/doibong';
import db, { sequelize } from '../models/index'
import bcrypt from 'bcryptjs';
const { QueryTypes } = require('sequelize');
const salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                password: data.password,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
            })

            reslove('Added user!')
        } catch (e) {
            reject(e);
        }
    })
}

let createDienBien = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {

            for (let i = 0; i < data.length; i++) {
                var maLoaiBT = 1;
                if (data[i][2] == 'Trực tiếp') {
                    maLoaiBT = 2;
                }
                if (data[i][2] == 'Đá phạt') {
                    maLoaiBT = 3;
                }
                if (data[i][2] == 'Phản lưới nhà') {
                    maLoaiBT = 4;
                }
                var maLoaiThe = 1;
                if (data[i][3] == 'Thẻ vàng') {
                    maLoaiThe = 2;
                }
                if (data[i][3] == 'Thẻ đỏ') {
                    maLoaiThe = 3;
                }
                await db.dienBien.create({
                    tenCauThu: data[i][0],
                    tenDoiBong: data[i][1],
                    maLoaiBanThang: maLoaiBT,
                    maLoaiThe: maLoaiThe,
                    thoiDiem: data[i][4],
                })
            }
            reslove('AddDienBien!!');
        } catch (e) {
            reject(e)
        }
    })
}

let createTeam = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            await db.doiBong.create({
                tenDoiBong: data.teamName,
                sanNha: data.homeGround,
                mauAoSanNha: data.homeJerseyColor,
                mauAoSanKhach: data.awayJerseyColor,
            });
            data.playerData = JSON.parse(data.playerData);
            console.log(data.playerData);
            for (let i = 0; i < data.playerData.length; i++) {
                var tempLoaiCT = null;
                if (data.playerData[i][7] === 'Cầu thủ nước ngoài') {
                    tempLoaiCT = 'NN';
                }
                if (data.playerData[i][7] === 'Cầu thủ trong nước') {
                    tempLoaiCT = 'TN';
                }

                await db.cauThu.create({
                    tenCauThu: data.playerData[i][0],
                    soAo: data.playerData[i][1],
                    viTri: data.playerData[i][2],
                    ngaySinh: data.playerData[i][3],
                    chieuCao: data.playerData[i][4],
                    canNang: data.playerData[i][5],
                    tenDoiBong: data.teamName,
                    quocTich: data.playerData[i][6],
                    maLoaiCauThu: tempLoaiCT
                })
            }
            await db.tongKet.create({
                soBanThangSanKhach: 0,
                soTranDau: 0,
                soTranThang: 0,
                soTranHoa: 0,
                soTheVang: 0,
                soBanThang: 0,
                soBanThua: 0,
                soTheDo: 0,
                hieuSo: 0,
                diemSo: 0,
                soTranThua: 0,
                tenDoiBong: data.teamName,
            });
            reslove('Added Team!')
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise((reslove, reject) => {
        try {
            var hashPassword = bcrypt.hashSync(password, salt);
            reslove(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllUser = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = db.User.findAll();
            reslove(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllTongKet = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let tongket = await sequelize.query("SELECT tongKets.tenDoiBong,soTranDau,soTranThang,soTranHoa,soTranThua,soBanThang,soBanThua,soTheVang,soTheDo,hieuSo,diemSo FROM `tongKets` INNER JOIN `doiBongs` ON tongKets.tenDoiBong = doiBongs.tenDoiBong ORDER BY diemSo DESC", { type: QueryTypes.SELECT });
            reslove(tongket);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCauThu = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let cauThu = await sequelize.query("SELECT * FROM `cauThus` ORDER BY tenDoiBong,viTri DESC", { type: QueryTypes.SELECT });
            reslove(cauThu);
        } catch (e) {
            reject(e)
        }
    });
}

let getALLDoiBong = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let doibong = await sequelize.query("SELECT * FROM `doiBongs` ", { type: QueryTypes.SELECT });
            reslove(doibong);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichThiDauTruoc = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDau = await sequelize.query("SELECT distinct DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay FROM `lichThiDaus` WHERE DATE(ngayGio) <= NOW() ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDau);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichThiDauSau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDauSau = await sequelize.query("SELECT distinct DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay FROM `lichThiDaus` WHERE DATE(ngayGio) >= NOW() ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDauSau);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllTranDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let lichThiDauTruoc = await sequelize.query("SELECT tenDoiBong1,tenDoiBong2, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay,DATE_FORMAT(ngayGio, '%H:%i') AS gio, vong, doiBongs.sanNha FROM `lichThiDaus` INNER JOIN `doiBongs` ON lichThiDaus.tenDoiBong1 = doiBongs.tenDoiBong ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(lichThiDauTruoc);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllKetQua = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT ketQuas.maLich,soBanThangDoi1,soBanThangDoi2,soTheVang,soTheDo,tenDoiBong1,tenDoiBong2,DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay, DATE_FORMAT(ngayGio, '%H:%i') AS gio,vong FROM `ketQuas` INNER JOIN `lichThiDaus` ON ketQuas.maLich = lichThiDaus.maLich ORDER BY ngay DESC", { type: QueryTypes.SELECT });
            reslove(ketqua);
        } catch (e) {
            reject(e)
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId,
                }
            })
            if (user) {
                reslove(user)
            }
            else {
                reslove({})
            }
            reslove(user);
        } catch (e) {
            reject(e);
        };
    })
}

let editUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: data.id,
                }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender === '1' ? true : false;

                await user.save();
                reslove('Edited user!');
            }
            else {
                reslove();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: userId } })
            if (user) {
                user.destroy();
            }
            reslove();
        } catch (e) {
            reject(e);
        }
    })
}

let getAllThamSo = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT * FROM thamSos", { type: QueryTypes.SELECT });
            console.log(ketqua);
            reslove(ketqua);
        } catch (e) {
            reject(e)
        }
    });
}

let getAllLichThiDau = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let ketqua = await sequelize.query("SELECT maLich, tenDoiBong1,tenDoiBong2,DATE(ngayGio) AS ngayF, DATE_FORMAT(STR_TO_DATE(ngayGio, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y') AS ngay,DATE_FORMAT(ngayGio, '%H:%i') AS gio, vong, doiBongs.sanNha, lichThiDaus.ngayGio FROM `lichThiDaus` INNER JOIN `doiBongs` ON lichThiDaus.tenDoiBong1 = doiBongs.tenDoiBong WHERE maLich NOT IN (SELECT maLich FROM `ketQuas`) ORDER BY lichThiDaus.ngayGio DESC", { type: QueryTypes.SELECT });
            console.log(ketqua);
            reslove(ketqua);
        } catch (e) {
            reject(e)
        }
    });
}

let createLichThiDau = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            for (let i = 0; i < data.teamName1.length; i++) {
                var tempVong;
                if (data.vong[i] === 'Lượt đi') {
                    tempVong = 1;
                }
                else {
                    tempVong = 2;
                }
                await db.lichThiDau.create({
                    tenDoiBong1: data.teamName1[i],
                    tenDoiBong2: data.teamName2[i],
                    ngayGio: data.ngay[i],
                    vong: tempVong,
                });
            }

            reslove('Lich added!');
        } catch (e) {
            reject(e);
        }
    });
}
let updateLichThiDau = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            for (let i = 0; i < data.teamName1.length; i++) {
                var tempVong;
                if (data.vong[i] === 'Lượt đi') {
                    tempVong = 1;
                }
                else {
                    tempVong = 2;
                }
                await db.lichThiDau.create({
                    tenDoiBong1: data.teamName1[i],
                    tenDoiBong2: data.teamName2[i],
                    ngayGio: data.ngay[i],
                    vong: tempVong,
                });
            }

            reslove('Lich added!');
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    editUser: editUser,
    deleteUserById: deleteUserById,
    createTeam: createTeam,
    getAllTongKet: getAllTongKet,
    getAllCauThu: getAllCauThu,
    getALLDoiBong: getALLDoiBong,
    getAllLichThiDauSau: getAllLichThiDauSau,
    getAllLichThiDauTruoc: getAllLichThiDauTruoc,
    getAllLichThiDau: getAllLichThiDau,
    getAllKetQua: getAllKetQua,
    getAllTranDau: getAllTranDau,
    createDienBien: createDienBien,
    getAllThamSo: getAllThamSo,
    createLichThiDau: createLichThiDau,
    updateLichThiDau: updateLichThiDau
}
