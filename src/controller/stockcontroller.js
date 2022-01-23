const express = require("express");

const router = express.Router();

const Stock = require("../models/stock.model");

// router.post("/", async (req, res) => {
//     try{
//         const stock = await Stock.create(req.body);
//         res.status(201).send({ product: stock });

//     }
//     catch(err){
//         res.status(500).send(err)
//     }
 
// });

router.get("/", async (req, res) => {
    try{
        const stock = await Stock.find().lean().exec();
        res.status(200).send({ product: stock });

    }
    catch(err){
        res.status(500).send(err)
    }
 
});


module.exports = router;
