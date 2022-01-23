const { Router } = require("express");
const proRedisModel = require("../models/pro.redis");
const clickedModel = require("../models/clickedPro.model");
const redis = require("../config/redis");

const router = Router();

router.post("/carts", async (req, res) => {
  try {
    const products = await proRedisModel.create(req.body);
    redis.get("products", async (err, products) => {
      const pros = await proRedisModel.find().lean().exec();
      redis.set("products", JSON.stringify(pros));
      return res.status(200).send(pros);
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/clicked", async (req, res) => {
  try {
    await clickedModel.deleteMany();
    const products = await clickedModel.create(req.body);
    console.log(req.body);
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/clicked_get", async (req, res) => {
  try {
    redis.get("clicked", async function (err, clicked) {
      if (err) console.log(err.message);
      redis.flushall("SYNC");
      if (clicked) {
        const allPros = JSON.parse(clicked);

        return res.status(200).send(allPros);
      } else {
        try {
          const pros = await clickedModel.find().lean().exec();
          redis.set("products", JSON.stringify(pros));
          return res.status(200).send(pros);
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/payment", async (req, res) => {
  try {
    await proRedisModel.deleteMany();
    return res.send("deleted");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("cart_get", async (req, res) => {
  try {
    redis.get("products", async function (err, products) {
      if (err) console.log(err.message);
      redis.flushall("SYNC");
      if (products) {
        const allPros = JSON.parse(products);

        return res.status(200).send(allPros);
      } else {
        try {
          const pros = await proRedisModel.find().lean().exec();
          redis.set("products", JSON.stringify(pros));
          return res.status(200).send(pros);
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
