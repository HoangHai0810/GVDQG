import { render } from "ejs";
import express, { application } from 'express'
import db from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";
import migrationCreateDoibong from "../migrations/migration-create-doibong";

let getHomePage = async (req, res) => {
    try {
        let data = await CRUDSevice.getAllUser({
            raw: true,
        });
        return res.render('homepage.ejs', {
            data: JSON.stringify(data),
        });
    } catch (e) {
        console.log(e);
    }
}

let getInfoPage = (req, res) => {
    return res.render('infopage.ejs');
}

let getCRUDPage = (req, res) => {
    return res.render('CRUD.ejs');
}

let postCRUD = async (req, res) => {
    let mes = await CRUDSevice.createNewUser(req.body);
    console.log(mes);
    res.redirect('/');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDSevice.getAllUser({
        raw: true,
    });
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDSevice.getUserInfoById(userId);
        if (userData) {
            return res.render('edit-CRUD.ejs', {
                user: userData
            })
        }
    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDSevice.editUser(data);
    let allUsers = await db.User.findAll();
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let delCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDSevice.deleteUserById(userId);
        let allUsers = await db.User.findAll();
        return res.render('./displayCRUD.ejs', {
            dataTable: allUsers
        });
    } else {
        return res.send('User not found!');
    }
}

let loginCRUD = (req, res) => {
    return res.send('Login')
}

let getManager = async(req, res) => 
{
    try{
        let data = await CRUDSevice.getAllUser({
            raw :   true,
        });
        return res.render('Manager.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getBanQuanLy = async(req, res) => 
{
    try{
        let data = await CRUDSevice.getAllUser({
            raw :   true,
        });
        return res.render('BanQuanLy.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}


let postTeam = async (req, res) => {
    // console.log (req.body);
    //     const { teamName, coach, homeGround, homeJerseyColor, awayJerseyColor } = req.body;
    //     console.log({ teamName, coach, homeGround, homeJerseyColor, awayJerseyColor});
    //     // Lưu thông tin đội bóng vào CSDL
    //     let teaminfo = await db.Doibong.create({ teamName, coach, homeGround, homeJerseyColor, awayJerseyColor});
    //     console.log (teaminfo)
    console.log(req.body);
    let mes = await CRUDSevice.createTeam(req.body);
    console.log(mes);
}


module.exports = {
    getHomePage: getHomePage,
    getInfoPage: getInfoPage,
    getCRUDPage: getCRUDPage,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    delCRUD: delCRUD,
    loginCRUD: loginCRUD,
    getManager: getManager,
    getBanQuanLy: getBanQuanLy,
    postTeam: postTeam,
    
}