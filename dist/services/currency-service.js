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
exports.CurrencyService = void 0;
const config_1 = __importDefault(require("../config/config"));
const enums_1 = require("../objects/enums");
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
class CurrencyService {
    constructor() {
        this.firestore = firebase_config_1.default.firestore();
        this.currencyCollection = config_1.default.collections.currencyCollection;
    }
    saveCurrency(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = data.user;
                const pair = data.pair;
                const exchangeType = data.exchangeType == 1 ? enums_1.ExchangeType.Binance : enums_1.ExchangeType.Gate;
                const currrencyRef = this.firestore
                    .collection(this.currencyCollection)
                    .doc(user)
                    .collection(exchangeType.toString())
                    .doc(pair);
                yield currrencyRef.set(data);
                return "saved";
            }
            catch (err) {
                return err.message;
            }
        });
    }
}
exports.CurrencyService = CurrencyService;
//# sourceMappingURL=currency-service.js.map