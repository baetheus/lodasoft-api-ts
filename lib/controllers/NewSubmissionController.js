"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsMortgageLosLoanSearchResponseModel_1 = require("../definitions/LELodasoftApiModelsMortgageLosLoanSearchResponseModel");
var LELodasoftApiModelsMortgageParseDuViewModel_1 = require("../definitions/LELodasoftApiModelsMortgageParseDuViewModel");
var LELodasoftApiModelsMortgageProcessDuResponseModel_1 = require("../definitions/LELodasoftApiModelsMortgageProcessDuResponseModel");
var LELodasoftApiModelsMortgageProcessDuViewModel_1 = require("../definitions/LELodasoftApiModelsMortgageProcessDuViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.newSubmissionController = Reader_1.asks(function (e) { return ({
    NewSubmission_LosLoanSearch: function (credentialId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                loanNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                borrowerFirstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                borrowerLastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/new-submission/los-loan-search/" + encodeURIComponent(io_ts_1.number.encode(credentialId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsMortgageLosLoanSearchResponseModel_1.LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO));
    },
    NewSubmission_ImportFromLos: function (credentialId, losIdentifier) {
        return e.apiClient
            .request({
            url: "/api/new-submission/import-from-los/" + encodeURIComponent(io_ts_1.number.encode(credentialId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(losIdentifier).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsMortgageParseDuViewModel_1.LELodasoftApiModelsMortgageParseDuViewModelIO));
    },
    NewSubmission_CreateMortgageInIntegratedLos: function (credentialId, applicationId) {
        return e.apiClient
            .request({
            url: "/api/new-submission/create-in-integrated-los/" + encodeURIComponent(io_ts_1.number.encode(credentialId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    NewSubmission_UpdateMortgageFromIntegratedLos: function (applicationId, credentialId) {
        return e.apiClient
            .request({
            url: "/api/new-submission/update-from-integrated-los/" + encodeURIComponent(io_ts_1.string.encode(credentialId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    NewSubmission_ParseDu: function () {
        return e.apiClient
            .request({
            url: "/api/new-submission/parse-du",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsMortgageParseDuViewModel_1.LELodasoftApiModelsMortgageParseDuViewModelIO));
    },
    NewSubmission_ProcessSubmission: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsMortgageProcessDuViewModel_1.LELodasoftApiModelsMortgageProcessDuViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/new-submission/process-submission",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsMortgageProcessDuResponseModel_1.LELodasoftApiModelsMortgageProcessDuResponseModelIO));
    },
}); });
//# sourceMappingURL=NewSubmissionController.js.map