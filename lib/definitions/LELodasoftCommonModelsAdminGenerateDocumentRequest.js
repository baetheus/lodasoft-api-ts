"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminGenerateDocumentRequestIO = io_ts_1.type({
    documentTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    replacementValues: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, io_ts_1.string)),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminGenerateDocumentRequest.js.map