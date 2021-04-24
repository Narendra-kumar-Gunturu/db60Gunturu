const mongoose = require("mongoose")
const chipsSchema = mongoose.Schema({
    chipsName:String,
    Flavour:{
        type:String,
        minLength: 3,
        maxLength:15
    },
    price:{
        type:Number,
        min:1,
        max:400
    }
})
module.exports = mongoose.model("chips", chipsSchema)