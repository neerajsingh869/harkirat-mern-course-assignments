"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupInputZod = void 0;
const zod_1 = require("zod");
exports.SignupInputZod = zod_1.z.object({
    username: zod_1.z.string().min(10),
    password: zod_1.z.string().min(10)
});
