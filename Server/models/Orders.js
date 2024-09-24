const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        uname : {
            type : String,
            required : true
        },
        uemail : {
            type : String,
            required : true,
        },
        reachType : {
            type : String,
        },
        city : {
            type : String,
            required : true,
        },
        address : {
            type : String,
            required : true
        },
        number : {
            type : Number,
            required : true
        },
        items : {
            type : Array,
            required : true,
        },
        totalAmount : {
            type : Number,
            required : true,
        },
        status : {
            type : String,
            required : true,
            default : "shiped"
        },
        paymentMethod : {
            type : String,
            required : true,
        },
        date : {
            type : Date,
            required : true,
            default : Date.now
        }
    },
)


module.exports = mongoose.model("order",orderSchema);