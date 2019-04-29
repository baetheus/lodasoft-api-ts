"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsAdminLookupTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminLookupTypeModel");
var LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel");
var LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    fieldName: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    comparisionType: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    compareValue: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    group: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailCampaignIdString: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    comparisionTypeString: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fieldNameString: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    listComparision: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessDbModelsAdminLookupTypeModel_1.LELodasoftDataAccessDbModelsAdminLookupTypeModelIO)),
    listEmailCampaign: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel_1.LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO)),
    listGlobalEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1.LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsAdminEmailCampaignTriggerModelView.js.map