"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO = io_ts_1.type({
    documentTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTemplateType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Unspecified: null, Html: null, Pdf: null })),
    documentTemplateName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    headerHtml: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    bodyHtml: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    footerHtml: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    hasPdfData: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    pdfData: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fields: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationDocumentTemplateViewModel.js.map