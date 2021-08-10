"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var instances_1 = require("../controllers/instances");
exports.router = express_1.default.Router();
exports.router.get("/", instances_1.getInstances);
exports.router.get("/:id", instances_1.getInstance);
exports.router.post("/", instances_1.createInstance);
exports.router.put("/:id", instances_1.updateInstance);
exports.router.delete("/:id", instances_1.deleteInstance);
