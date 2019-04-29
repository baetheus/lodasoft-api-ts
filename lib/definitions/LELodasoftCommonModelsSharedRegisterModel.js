"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedRegisterModelIO = io_ts_1.type({
    token: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isConfirmed: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userName: io_ts_1.string,
    password: io_ts_1.string,
    confirmPassword: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedRegisterModel.js.map