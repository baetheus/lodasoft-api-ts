"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardValidViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    min: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    max: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    required: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardValidViewModel.js.map