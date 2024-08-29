import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisUrl = process.env.UPSTASH_REDIS_URL;

if (!redisUrl) {
  console.error("UPSTASH_REDIS_URL is not set in the environment variables.");
  process.exit(1);
}

export const redis = new Redis(redisUrl);

redis.on("error", (err) => {
  console.error("[Redis connection error]:", err);
});
