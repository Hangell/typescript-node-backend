"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("./user.route");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({ message: 'Hello World 3!' });
});
router.use('/users', user_route_1.default);
exports.default = router;
