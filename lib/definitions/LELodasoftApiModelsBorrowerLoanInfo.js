"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationApplicationViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel");
var LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerLoanInfoIO = io_ts_1.type({
    application: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModel_1.LELodasoftCommonModelsConfigurationApplicationViewModelIO),
    currentLoanInfo: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1.LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerLoanInfo.js.map