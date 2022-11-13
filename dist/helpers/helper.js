"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    sendResponse(res, status, data) {
        res.status(status).json(data);
    }
}
exports.default = new Helper();
