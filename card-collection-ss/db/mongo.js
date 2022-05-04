const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        throw error;
    }
}