"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const exchange_service_1 = __importDefault(require("../services/exchange-service"));
const binance = (req, res, next) => {
    return res.status(200).json({
        message: config_1.default.binance.api
    });
};
const gate = (req, res, next) => {
    const result = exchange_service_1.default.getExchangeData("gate");
    console.log(result);
};
exports.default = { binance, gate };
//# sourceMappingURL=exchange-controller.js.map