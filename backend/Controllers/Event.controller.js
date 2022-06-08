const express = require("express");

const router = express.Router();
const crudController = require("./Crud.controller");

const Event = require("../Models/Events.model");

router.post("/", crudController(Event).post);

router.get("/", crudController(Event).get);

module.exports = router;
