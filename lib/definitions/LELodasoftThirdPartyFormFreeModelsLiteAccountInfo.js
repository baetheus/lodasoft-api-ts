"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO = io_ts_1.type({
    accountId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ DDA: null, SDA: null, INV: null, OLA: null })),
    accountName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountHolder: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fiName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fiAccountType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fiPlanName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    balance: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    balanceDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftThirdPartyFormFreeModelsLiteAccountInfo.js.map