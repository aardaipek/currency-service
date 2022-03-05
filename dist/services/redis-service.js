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
const redis_1 = __importDefault(require("redis"));
const config_1 = __importDefault(require("../config/config"));
class RedisService {
    constructor() {
        this.redisClient = redis_1.default.createClient(config_1.default.redisConfig.redisPort);
    }
    saveCurrency(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.redisClient.on("error", (err) => {
                    console.log(err);
                });
            }
            catch (err) {
            }
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=redis-service.js.map