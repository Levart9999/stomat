"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
try {
    const { url } = await (0, app_js_1.bootstrap)();
    console.log(`server started at ${url}`);
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=server.js.map