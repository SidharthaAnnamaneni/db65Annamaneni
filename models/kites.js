const mongoose = require("mongoose") 
const kitesSchema = mongoose.Schema({ 
    name: String, color: String, cost: Number 
}) 
module.exports = mongoose.model("Kites", kitesSchema)