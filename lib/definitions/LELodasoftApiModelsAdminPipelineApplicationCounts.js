"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessModelsAppCountByFilterCriteria_1 = require("../definitions/LELodasoftDataAccessModelsAppCountByFilterCriteria");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminPipelineApplicationCountsIO = io_ts_1.type({
    byLoanStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessModelsAppCountByFilterCriteria_1.LELodasoftDataAccessModelsAppCountByFilterCriteriaIO)),
    byLoanPurpose: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessModelsAppCountByFilterCriteria_1.LELodasoftDataAccessModelsAppCountByFilterCriteriaIO)),
});
//# sourceMappingURL=LELodasoftApiModelsAdminPipelineApplicationCounts.js.map