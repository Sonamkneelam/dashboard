const express = require("express");
const { registerUser, login } = require("./Controllers/User.controller");
const dashboard = require("./Controllers/Dashboard.controller");
const studentController = require("./Controllers/Student.controller");
const eventController = require("./Controllers/Event.controller");
var cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", registerUser);

app.post("/login", login);

app.use("/admin", dashboard);
app.use("/student", studentController);
app.use("/event", eventController);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "../frontend/build/index.html"));
});
module.exports = app;
