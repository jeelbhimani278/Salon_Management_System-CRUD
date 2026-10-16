const express = require("express");
const Users = require("../models/Users");
const userRouter = express();

userRouter.post("/users", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json({
      message: "User Created Successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

userRouter.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(201).json({
      message: "getAllUsers",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

userRouter.get("/users/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(201).json({
      message: "getUserById",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

userRouter.patch("/users/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(201).json({
        message: "User updated",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

userRouter.delete("/users/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = userRouter;
