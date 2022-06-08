// Display Event Information such as:
// 0. Event Name
// 1. Event Information url
// 2. Start date
// 3. End date
// 4. Registration url

const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      required: [true, "Please Enter Event Name"],

      
    },
    event_url: {
      type: String,
      required: [true, "Please Enter Event Url"],
    },
    registration_url: {
      type: String,
      required: [true, "Please Enter Registration Url"],
    },
    start_date: {
      type: String,
      required: [true, "Please Enter Start Date"],
    },
    end_date: {
      type: String,
      required: [true, "Please Enter End Date"],
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
