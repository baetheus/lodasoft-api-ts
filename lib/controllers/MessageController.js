"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminMessageViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminMessageViewModel");
var LELodasoftCommonModelsMessageMessageViewModel_1 = require("../definitions/LELodasoftCommonModelsMessageMessageViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.messageController = Reader_1.asks(function (e) { return ({
    Message_GetBorrowerMessages: function (applicationId) {
        return e.apiClient
            .request({
            url: "/api/Message/GetBorrowerMessages/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    Message_GetInternalMessages: function (applicationId) {
        return e.apiClient
            .request({
            url: "/api/Message/GetInternalMessages/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    Message_GetBorrowerTaskMessages: function (loanDocTaskId) {
        return e.apiClient
            .request({
            url: "/api/Message/GetBorrowerTaskMessages/" + encodeURIComponent(io_ts_1.number.encode(loanDocTaskId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    Message_GetInternalTaskMessages: function (loanDocTaskId) {
        return e.apiClient
            .request({
            url: "/api/Message/GetInternalTaskMessages/" + encodeURIComponent(io_ts_1.number.encode(loanDocTaskId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO)));
    },
    Message_GetMessageCountSinceLastReply: function (applicationId) {
        return e.apiClient
            .request({
            url: "/api/Message/GetMessageCountSinceLastReply/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.number));
    },
    Message_PostInternalMessage: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/PostInternalMessage",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO));
    },
    Message_PostBorrowerMessage: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/PostBorrowerMessage",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminMessageViewModel_1.LELodasoftCommonModelsAdminMessageViewModelIO));
    },
    Message_InsertLeadEmailIntoQueue: function (appendEmailSignature, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageMessageViewModel_1.LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/InsertLeadEmailIntoQueue/" + encodeURIComponent(io_ts_1.boolean.encode(appendEmailSignature).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Message_InsertLeadSMSIntoQueue: function (appendSMSSignature, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageMessageViewModel_1.LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/InsertLeadSMSIntoQueue/" + encodeURIComponent(io_ts_1.boolean.encode(appendSMSSignature).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Message_InsertLoanEmailIntoQueue: function (appendEmailSignature, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageMessageViewModel_1.LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/InsertLoanEmailIntoQueue/" + encodeURIComponent(io_ts_1.boolean.encode(appendEmailSignature).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Message_InsertLoanSMSIntoQueue: function (appendSMSSignature, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageMessageViewModel_1.LELodasoftCommonModelsMessageMessageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Message/InsertLoanSMSIntoQueue/" + encodeURIComponent(io_ts_1.boolean.encode(appendSMSSignature).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=MessageController.js.map