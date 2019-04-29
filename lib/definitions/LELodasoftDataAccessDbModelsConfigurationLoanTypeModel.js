"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO = io_ts_1.type({
    loanTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanTypeName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mortgageAppliedForType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ VA: null, FHA: null, Conventional: null, USDARuralHousingService: null, OtherMortgage: null })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    showInOnlineApp: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    defaultForOnlineApp: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationLoanTypeModel.js.map