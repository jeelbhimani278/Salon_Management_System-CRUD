const express = require("express");
const Barber = require("../models/Barber");
const barberRouter = express.Router();


// GET ALL BARBERS

barberRouter.get("/", async (req, res) => {

    try {

        const barbers = await Barber.find()
            .populate("user_id", "name email role");

        res.status(200).json({
            message: "All barbers",
            data: barbers
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// CREATE BARBER

barberRouter.post("/", async (req, res) => {

    try {

        const barber = await Barber.create(req.body);

        res.status(201).json({
            message: "Barber added successfully",
            data: barber
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// UPDATE BARBER

barberRouter.put("/:id", async (req, res) => {

    try {

        const barber = await Barber.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!barber) {

            return res.status(404).json({
                message: "Barber not found"
            });

        }

        res.status(200).json({
            message: "Barber updated successfully",
            data: barber
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// DELETE BARBER

barberRouter.delete("/:id", async (req, res) => {

    try {

        const barber = await Barber.findByIdAndDelete(
            req.params.id
        );

        if (!barber) {

            return res.status(404).json({
                message: "Barber not found"
            });

        }

        res.status(200).json({
            message: "Barber deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = barberRouter;