"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsDemoRequestDemoViewModelIO = io_ts_1.type({
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    message: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsDemoRequestDemoViewModel.js.map