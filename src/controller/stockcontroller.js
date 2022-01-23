const express = require("express");
const stockModel = require("../models/stock.model");
const prodTemp = require("../models/pro.redis");

const router = express.Router();

const redis = require("../config/redis");

router.get("/", async (req, res) => {
  try {
    const stock = await stockModel.find().lean().exec();
    res.status(200).send({ product: stock });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
