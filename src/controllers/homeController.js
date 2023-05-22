import { render } from "ejs";
import db from "../models/index";
import CRUDSevice from "../sevices/CRUDSevice";

let getHomePage = async(req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }
    
    return res.render('homepage.ejs');
}

let getInfoPage = (req, res) => {
    return res.render('infopage.ejs');
}

let getCRUDPage = (req, res) => {
    return res.render('CRUD.ejs');
}

let postCRUD = async (req,res) => {
    let mes = await CRUDSevice.createNewUser(req.body);
    console.log(mes);
    let allUsers = await db.User.findAll();
    return res.render('./displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let displayGetCRUD = async(req,res) => {
    let data = await CRUDSevice.getAllUser({
        raw :   true,
    });
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async(req, res) => {
    let userId = req.query.id;
    if (userId){
        let userData = await CRUDSevice.getUserInfoById(userId);
        if (userData)
        {
            return res.render('edit-CRUD.ejs', {
                user: userData
            })
        }
    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async(req, res) => {
    let data = req.body;
    await CRUDSevice.editUser(data);
    let allUsers = await db.User.findAll();
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let delCRUD = async(req,res) => {
    let userId = req.query.id;
    if (userId){
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
    return res.render("./loginCRUD.ejs");
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
}