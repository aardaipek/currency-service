import axios from "axios";
import config from "../config/config";
import { RedisService } from "./redis-service";

export class GateService {
  private redisService = new RedisService();

  async getAll() {
    try {
      const redisData = await this.redisService.get("gateAll");
      if (redisData) {
        return redisData;
      }
      const result = await axios.get(config.gate.api);
      const data = JSON.stringify(result.data);
      await this.redisService.setEx("gateAll", data);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
