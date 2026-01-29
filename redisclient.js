const { createClient } = require("redis");

const client = createClient({
  url: "redis://localhost:6379", // change if needed
});

client.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
  await client.connect();
  console.log("✅ Redis connected");
})();

module.exports = client;
