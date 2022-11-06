const mongoose = require("mongoose");
const company_db = new mongoose.Schema({
    Owner_Name: {
        type: String,
        required: true
    },
    Owner_Number:{
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
    Location: {
        type: String,
        required: true,
    },
    Parking_Slots:{
type:Number,
required :true
    }
});

module.exports= mongoose.model('company', company_db);