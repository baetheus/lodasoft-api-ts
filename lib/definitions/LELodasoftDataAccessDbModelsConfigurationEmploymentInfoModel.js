"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO = io_ts_1.type({
    employementInfoId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    position: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    years: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    months: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthlyIncome: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    current: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel.js.map