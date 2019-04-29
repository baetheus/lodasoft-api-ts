"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsVerifyCodeModelIO = io_ts_1.type({
    code: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    password: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsVerifyCodeModel.js.map