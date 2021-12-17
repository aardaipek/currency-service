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
exports.UserService = void 0;
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
class UserService {
    constructor() {
        this.auth = firebase_config_1.default.auth();
    }
    createUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.auth.createUserWithEmailAndPassword(email, password);
                return user;
            }
            catch (err) {
                return err.message;
            }
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.auth.signInWithEmailAndPassword(email, password);
                return user;
            }
            catch (err) {
                return err.message;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map