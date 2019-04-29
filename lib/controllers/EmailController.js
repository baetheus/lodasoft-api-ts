"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMessageMessageHistoryViewModel_1 = require("../definitions/LELodasoftCommonModelsMessageMessageHistoryViewModel");
var LELodasoftCommonModelsMessageMessageViewModel_1 = require("../definitions/LELodasoftCommonModelsMessageMessageViewModel");
var LELodasoftDataAccessDbModelsSharedEmailServiceModel_1 = require("../definitions/LELodasoftDataAccessDbModelsSharedEmailServiceModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.emailController = Reader_1.asks(function (e) { return ({
    Email_SendTestEmail: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsSharedEmailServiceModel_1.LELodasoftDataAccessDbModelsSharedEmailServiceModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Email/SendTestEmail",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Email_AutoDiscoverExchangeUrl: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsSharedEmailServiceModel_1.LELodasoftDataAccessDbModelsSharedEmailServiceModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Email/AutoDiscoverExchangeUrl",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.string));
    },
    Email_GetEmailsSentToBorrower: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Email/GetEmailsSentToBorrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageMessageHistoryViewModel_1.LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
    },
    Email_GetEmailsSentForApp: function (appId) {
        return e.apiClient
            .request({
            url: "/api/Email/GetEmailsSentForApp/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageMessageHistoryViewModel_1.LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
    },
    Email_GetEmailsSentForLead: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/Email/GetEmailsSentForLead/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageMessageHistoryViewModel_1.LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
    },
    Email_GetEmailsSentToAgent: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Email/GetEmailsSentToAgent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageMessageHistoryViewModel_1.LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
    },
    Email_SetEmailPriorityToRetry: function (messageId) {
        return e.apiClient
            .request({
            url: "/api/Email/SetEmailPriorityToRetry/" + encodeURIComponent(io_ts_1.number.encode(messageId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMessageMessageViewModel_1.LELodasoftCommonModelsMessageMessageViewModelIO));
    },
    Email_GetFailedEmailsSentByUser: function () {
        return e.apiClient
            .request({
            url: "/api/Email/GetFailedEmailsSentByUser",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageMessageHistoryViewModel_1.LELodasoftCommonModelsMessageMessageHistoryViewModelIO)));
    },
}); });
//# sourceMappingURL=EmailController.js.map