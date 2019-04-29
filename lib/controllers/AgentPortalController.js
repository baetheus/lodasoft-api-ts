"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsForgotPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsForgotPasswordBindingModel");
var LELodasoftApiModelsResetPasswordBindingModel_1 = require("../definitions/LELodasoftApiModelsResetPasswordBindingModel");
var LELodasoftApiModelsSharedPortalContentViewModel_1 = require("../definitions/LELodasoftApiModelsSharedPortalContentViewModel");
var LELodasoftCommonModelsAdminPrequalDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel");
var LELodasoftCommonModelsAgentPortalAgentContact_1 = require("../definitions/LELodasoftCommonModelsAgentPortalAgentContact");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var LELodasoftCommonModelsSharedApplicationView_1 = require("../definitions/LELodasoftCommonModelsSharedApplicationView");
var LELodasoftCommonModelsSharedCallbackModel_1 = require("../definitions/LELodasoftCommonModelsSharedCallbackModel");
var LELodasoftCommonModelsSharedConfirmRegisterRequestModel_1 = require("../definitions/LELodasoftCommonModelsSharedConfirmRegisterRequestModel");
var LELodasoftCommonModelsSharedGeneratePrequalLetterRequest_1 = require("../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterRequest");
var LELodasoftCommonModelsSharedGeneratePrequalLetterResponse_1 = require("../definitions/LELodasoftCommonModelsSharedGeneratePrequalLetterResponse");
var LELodasoftCommonModelsSharedPortalLiveData_1 = require("../definitions/LELodasoftCommonModelsSharedPortalLiveData");
var LELodasoftCommonModelsSharedPortalTasks_1 = require("../definitions/LELodasoftCommonModelsSharedPortalTasks");
var LELodasoftCommonModelsSharedReferralAgent_1 = require("../definitions/LELodasoftCommonModelsSharedReferralAgent");
var LELodasoftCommonModelsSharedReferralModel_1 = require("../definitions/LELodasoftCommonModelsSharedReferralModel");
var LELodasoftCommonModelsSharedReferralView_1 = require("../definitions/LELodasoftCommonModelsSharedReferralView");
var LELodasoftCommonModelsSharedRegisterModel_1 = require("../definitions/LELodasoftCommonModelsSharedRegisterModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.agentPortalController = Reader_1.asks(function (e) { return ({
    AgentPortal_ConfirmRegistrationToken: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedConfirmRegisterRequestModel_1.LELodasoftCommonModelsSharedConfirmRegisterRequestModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ConfirmRegistrationToken",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedRegisterModel_1.LELodasoftCommonModelsSharedRegisterModelIO));
    },
    AgentPortal_ConfirmRegistration: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedRegisterModel_1.LELodasoftCommonModelsSharedRegisterModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ConfirmRegistration",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    AgentPortal_SendEmailResetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsForgotPasswordBindingModel_1.LELodasoftApiModelsForgotPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/SendEmailResetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    AgentPortal_ResetPassword: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsResetPasswordBindingModel_1.LELodasoftApiModelsResetPasswordBindingModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ResetPassword",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    AgentPortal_GetApplicationsForUser: function () {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetApplicationsForUser",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsSharedApplicationView_1.LELodasoftCommonModelsSharedApplicationViewIO)));
    },
    AgentPortal_GetReferralsForUser: function () {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetReferralsForUser",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsSharedReferralView_1.LELodasoftCommonModelsSharedReferralViewIO)));
    },
    AgentPortal_GetPortalContent: function () {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetPortalContent",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsSharedPortalContentViewModel_1.LELodasoftApiModelsSharedPortalContentViewModelIO));
    },
    AgentPortal_GetLoanDataForAppId: function (appId) {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetLoanDataForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedApplicationView_1.LELodasoftCommonModelsSharedApplicationViewIO));
    },
    AgentPortal_GetTasksforAppId: function (appId) {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetTasksForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedPortalTasks_1.LELodasoftCommonModelsSharedPortalTasksIO));
    },
    AgentPortal_GetPrequalDetail: function (appId) {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetPrequalDetailForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModel_1.LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
    },
    AgentPortal_GeneratePrequalLetter: function (appId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedGeneratePrequalLetterRequest_1.LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GeneratePrequalLetterForAppId/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedGeneratePrequalLetterResponse_1.LELodasoftCommonModelsSharedGeneratePrequalLetterResponseIO));
    },
    AgentPortal_GetAgentContactInfoForApplication: function (appId) {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/GetAgentContactInfoForApplication/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAgentPortalAgentContact_1.LELodasoftCommonModelsAgentPortalAgentContactIO));
    },
    AgentPortal_ProgressTaskStatus: function (taskId) {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ProgressTaskStatus/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
    },
    AgentPortal_UploadDocument: function (taskId, borrowerNote, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ progressStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/UploadDocument/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(borrowerNote).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    AgentPortal_GetReferralAgents: function () {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ReferralAgents",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsSharedReferralAgent_1.LELodasoftCommonModelsSharedReferralAgentIO)));
    },
    AgentPortal_ReferAFriend: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedReferralModel_1.LELodasoftCommonModelsSharedReferralModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/ReferAFriend",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    AgentPortal_RequestACallback: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsSharedCallbackModel_1.LELodasoftCommonModelsSharedCallbackModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/AgentPortal/RequestACallback",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    AgentPortal_GetLiveData: function () {
        return e.apiClient
            .request({
            url: "/api/AgentPortal/LiveData",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsSharedPortalLiveData_1.LELodasoftCommonModelsSharedPortalLiveDataIO));
    },
}); });
//# sourceMappingURL=AgentPortalController.js.map