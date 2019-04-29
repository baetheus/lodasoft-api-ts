"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO = io_ts_1.type({
    documentTemplatePageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fields: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel.js.map