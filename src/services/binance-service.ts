import axios from "axios";
import config from "../config/config";
import { RedisService } from "./redis-service";

export class BinanceService {
  private redisService = new RedisService();

  async getAll() {
    try {
      const redisData = await this.redisService.get("binanceAll");
      if (redisData) {
        return redisData;
      }
      const result = await axios.get(config.binance.api);
      const data = JSON.stringify(result.data);
      await this.redisService.setEx("binanceAll", data);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
