"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dataId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    data: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    groupId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    group: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    valid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    tree: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    questionId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    startUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    postUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answersModelJSON: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel.js.map