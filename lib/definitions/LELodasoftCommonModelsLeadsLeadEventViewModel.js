"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsLeadEventViewModelIO = io_ts_1.type({
    leadEventId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    createdByUserId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    type: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsLeadEventViewModel.js.map