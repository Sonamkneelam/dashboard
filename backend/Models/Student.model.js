// Display student information such as:
// 0. Name
// 1. Roll number
// 2. Term
// 3. Current year
// 4. Contact number

const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],

      minLength: [4, "Name should have more than 4 characters"],
    },
    roll_number: {
      type: Number,
      required: [true, "Please Enter Your roll number"],
      unique: true,
    },
    term: {
      type: Number,
      required: [true, "Please Enter Your term"],
    },
    current_year: {
      type: Number,
      required: [true, "Please Enter Your Current Year"],
    },
    contact_number: {
      type: Number,
      required: [true, "Please Enter Your contact number"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
