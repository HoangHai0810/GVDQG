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
        const newLCT = {
            tenLoaiCauThu: 'Trong nước',
            moTa: 'Quốc tịch Việt Nam'
        };
        const Lct = await lct.create(newLCT);
        console.log('LCT created:', Lct.toJSON());
    } catch (error) {
        console.error('Error inserting user:', error);
    } finally {
        await sequelize.close(); // Close the database connection
    }
}

insertLCT();
