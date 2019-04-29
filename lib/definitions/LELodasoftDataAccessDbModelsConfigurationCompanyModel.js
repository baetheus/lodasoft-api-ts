"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO = io_ts_1.type({
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyURL: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerURL: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentURL: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyGUID: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    address: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    logo: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    smallLogo: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    signatureLogo: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    nmls: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isTemplate: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    docEditingEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    docGenerationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    full1003Enabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    leadManagementEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineApplicationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    digitalAssetVerificationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    digitalEmploymentVerificationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    prequalGenerationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    smsAlertsEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    emailTestsEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteBorrowerCheckedByDefault: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    creditMonitoringEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    creditReportingEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    ausEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    losEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    multipleCredentialSupportEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationCompanyModel.js.map