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
exports.BinanceService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const redis_1 = require("redis");
class BinanceService {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.redisClient.on("error", (err) => console.log("Redis Client Error", err));
                yield this.redisClient.connect();
                const redisData = yield this.redisClient.get("binanceAll");
                if (redisData) {
                    return redisData;
                }
                const result = yield axios_1.default.get(config_1.default.binance.api);
                const data = JSON.stringify(result.data);
                yield this.redisClient.setEx("binanceAll", config_1.default.redisConfig.redisDefaultExpiration, data);
                return data;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.BinanceService = BinanceService;
//# sourceMappingURL=binance-service.js.map