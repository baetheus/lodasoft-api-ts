"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationWizardGroupViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    propertyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    groupList: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardGroupViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardGroupIdViewModel.js.map