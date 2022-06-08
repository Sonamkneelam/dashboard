const express = require("express");

const router = express.Router();
const crudController = require("./Crud.controller");

const Student = require("../Models/Student.model");

router.post("/", crudController(Student).post);

router.get("/", crudController(Student).get);

module.exports = router;
