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
exports.UserController = void 0;
const errorCodes_1 = require("../objects/errorCodes");
const result_1 = require("../objects/result");
const user_service_1 = require("../services/user-service");
class UserController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body && !req.body.email && !req.body.password) {
                res.status(404).json({}, errorCodes_1.ErrorCodes.MISSING_PARAMATERS);
            }
            const userService = new user_service_1.UserService();
            const result = yield userService.loginUser(req.body.email, req.body.password);
            res.status(200).json(new result_1.SuccessResult(result));
        });
    }
    ;
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body && !req.body.email && !req.body.password) {
                res.status(404).json({}, errorCodes_1.ErrorCodes.MISSING_PARAMATERS);
            }
            const userService = new user_service_1.UserService();
            const result = yield userService.createUser(req.body.email, req.body.password);
            res.status(200).json(new result_1.SuccessResult(result));
        });
    }
    ;
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map