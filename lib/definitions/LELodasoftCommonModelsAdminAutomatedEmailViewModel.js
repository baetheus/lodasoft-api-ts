"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminAutomatedEmailViewModelIO = io_ts_1.type({
    automatedEmailId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    delayDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    daysOfWeekToSend: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    timeOfDayToSend: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    from: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    sendFromLoanContact: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    to: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    cc: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    bcc: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    subject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    appendLoanContactEmailSignature: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminAutomatedEmailViewModel.js.map