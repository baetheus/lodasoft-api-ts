"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO = io_ts_1.type({
    emailCampaignLoanStatusTriggerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel.js.map