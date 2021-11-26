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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exchange_service_1 = __importDefault(require("../services/exchange-service"));
const binance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_service_1.default.getExchangeBinanceData();
    res.status(200).send(result);
});
const gate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_service_1.default.getExchangeGateData();
    res.status(200).send(result);
});
exports.default = { binance, gate };
//# sourceMappingURL=exchange-controller.js.map