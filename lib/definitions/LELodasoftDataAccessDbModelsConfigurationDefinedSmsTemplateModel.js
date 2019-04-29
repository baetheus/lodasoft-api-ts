"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var LELodasoftDataAccessDbModelsUserProfile_1 = require("../definitions/LELodasoftDataAccessDbModelsUserProfile");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    company: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    user: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO),
    onlineAppRegistrationOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineAppRegistrationSms: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteSms: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    inviteAgentOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteAgentSms: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    requestOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    requestSms: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    reminderOverride: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    reminderSms: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationDefinedSmsTemplateModel.js.map