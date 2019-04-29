"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO = io_ts_1.type({
    documentTemplateFieldId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    fieldKey: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fieldType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Unspecified: null, Text: null, CheckBox: null, RadioButton: null })),
    displayName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    globalMergeFieldKey: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    defaultValue: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    visible: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    editable: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    documentTemplatePageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel.js.map