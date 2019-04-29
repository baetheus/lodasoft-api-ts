"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO = io_ts_1.type({
    checkListItemId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    checkListName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatus: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationChecklistItemModel.js.map