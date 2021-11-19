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
const config_1 = __importDefault(require("../config"));
const getExchangeData = (source) => __awaiter(void 0, void 0, void 0, function* () {
    const url = config_1.default[source].api;
    console.log(url);
    // try {
    //     const resp = await axios.get(url);
    //     console.log(resp.data);
    // } catch (err) {
    //     // Handle Error Here
    //     console.error(err);
    // }
});
exports.default = { getExchangeData };
//# sourceMappingURL=exchange-service.js.map