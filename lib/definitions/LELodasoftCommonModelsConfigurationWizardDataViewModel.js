"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardDataViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dataId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    value: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    buttonImage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardDataViewModel.js.map