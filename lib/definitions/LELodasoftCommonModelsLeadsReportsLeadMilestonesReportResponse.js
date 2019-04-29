"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO = io_ts_1.type({
    speedToContactAttemptMinutes: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    speedToContactMinutes: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    activeLeads: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    contactRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    conversionRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    totalActiveLeads: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    totalConversionRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    totalContactRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse.js.map