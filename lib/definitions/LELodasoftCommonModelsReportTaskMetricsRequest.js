"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsReportTaskMetricsRequestIO = io_ts_1.type({
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    startDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    endDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    reportType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        TasksByCompany: null,
        TasksByUser: null,
        TasksByRole: null,
        TasksByRoleByUser: null,
        TasksByTaskType: null,
        TasksByTaskTypeByUser: null,
        TasksByUserByTaskType: null,
        TasksByLoanType: null,
        TasksByLoanPurpose: null,
    })),
    activeLoansOnly: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    loanPurposeFilters: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    loanStatusFilters: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
});
//# sourceMappingURL=LELodasoftCommonModelsReportTaskMetricsRequest.js.map