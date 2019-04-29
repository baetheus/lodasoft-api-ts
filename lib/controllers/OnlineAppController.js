"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersInitializeFormFreeRequest_1 = require("../definitions/LELodasoftApiControllersInitializeFormFreeRequest");
var LELodasoftApiModelsBorrowerApplicationViewModel_1 = require("../definitions/LELodasoftApiModelsBorrowerApplicationViewModel");
var LELodasoftApiModelsOnlineAppFeatureFlags_1 = require("../definitions/LELodasoftApiModelsOnlineAppFeatureFlags");
var LELodasoftCommonModelsConfigurationApplicationViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel");
var LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel");
var LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel");
var LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest_1 = require("../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest");
var LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse_1 = require("../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse");
var LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel_1 = require("../definitions/LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel");
var LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel");
var LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1 = require("../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.onlineAppController = Reader_1.asks(function (e) { return ({
    OnlineApp_GetFeatureFlags: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/online-app/feature-flags/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsOnlineAppFeatureFlags_1.LELodasoftApiModelsOnlineAppFeatureFlagsIO));
    },
    OnlineApp_GetLoanTypes: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/online-app/loantypes/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)));
    },
    OnlineApp_GetApplicationViewModel: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/online-app/get-application/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationApplicationViewModel_1.LELodasoftCommonModelsConfigurationApplicationViewModelIO));
    },
    OnlineApp_UpdateLoanType: function (loanId, loanTypeId) {
        return e.apiClient
            .request({
            url: "/api/online-app/loantype/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(loanTypeId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerApplicationViewModel_1.LELodasoftApiModelsBorrowerApplicationViewModelIO));
    },
    OnlineApp_GetStatus: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/online-app/status/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel_1.LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
    },
    OnlineApp_UpdateStatus: function (loanId, mortgageId, currentStatusId) {
        return e.apiClient
            .request({
            url: "/api/online-app/status/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(currentStatusId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel_1.LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
    },
    OnlineApp_SubmitOnlineApp: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/online-app/submit-app/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    OnlineApp_CreateBorrowerAccountAndMortgage: function (companyGuid, parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest_1.LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/online-app/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/CreateBorrowerAndApplication",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse_1.LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO));
    },
    OnlineApp_GetAllWizardConfigs: function (companyGuid) {
        return e.apiClient
            .request({
            url: "/api/online-app/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO)));
    },
    OnlineApp_GetExtractedWizardConfigById: function (companyGuid, wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/online-app/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/extracted",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
    },
    OnlineApp_InitializeFormFreeByCompanyGuid: function (companyGuid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersInitializeFormFreeRequest_1.LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/online-app/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/InitializeFormFree",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1.LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
    },
    OnlineApp_InitializeFormFree: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersInitializeFormFreeRequest_1.LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/online-app/InitializeFormFree/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1.LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
    },
    OnlineApp_InitializeFormFreeForBorrower: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/online-app/InitializeFormFreeForBorrower/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1.LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
    },
    OnlineApp_MarkFormFreeForBorrowerComplete: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/online-app/MarkFormFreeForBorrowerComplete/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=OnlineAppController.js.map