"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO = io_ts_1.type({
    emailCampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailCampaignName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    repeatDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel.js.map