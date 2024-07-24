"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = bootstrap;
const core_1 = require("@mikro-orm/core");
const express_1 = __importDefault(require("express"));
function bootstrap() {
    return __awaiter(this, arguments, void 0, function* (port = 3000) {
        const orm = yield core_1.MikroORM.init();
        const app = (0, express_1.default)();
        app.use((req, res, next) => {
            core_1.RequestContext.create(orm.em, next);
        });
        process.on('SIGINT', () => __awaiter(this, void 0, void 0, function* () {
            yield orm.close();
            process.exit(0);
        }));
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
        return { app, url: `http://localhost:${port}` };
    });
}
//# sourceMappingURL=app.js.map