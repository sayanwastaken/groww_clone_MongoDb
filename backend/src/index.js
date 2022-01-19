const express = require("express");

const app = express();
const testController = require("./controllers/test.cont");
app.use(express.json());

app.use("/tests", testController);

module.exports = app;
