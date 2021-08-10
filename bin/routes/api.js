"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var users_1 = require("./users");
var pumps_1 = require("./pumps");
var instances_1 = require("./instances");
exports.app = express_1.default();
exports.app.use("/users", users_1.router);
exports.app.use("/pumps", pumps_1.router);
exports.app.use("/instances", instances_1.router);
