import axios from "axios";
import config from "../config";

export class BinanceService {
  async getAll() {
    try {
      const result = await axios.get(config.binance.api);
      return JSON.stringify(result.data);
    } catch (err) {
      throw new Error(err);
    }
  }
}
