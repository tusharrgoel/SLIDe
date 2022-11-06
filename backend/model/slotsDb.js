const mongoose = require("mongoose");
const slot_db = new mongoose.Schema({
    slot_id: {
        type: String,
        required: true
    },
    Status:{
        type:Boolean,
        required:true
    }
});

module.exports= mongoose.model('company', company_db);