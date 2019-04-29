"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminAgentViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAgentViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAgentAgentFullIO = io_ts_1.type({
    agent: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsAdminAgentViewModel_1.LELodasoftCommonModelsAdminAgentViewModelIO),
    portalUserName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    isEdit: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    accountStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ NotInvited: null, Invited: null, Live: null })),
});
//# sourceMappingURL=LELodasoftApiModelsAgentAgentFull.js.map