"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminGenerateDocumentRequest_1 = require("../definitions/LELodasoftCommonModelsAdminGenerateDocumentRequest");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.generatedDocumentController = Reader_1.asks(function (e) { return ({
    GeneratedDocument_GenerateDocument: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminGenerateDocumentRequest_1.LELodasoftCommonModelsAdminGenerateDocumentRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/generated-documents",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.string));
    },
}); });
//# sourceMappingURL=GeneratedDocumentController.js.map