const express = require("express");
const Services = require("../models/Services");
const serviceRouter = express();

serviceRouter.post("/services", async (req, res) => {
  try {
    const service = await Services.create(req.body);
    res.status(201).json({
      message: "Service added successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

serviceRouter.get("/services", async (req, res) => {
  try {
    const services = await Services.find();
    res.status(201).json({
      message: "getAllServices",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

serviceRouter.get("/services/:id", async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    res.status(201).json({
      message: "getServiceByid",
      data: service,
    });
  } catch (error) {
    (res.status(500),
      json({
        message: error.message,
      }));
  }
});

serviceRouter.patch("/services/:id", async (req, res) => {
  try {
    const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) {
        res.status(404).json({
            message: "Service not found"
        })
    }else{
        res.status(201).json({
            message: "Service updated successfully"
        })
    }
  } catch (error) {
    res.status(500).json({
        message: error.message
    })
  }
});

serviceRouter.delete("/services/:id", async (req, res) => {
    try {
        const service = await Services.findByIdAndDelete(req.params.id)
        if (!service) {
            res.status(404).json({
                message: "Service not found"
            })
        }else{
            res.status(201).json({
                message: "service deleted successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = serviceRouter;
