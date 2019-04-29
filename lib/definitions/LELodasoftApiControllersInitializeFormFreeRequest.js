"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiControllersInitializeFormFreeRequestIO = io_ts_1.type({
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    last4Ssn: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    maxHeight: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    maxWidth: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftApiControllersInitializeFormFreeRequest.js.map