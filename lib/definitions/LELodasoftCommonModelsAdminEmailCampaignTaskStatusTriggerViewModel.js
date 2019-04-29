"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO = io_ts_1.type({
    emailCampaignTaskStatusTriggerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    customTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel.js.map