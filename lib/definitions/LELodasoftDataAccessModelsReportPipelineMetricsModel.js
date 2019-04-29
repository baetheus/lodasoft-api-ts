"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessModelsReportPipelineMetricsModelIO = io_ts_1.type({
    loanStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    primaryRoleUser: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    primaryBorrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurpose: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftDataAccessModelsReportPipelineMetricsModel.js.map