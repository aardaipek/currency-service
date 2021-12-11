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
exports.GateController = void 0;
const gate_service_1 = require("../../services/gate-service");
class GateController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gateService = new gate_service_1.GateService();
                const result = yield gateService.getAll();
                res.status(200).send(result);
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
}
exports.GateController = GateController;
//# sourceMappingURL=gate-controller.js.map