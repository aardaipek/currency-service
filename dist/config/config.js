"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const gate = {
    api: process.env.GATE_API_URL
};
const binance = {
    api: process.env.BINANCE_API_URL
};
const collections = {
    currencyCollection: process.env.CURRENCY_COLLECTION
};
const redisConfig = {
    redisPort: process.env.REDIS_PORT,
    redisDefaultExpiration: 5
};
exports.default = { gate, binance, collections, redisConfig };
//# sourceMappingURL=config.js.map