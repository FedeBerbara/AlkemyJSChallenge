const mongoose = require('mongoose');
require('dotenv/config');

const mongoURI = process.env.MONGO_URI;

const mongoConnection = () => {
    mongoose.connect(mongoURI, {
        useFindAndModify: false,
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }, (error) => {
        if (error) throw error;
        console.log('DB Successfully Connected');
    });
};

module.exports = mongoConnection;