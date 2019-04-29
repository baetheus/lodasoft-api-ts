"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO = io_ts_1.type({
    stakingOrderId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    company: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    docType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    associate: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsAdminStackingOrderModel.js.map