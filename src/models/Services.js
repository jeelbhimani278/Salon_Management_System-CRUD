const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        default: ""
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    duration: {
        type: Number,
        required: true
    }
})  

module.exports = mongoose.model("Services", serviceSchema)