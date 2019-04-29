"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationWizardDataViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dataList: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataViewModel_1.LELodasoftCommonModelsConfigurationWizardDataViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardDataIdViewModel.js.map