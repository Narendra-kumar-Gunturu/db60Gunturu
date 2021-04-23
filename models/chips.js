const mongoose = require("mongoose")
const chipsSchema = mongoose.Schema({
    chipsName:String,
    Flavour:String,
    price:{
        type:Number,
        min:1,
        max:400
    }
})
module.exports = mongoose.model("chips", chipsSchema)