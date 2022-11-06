const mongoose = require("mongoose");

const user_db = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Number: {
        type:Number,
        required:true
    },
    Email: {
        type: String,
        required: true,
            },
    Password: {
        type: String,
        required: true,
    },
    Vehicle_Number: {
        type: String,
        required: true,
    },
    Parking_Status:{
        type: Boolean,
        required:true
    }
});

module.exports= mongoose.model('user', user_db);