"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsLoginBindingModelIO = io_ts_1.type({
    email: io_ts_1.string,
    password: io_ts_1.string,
    rememberMe: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    scope: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsLoginBindingModel.js.map