
const appointment_db = new mongoose.Schema({
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
    Slot_Alloted: {
        type: String,
        required: true,
    },
    Paid_Status: {
        type: Boolean,
        required: true,
    }
});

module.exports= mongoose.model('appointment', appointment_db);