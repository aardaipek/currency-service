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
exports.RedisService = void 0;
const config_1 = __importDefault(require("../config/config"));
const redis_1 = require("redis");
class RedisService {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connect();
                return yield this.redisClient.get(key);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    setEx(key, data, expiration = config_1.default.redisConfig.redisDefaultExpiration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.redisClient.setEx(key, expiration, data);
                return true;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisClient.on("error", (err) => console.log("Redis Client Error", err));
            yield this.redisClient.connect();
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=redis-service.js.map