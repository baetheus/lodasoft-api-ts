"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO = io_ts_1.type({
    leadEmploymentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    position: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    employmentLengthYears: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthlyIncome: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    isCurrentEmployer: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    notes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsLeadEmploymentViewModel.js.map