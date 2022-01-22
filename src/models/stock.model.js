const { Schema, model } = require("mongoose");

const stockSchema = new Schema({
  product_image: { type: String, required: true },
  product_name: { type: String, required: true },
  amc: { type: String, required: true },
  risk: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  percentage_interval: [{ type: String, required: true }],
  fund_Category: { type: Number, required: true },
  fund_size: { type: String, required: true },
  nav: { type: Number, required: true },
  return_percentage: { type: Number, required: true },
  price: { type: Number, required: true },
  symbol: { type: String, required: true },
});

const Stock = model("stock", stockSchema);

module.exports = Stock;
