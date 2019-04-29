"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsFileExportDocumentModel_1 = require("../definitions/LELodasoftApiModelsFileExportDocumentModel");
var LELodasoftCommonModelsAdminTrackingViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminTrackingViewModel");
var LELodasoftCommonModelsLoanExportDocFilesRequest_1 = require("../definitions/LELodasoftCommonModelsLoanExportDocFilesRequest");
var LELodasoftDataAccessDbModelsAdminDocFileModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel");
var LELodasoftDataAccessModelsAdminBorrowerFileDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.fileController = Reader_1.asks(function (e) { return ({
    File_TrackingFile: function (guid) {
        return e.apiClient
            .request({
            url: "/api/File/TrackingFile/" + encodeURIComponent(io_ts_1.string.encode(guid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminTrackingViewModel_1.LELodasoftCommonModelsAdminTrackingViewModelIO)));
    },
    File_GetDocFile: function (guid) {
        return e.apiClient
            .request({
            url: "/api/File/GetDocFile/" + encodeURIComponent(io_ts_1.string.encode(guid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminDocFileModel_1.LELodasoftDataAccessDbModelsAdminDocFileModelIO));
    },
    File_RemoveFile: function (guid) {
        return e.apiClient
            .request({
            url: "/api/File/RemoveFile/" + encodeURIComponent(io_ts_1.string.encode(guid).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminDocFileModel_1.LELodasoftDataAccessDbModelsAdminDocFileModelIO));
    },
    File_UpsertFileFromTask: function (taskId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ autoTransition: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/File/UpsertFileFromTask/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDto_1.LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
    },
    File_UpsertFileFromLoanDoc: function (loanDocId) {
        return e.apiClient
            .request({
            url: "/api/File/UpsertFileFromLoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDto_1.LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
    },
    File_GetFileForExport: function (appId) {
        return e.apiClient
            .request({
            url: "/api/File/GetFileForExport/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsFileExportDocumentModel_1.LELodasoftApiModelsFileExportDocumentModelIO)));
    },
    File_DownloadFile: function (fileGuid, downloadUserId) {
        return e.apiClient
            .request({
            url: "/api/File/DownloadFile/" + encodeURIComponent(io_ts_1.string.encode(fileGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(downloadUserId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    File_ViewFile: function (fileGuid, userId) {
        return e.apiClient
            .request({
            url: "/api/File/ViewFile/" + encodeURIComponent(io_ts_1.string.encode(fileGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    File_ExportFile: function (asPDF, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLoanExportDocFilesRequest_1.LELodasoftCommonModelsLoanExportDocFilesRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/File/ExportFile/" + encodeURIComponent(io_ts_1.boolean.encode(asPDF).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    File_ConvertToPdf: function (fileGuid) {
        return e.apiClient
            .request({
            url: "/api/File/convert-to-pdf/" + encodeURIComponent(io_ts_1.string.encode(fileGuid).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.string));
    },
}); });
//# sourceMappingURL=FileController.js.map