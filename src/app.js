const express = require("express");
var jwt = require("jsonwebtoken");
const db = require("./config/db");
const userRouter = require("./routes/userRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const barberRouter = require("./routes/barberRoutes");
const appointmentRouter = require("./routes/appointmentRoutes");
const app = express();

db();
app.use(express.json());

app.post("/login", (req, res) => {
  if (req.body.username == "jeel" && req.body.password == "jeel123") {
    var token = jwt.sign({ username: "jeel", img: "asdfasdf" }, "shhhhh");

    res.status(200).send({
      isValid: true,
      token,
    });
  } else {
    res.status(401).send({ isValid: false });
  }
});

app.use((req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, "shhhhh");
    next();
  } catch (e) {
    res.status(401).send("Unauthorized");
  }
});

app.use("/", userRouter);
app.use("/", serviceRouter);
app.use("/", barberRouter);
app.use("/", appointmentRouter);

app.listen(3000, () => {
  console.log("Server started @3000");
});
