"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModelIO = io_ts_1.type({
    prequalGenerationSettingsId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    enabledForInternalUsers: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    enabledForAgents: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    enabledForBorrowers: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationPrequalGenerationSettingsModel.js.map