"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel");
var LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel");
var LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel");
var LELodasoftCommonModelsConfigurationDocumentTemplateViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.documentTemplateController = Reader_1.asks(function (e) { return ({
    DocumentTemplate_GetApplicationGlobalMergeFieldKeys: function () {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/app-global-merge-field-keys",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(io_ts_1.string)));
    },
    DocumentTemplate_GetLeadGlobalMergeFieldKeys: function () {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/lead-global-merge-field-keys",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(io_ts_1.string)));
    },
    DocumentTemplate_GetAllDocumentTemplates: function () {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplateViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO)));
    },
    DocumentTemplate_InsertDocumentTemplate: function () {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    DocumentTemplate_GetDocumentTemplateById: function (documentTemplateId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationDocumentTemplateViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO));
    },
    DocumentTemplate_UpdateDocumentTemplate: function (documentTemplateId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    DocumentTemplate_DeleteDocumentTemplate: function (documentTemplateId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    DocumentTemplate_GetDocumentTemplateFieldsById: function (documentTemplateId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()) + "/fields",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)));
    },
    DocumentTemplate_UpdateDocumentTemplateField: function (documentTemplateFieldId, parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/fields/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateFieldId).toString()) + "/update",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    DocumentTemplate_GetDocumentTemplatePagesById: function (documentTemplateId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()) + "/pages",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO)));
    },
    DocumentTemplate_UpsertDocumentTemplatePages: function (documentTemplateId, parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel_1.LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/templates/" + encodeURIComponent(io_ts_1.number.encode(documentTemplateId).toString()) + "/pages",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    DocumentTemplate_DeleteDocumentTemplatePage: function (documentTemplatePageId) {
        return e.apiClient
            .request({
            url: "/api/configuration/document-templates/pages/" + encodeURIComponent(io_ts_1.number.encode(documentTemplatePageId).toString()) + "/delete",
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=DocumentTemplateController.js.map