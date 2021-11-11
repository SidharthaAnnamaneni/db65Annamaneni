const mongoose = require("mongoose") 
const kitesSchema = mongoose.Schema({ 
    size: String, quantity: String, cost: Number 
}) 
module.exports = mongoose.model("Kites", kitesSchema)