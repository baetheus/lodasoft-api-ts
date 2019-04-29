"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO = io_ts_1.type({
    setupRefernceId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    tableName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    templateCompanyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    templateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel.js.map