// insertUser.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
const UserModel = require('../models/loaicauthu');

// Initialize Sequelize with the configuration
const sequelize = new Sequelize(config.development);

// Define the User model
const lct = UserModel(sequelize, Sequelize.DataTypes);

// Insert a new user into the database
async function insertLCT() {
    try {
        await sequelize.sync(); // Ensure the table is created
        const newLCT1 = {
            maLoaiCauThu: 'TN',
            tenLoaiCauThu: 'Cầu thủ trong nước',
            moTa: 'Quốc tịch Việt Nam'
        };
        const Lct1 = await lct.create(newLCT1);
        console.log('LCT created:', Lct1.toJSON());
        const newLCT2 = {
            maLoaiCauThu: 'NN',
            tenLoaiCauThu: 'Cầu thủ nước ngoài',
            moTa: 'Quốc tịch khác'
        };
        const Lct2 = await lct.create(newLCT2);
        console.log('LCT created:', Lct2.toJSON());
    } catch (error) {
        console.error('Error inserting user:', error);
    } finally {
        await sequelize.close(); // Close the database connection
    }
}

insertLCT();
