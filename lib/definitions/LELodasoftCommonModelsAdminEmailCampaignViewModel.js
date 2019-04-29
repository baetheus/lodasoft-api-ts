"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminAutomatedEmailViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAutomatedEmailViewModel");
var LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel");
var LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminEmailCampaignViewModelIO = io_ts_1.type({
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    repeatDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    triggers: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel_1.LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO)),
    taskStatusTriggers: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel_1.LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO)),
    automatedEmails: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminAutomatedEmailViewModel_1.LELodasoftCommonModelsAdminAutomatedEmailViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminEmailCampaignViewModel.js.map