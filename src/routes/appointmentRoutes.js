const express = require("express");
const Appointment = require("../models/Appointment");

const appointmentRouter = express.Router();

// ADD APPOINTMENT

appointmentRouter.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment added successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET ALL APPOINTMENTS

appointmentRouter.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.json({
      message: "All appointments",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET APPOINTMENT BY ID

appointmentRouter.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    res.json({
      message: "Appointment",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE APPOINTMENT

appointmentRouter.put("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json({
      message: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE APPOINTMENT

appointmentRouter.delete("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    res.json({
      message: "Appointment deleted successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = appointmentRouter;
