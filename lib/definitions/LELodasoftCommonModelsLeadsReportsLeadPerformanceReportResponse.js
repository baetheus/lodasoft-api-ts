"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO = io_ts_1.type({
    newLeadsReceived: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    contactAttemptsCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    contactSuccessCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailsSentCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    uniqueLeadsContactedCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadsConvertedCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse.js.map