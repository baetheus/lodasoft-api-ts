"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLoanCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanCreditViewModel");
var LELodasoftCommonModelsThirdPartyCreditCreditRequestModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyCreditCreditRequestModel");
var LELodasoftCommonModelsThirdPartyCreditCreditResponseModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyCreditCreditResponseModel");
var LELodasoftDataAccessDbModelsConfigurationCreditModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCreditModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.creditInfoController = Reader_1.asks(function (e) { return ({
    CreditInfo_PullCreditReport: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsThirdPartyCreditCreditRequestModel_1.LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/CreditInfo/pull-report",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsThirdPartyCreditCreditResponseModel_1.LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO));
    },
    CreditInfo_PullCreditReportHistory: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/CreditInfo/history/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLoanCreditViewModel_1.LELodasoftCommonModelsLoanCreditViewModelIO)));
    },
    CreditInfo_UpsertCreditInfo: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLoanCreditViewModel_1.LELodasoftCommonModelsLoanCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/CreditInfo/UpsertCreditInfo",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCreditModel_1.LELodasoftDataAccessDbModelsConfigurationCreditModelIO));
    },
    CreditInfo_DeleteCreditModel: function (creditInfoId) {
        return e.apiClient
            .request({
            url: "/api/CreditInfo/" + encodeURIComponent(io_ts_1.number.encode(creditInfoId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=CreditInfoController.js.map