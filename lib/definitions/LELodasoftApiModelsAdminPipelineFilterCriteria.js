"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminPipelineFilterCriteriaIO = io_ts_1.type({
    loanPurposes: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    loanStatuses: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    users: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
});
//# sourceMappingURL=LELodasoftApiModelsAdminPipelineFilterCriteria.js.map