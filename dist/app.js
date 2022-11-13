"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const router_1 = require("./routes/router");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());
    }
    routes() {
        this.app.use(router_1.default);
    }
}
exports.App = App;
exports.default = new App();
