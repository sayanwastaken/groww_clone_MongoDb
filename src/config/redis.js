const redis = require("redis");

const client = redis.createClient();
client.on("error", function (err) {
  console.error(err.message);
});

module.exports = client;
