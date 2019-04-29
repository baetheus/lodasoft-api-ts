"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsSharedLeadPoint_1 = require("../definitions/LELodasoftApiModelsSharedLeadPoint");
var LELodasoftApiModelsSharedOnlineApplicationsModel_1 = require("../definitions/LELodasoftApiModelsSharedOnlineApplicationsModel");
var LELodasoftApiModelsSharedZillow_1 = require("../definitions/LELodasoftApiModelsSharedZillow");
var LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsSharedIntegrationsModelIO = io_ts_1.type({
    zillow: io_ts_types_1.createOptionFromNullable(LELodasoftApiModelsSharedZillow_1.LELodasoftApiModelsSharedZillowIO),
    leadPoint: io_ts_types_1.createOptionFromNullable(LELodasoftApiModelsSharedLeadPoint_1.LELodasoftApiModelsSharedLeadPointIO),
    onlineApplications: io_ts_types_1.createOptionFromNullable(LELodasoftApiModelsSharedOnlineApplicationsModel_1.LELodasoftApiModelsSharedOnlineApplicationsModelIO),
    thirdPartyCredentials: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel_1.LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsSharedIntegrationsModel.js.map