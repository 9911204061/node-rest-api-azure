const redisClient = require("./redisclient");

async function storeData() {
  // Store string
  await redisClient.set("username", "Arvind");

  // Store with expiry (TTL - 60 seconds)
  await redisClient.setEx("session_token", 60, "abc123");

  // Get data
  const username = await redisClient.get("username");
  console.log("Username:", username);
}

storeData();
