import config from "../../config";
import { GateService } from "../../services/gate-service";

export class GateController {
  async getAll(req,res) {
    try {
      const gateService = new GateService();
      const result = await gateService.getAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
