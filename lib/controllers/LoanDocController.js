"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLoanMergeDocFilesRequest_1 = require("../definitions/LELodasoftCommonModelsLoanMergeDocFilesRequest");
var LELodasoftDataAccessDbModelsAdminDocFileModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel");
var LELodasoftDataAccessDbModelsAdminLoanDocModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel");
var LELodasoftDataAccessModelsAdminBorrowerFileDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.loanDocController = Reader_1.asks(function (e) { return ({
    LoanDoc_Get: function (loanDocId) {
        return e.apiClient
            .request({
            url: "/api/LoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocModel_1.LELodasoftDataAccessDbModelsAdminLoanDocModelIO));
    },
    LoanDoc_ChangeDocumentTypeOfLoanDoc: function (loanDocId, documentTypeId) {
        return e.apiClient
            .request({
            url: "/api/LoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()) + "/ChangeDocumentType/" + encodeURIComponent(io_ts_1.number.encode(documentTypeId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    LoanDoc_RemoveLoanDoc: function (loanDocId) {
        return e.apiClient
            .request({
            url: "/api/LoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()) + "/RemoveLoanDoc",
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    LoanDoc_UpsertFile: function (loanDocId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsAdminDocFileModel_1.LELodasoftDataAccessDbModelsAdminDocFileModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/LoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()) + "/UpsertFile",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDto_1.LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
    },
    LoanDoc_MergeDocFiles: function (loanDocId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLoanMergeDocFilesRequest_1.LELodasoftCommonModelsLoanMergeDocFilesRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/LoanDoc/" + encodeURIComponent(io_ts_1.number.encode(loanDocId).toString()) + "/MergeDocFiles",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
}); });
//# sourceMappingURL=LoanDocController.js.map