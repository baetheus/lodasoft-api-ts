"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedLoanContactIO = io_ts_1.type({
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    avatarUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedLoanContact.js.map