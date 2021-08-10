"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var pumps_1 = require("../controllers/pumps");
exports.router = express_1.default.Router();
exports.router.post("/", pumps_1.createPumpReport);
exports.router.get("/", pumps_1.getPumps);
exports.router.get("/:targetId/:instanceId", pumps_1.getPumpReport);
