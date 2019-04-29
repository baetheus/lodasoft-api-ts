"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardGroupViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    groupId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    categoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    question: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answer: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    validate: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardGroupViewModel.js.map