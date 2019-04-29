"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var LELodasoftDataAccessDbModelsUserProfile_1 = require("../definitions/LELodasoftDataAccessDbModelsUserProfile");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    company: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    user: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO),
    aboutUsContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referralContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    showReferralTerms: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    referralTermsContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModel.js.map