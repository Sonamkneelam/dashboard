const express = require("express");
const { registerUser, login } = require("./Controllers/User.controller");
const dashboard = require("./Controllers/Dashboard.controller");
const studentController = require("./Controllers/Student.controller");
const eventController = require("./Controllers/Event.controller");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", registerUser);

app.post("/login", login);

app.use("/admin", dashboard);
app.use("/student", studentController);
app.use("/event", eventController);
module.exports = app;
