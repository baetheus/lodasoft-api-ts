"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessModelsReportTaskMetricsModelIO = io_ts_1.type({
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userFullName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurpose: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanType: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskIdentifier: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    avgTaskCompletion: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    avgBorrSubmission: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    avgBorrApproval: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessModelsReportTaskMetricsModel.js.map