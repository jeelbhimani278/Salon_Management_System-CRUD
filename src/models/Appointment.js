const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    customer_id: {
        type: String,
        ref: "Customer",
        required: true
    },

    barber_id: {
        type: String,
        ref: "Barber",
        required: true
    },

    service_id: {
        type: String,
        ref: "Service",
        required: true
    },

    appointment_date: {
        type: Date,
        required: true
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Confirmed",
            "In Progress",
            "Completed",
            "Cancelled"
        ],
        default: "Pending"
    },

    remarks: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model("Appointment", appointmentSchema);