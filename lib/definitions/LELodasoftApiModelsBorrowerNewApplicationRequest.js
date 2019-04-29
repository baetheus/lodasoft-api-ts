"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationApplicationViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel");
var LELodasoftDataAccessDbModelsAdminBorrowerModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerNewApplicationRequestIO = io_ts_1.type({
    application: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModel_1.LELodasoftCommonModelsConfigurationApplicationViewModelIO),
    internalContactGroupNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    coBorrower: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModel_1.LELodasoftDataAccessDbModelsAdminBorrowerModelIO),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerNewApplicationRequest.js.map