"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminEmailTemplateImageViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsEmailDefinedEmailTemplateViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppRegistrationOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineAppRegistrationSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppRegistrationEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppStartedOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineAppStartedSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppStartedEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppSubmissionOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineAppSubmissionSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    onlineAppSubmissionEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteAgentOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteAgentSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteAgentEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    requestOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    requestSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    requestEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    reminderOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    reminderSubject: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    reminderEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    images: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminEmailTemplateImageViewModel_1.LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsEmailDefinedEmailTemplateViewModel.js.map