"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersInitializeFormFreeRequest_1 = require("../definitions/LELodasoftApiControllersInitializeFormFreeRequest");
var LELodasoftApiModelsBorrowerPortalBorrowerMessageModel_1 = require("../definitions/LELodasoftApiModelsBorrowerPortalBorrowerMessageModel");
var LELodasoftApiModelsForgotPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsForgotPasswordBindingModel");
var LELodasoftApiModelsResetPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsResetPasswordBindingModel");
var LELodasoftApiModelsSharedPortalContentViewModel_1 = require("../definitions/LELodasoftApiModelsSharedPortalContentViewModel");
var LELodasoftCommonModelsAdminMessageViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminMessageViewModel");
var LELodasoftCommonModelsAdminPrequalDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel");
var LELodasoftCommonModelsBorrowerPortalBorrowerContact_1 = require("../definitions/LELodasoftCommonModelsBorrowerPortalBorrowerContact");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var LELodasoftCommonModelsSharedApplicationView_1 = require("../definitions/LELodasoftCommonModelsSharedApplicationView");
var LELodasoftCommonModelsSharedCallbackModel_1 = require("../definitions/LELodasoftCommonModelsSharedCallbackModel");
var LELodasoftCommonModelsSharedConfirmRegisterRequestModel_1 = require("../definitions/LELodasoftCommonModelsSharedConfirmRegisterRequestModel");
var LELodasoftCommonModelsSharedCreateAccountModel_1 = require("../definitions/LELodasoftCommonModelsSharedCreateAccountModel");
var LELodasoftCommonModelsSharedCreateAccountResponseModel_1 = require("../definitions/LELodasoftCommonModelsSharedCreateAccountResponseModel");
var LELodasoftCommonModelsSharedGeneratePrequalLetterRequest_1 = require("../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterRequest");
var LELodasoftCommonModelsSharedGeneratePrequalLetterResponse_1 = require("../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterResponse");
var LELodasoftCommonModelsSharedPortalLiveData_1 = require("../definitions/LELodasoftCommonModelsSharedPortalLiveData");
var LELodasoftCommonModelsSharedPortalTasks_1 = require("../definitions/LELodasoftCommonModelsSharedPortalTasks");
var LELodasoftCommonModelsSharedReferralAgent_1 = require("../definitions/LELodasoftCommonModelsSharedReferralAgent");
var LELodasoftCommonModelsSharedReferralModel_1 = require("../definitions/LELodasoftCommonModelsSharedReferralModel");
var LELodasoftCommonModelsSharedRegisterModel_1 = require("../definitions/LELodasoftCommonModelsSharedRegisterModel");
var LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1 = require("../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.borrowerPortalController = Reader_1.asks(function (e) { return ({
    BorrowerPortal_CreateAccount: function (companyGuid, userGuid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedCreateAccountModel_1.LELodasoftCommonModelsSharedCreateAccountModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/CreateAccount/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userGuid).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedCreateAccountResponseModel_1.LELodasoftCommonModelsSharedCreateAccountResponseModelIO));
    },
    BorrowerPortal_ConfirmRegistrationToken: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel_1.LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ConfirmRegistrationToken",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedRegisterModel_1.LELodasoftCommonModelsSharedRegisterModelIO));
    },
    BorrowerPortal_ConfirmRegistration: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedRegisterModel_1.LELodasoftCommonModelsSharedRegisterModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ConfirmRegistration",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_GetApplicationsForUser: function () {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetApplicationsForUser",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsSharedApplicationView_1.LELodasoftCommonModelsSharedApplicationViewIO)));
    },
    BorrowerPortal_GetPortalContent: function () {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetPortalContent",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsSharedPortalContentViewModel_1.LELodasoftApiModelsSharedPortalContentViewModelIO));
    },
    BorrowerPortal_GetLoanDataForAppId: function (appId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetLoanDataForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedApplicationView_1.LELodasoftCommonModelsSharedApplicationViewIO));
    },
    BorrowerPortal_GetTasksforAppId: function (appId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetTasksforAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedPortalTasks_1.LELodasoftCommonModelsSharedPortalTasksIO));
    },
    BorrowerPortal_GetPrequalDetail: function (appId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetPrequalDetailForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModel_1.LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
    },
    BorrowerPortal_GeneratePrequalLetter: function (appId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest_1.LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GeneratePrequalLetterForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedGeneratePrequalLetterResponse_1.LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO));
    },
    BorrowerPortal_SendEmailResetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsForgotPasswordBindingModel_1.LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/SendEmailResetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_ResetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsResetPasswordBindingModel_1.LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ResetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    BorrowerPortal_GetBorrowerContactInfoForApplication: function (appId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetBorrowerContactInfoForApplication/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsBorrowerPortalBorrowerContact_1.LELodasoftCommonModelsBorrowerPortalBorrowerContactIO));
    },
    BorrowerPortal_GetMessages: function (applicationId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetMessages/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    BorrowerPortal_GetTaskMessages: function (loanDocTaskId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/GetTaskMessages/" + encodeURIComponent(io_ts_1.number.encode(loanDocTaskId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    BorrowerPortal_PostMessage: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerPortalBorrowerMessageModel_1.LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/PostMessage",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_ProgressTaskStatus: function (taskId) {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ProgressTaskStatus/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
    },
    BorrowerPortal_UploadDocument: function (taskId, borrowerNote, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ progressStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/UploadDocument/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(borrowerNote).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_GetReferralAgents: function () {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ReferralAgents",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsSharedReferralAgent_1.LELodasoftCommonModelsSharedReferralAgentIO)));
    },
    BorrowerPortal_ReferAFriend: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedReferralModel_1.LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/ReferAFriend",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_RequestACallback: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedCallbackModel_1.LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/RequestACallback",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    BorrowerPortal_InitializeFormFree: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersInitializeFormFreeRequest_1.LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/InitializeFormFree",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1.LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
    },
    BorrowerPortal_GetUrgentLiveData: function () {
        return e.apiClient
            .request({
            url: "/api/BorrowerPortal/LiveData",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedPortalLiveData_1.LELodasoftCommonModelsSharedPortalLiveDataIO));
    },
}); });
//# sourceMappingURL=BorrowerPortalController.js.map