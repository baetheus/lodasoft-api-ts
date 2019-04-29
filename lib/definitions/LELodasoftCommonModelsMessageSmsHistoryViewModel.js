"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMessageSmsHistoryViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    from: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    to: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    body: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    direction: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Unspecified: null, Outbound: null, Inbound: null })),
    smsMessageSid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    messageSid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountSid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMessageSmsHistoryViewModel.js.map