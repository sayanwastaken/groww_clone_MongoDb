const mongoose = require("mongoose");

const test = new mongoose.Schema({
  body: { type: String, required: true },
});

module.exports = mongoose.model("test", test);
