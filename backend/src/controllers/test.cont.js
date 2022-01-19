const express = require("express");
const testModel = require("../models/test.schema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const test = await testModel.find().lean().exec();
    res.status(200).send(test);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
