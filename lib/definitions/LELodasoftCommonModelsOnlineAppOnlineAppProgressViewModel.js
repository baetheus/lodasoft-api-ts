"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mortgageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentStatusDatetime: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    lastSuccessfulStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lastSuccessfulStatusDatetime: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    currentSessionId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    sessionCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel.js.map