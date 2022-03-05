import axios from "axios";
import config from "../config/config";
import { createClient } from "redis";

export class BinanceService {
  private redisClient = createClient();
  
  async getAll() {
    try {
      await this.redisClient.on("error", (err) =>
        console.log("Redis Client Error", err)
      );
      await this.redisClient.connect();

      const redisData = await this.redisClient.get("binanceAll");
      if (redisData) {
        return redisData;
      }
      const result = await axios.get(config.binance.api);
      const data = JSON.stringify(result.data);
      await this.redisClient.setEx("binanceAll",config.redisConfig.redisDefaultExpiration, data);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
