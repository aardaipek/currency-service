import config from "../../config";
import { BinanceService } from "../../services/binance-service";

export class BinanceController {
  async getAll(req, res) {
    try {
      const binanceService = new BinanceService();
      const result = await binanceService.getAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
