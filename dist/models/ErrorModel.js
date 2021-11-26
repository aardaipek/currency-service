"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(name, httpCode, description) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.httpCode = httpCode;
        Error.captureStackTrace(this);
    }
}
exports.default = { BaseError };
//# sourceMappingURL=ErrorModel.js.map