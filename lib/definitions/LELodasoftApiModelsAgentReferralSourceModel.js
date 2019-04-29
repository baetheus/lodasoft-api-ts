"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAgentReferralSourceModelIO = io_ts_1.type({
    agentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    orgName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsAgentReferralSourceModel.js.map