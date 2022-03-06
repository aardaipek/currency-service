import config from "../config/config";
import { createClient } from "redis";

export class RedisService {
  private redisClient = createClient();

  async get(key) {
    try {
      await this.connect();
      return await this.redisClient.get(key);
    } catch (err) {
      console.log(err);
    }
  }

  async setEx(
    key,
    data,
    expiration = config.redisConfig.redisDefaultExpiration
  ) {
    try {
      await this.redisClient.setEx(key, expiration, data);
      return true;
    } catch (err) {
      console.log(err);
    }
  }

  async connect() {
    await this.redisClient.on("error", (err) =>
      console.log("Redis Client Error", err)
    );
    await this.redisClient.connect();
  }
}
