"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceController = void 0;
const binance_service_1 = require("../../services/binance-service");
class BinanceController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const binanceService = new binance_service_1.BinanceService();
                const result = yield binanceService.getAll();
                res.status(200).send(result);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
}
exports.BinanceController = BinanceController;
//# sourceMappingURL=binance-controller.js.map