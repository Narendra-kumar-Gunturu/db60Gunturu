const mongoose = require("mongoose")
const chipsSchema = mongoose.Schema({
    chipsName:String,
    Flavour:String,
    price:Number
})
module.exports = mongoose.model("chips", chipsSchema)