"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResult = exports.SuccessResult = exports.Result = void 0;
class Result {
    constructor(success, data, meesage) {
        this.success = true;
        this.message = "";
        this.data = data;
        this.message = this.message;
        this.success = success;
    }
}
exports.Result = Result;
class SuccessResult extends Result {
    constructor(data = { status: true }) {
        super(true, data, '');
    }
}
exports.SuccessResult = SuccessResult;
class ErrorResult extends Result {
    constructor(message) {
        super(false, {}, message);
    }
}
exports.ErrorResult = ErrorResult;
//# sourceMappingURL=result.js.map