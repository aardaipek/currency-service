import axios from "axios";
import config from "../config/config";

export class GateService {
  async getAll() {
    try {
      const result = await axios.get(config.gate.api);
      return JSON.stringify(result.data);
    } catch (err) {
      throw new Error(err);
    }
  }
}
