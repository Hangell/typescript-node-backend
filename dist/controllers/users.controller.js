"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_services_1 = require("../services/users.services");
const HttpStatus = require("http-status");
class UsersController {
    home(req, res) {
        const users = users_services_1.default.home();
        return res.json({ error: false, status: HttpStatus.OK, data: users });
    }
}
exports.default = new UsersController();
