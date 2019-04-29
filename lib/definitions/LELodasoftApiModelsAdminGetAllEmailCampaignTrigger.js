"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1 = require("../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO = io_ts_1.type({
    group: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    listEmailCampaignTriggerModel: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO)),
});
//# sourceMappingURL=LELodasoftApiModelsAdminGetAllEmailCampaignTrigger.js.map