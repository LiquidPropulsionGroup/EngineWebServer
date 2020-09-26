"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = app_1.default.listen(5000, "0.0.0.0", () => {
    const { port, address } = server.address();
    console.log("Server listening on:", "http://" + address + ":" + port);
});
//# sourceMappingURL=index.js.map