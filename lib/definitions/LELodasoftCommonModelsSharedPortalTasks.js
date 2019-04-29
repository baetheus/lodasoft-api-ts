"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsSharedPortalTaskModel_1 = require("../definitions/LELodasoftCommonModelsSharedPortalTaskModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedPortalTasksIO = io_ts_1.type({
    requested: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsSharedPortalTaskModel_1.LELodasoftCommonModelsSharedPortalTaskModelIO)),
    submitted: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsSharedPortalTaskModel_1.LELodasoftCommonModelsSharedPortalTaskModelIO)),
    approved: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsSharedPortalTaskModel_1.LELodasoftCommonModelsSharedPortalTaskModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedPortalTasks.js.map