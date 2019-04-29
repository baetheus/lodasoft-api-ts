"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsLeadCreditViewModelIO = io_ts_1.type({
    leadCreditId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    creditRunDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    experianScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    equifaxScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    transUnionScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    isJoint: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    referenceNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    notes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsLeadCreditViewModel.js.map