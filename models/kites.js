const mongoose = require("mongoose") 
const kitesSchema = mongoose.Schema({ 
    name: String, color: String, cost: {type:Number,min:2,max:100} 
}) 
module.exports = mongoose.model("Kites", kitesSchema)