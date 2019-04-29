"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationQATaskModelIO = io_ts_1.type({
    qaTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dueDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerTrigger: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    requestBorrower: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationQATaskModel.js.map