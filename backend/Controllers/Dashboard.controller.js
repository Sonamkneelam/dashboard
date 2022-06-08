const express = require("express");

const authorise = require("../MiddleWares/authorise");
const authenticate = require("../MiddleWares/authenticate");
const Student = require("../Models/Student.model");
const Event = require("../Models/Events.model");
const router = express.Router();

router.get(
  "/dashboard",
  authenticate,
  authorise("admin"),
  async (req, res, next) => {
    let student = await Student.find().lean().exec();
    let event = await Event.find().lean().exec();
    return res.status(200).send({ student: student, event: event });
  }
);

module.exports = router;
