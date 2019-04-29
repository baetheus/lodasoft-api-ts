"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationSendTestSmsRequest_1 = require("../definitions/LELodasoftCommonModelsConfigurationSendTestSmsRequest");
var LELodasoftCommonModelsMessageSendSmsBetweenModel_1 = require("../definitions/LELodasoftCommonModelsMessageSendSmsBetweenModel");
var LELodasoftCommonModelsMessageSendSmsViewModel_1 = require("../definitions/LELodasoftCommonModelsMessageSendSmsViewModel");
var LELodasoftCommonModelsMessageSmsHistoryViewModel_1 = require("../definitions/LELodasoftCommonModelsMessageSmsHistoryViewModel");
var LELodasoftCommonModelsMessageSmsSearchBorrowerRequest_1 = require("../definitions/LELodasoftCommonModelsMessageSmsSearchBorrowerRequest");
var LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.smsController = Reader_1.asks(function (e) { return ({
    Sms_SendTestSms: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsConfigurationSendTestSmsRequest_1.LELodasoftCommonModelsConfigurationSendTestSmsRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Sms/SendTestSms",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Sms_SendSms: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageSendSmsViewModel_1.LELodasoftCommonModelsMessageSendSmsViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Sms/send-sms",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Sms_GetBetween: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageSendSmsBetweenModel_1.LELodasoftCommonModelsMessageSendSmsBetweenModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Sms/get-between",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMessageSmsHistoryViewModel_1.LELodasoftCommonModelsMessageSmsHistoryViewModelIO)));
    },
    Sms_GetBorrowerInfo: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequest_1.LELodasoftCommonModelsMessageSmsSearchBorrowerRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Sms/get-borrower-info",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
    },
    Sms_ReceiveSms: function (companyGuid) {
        return e.apiClient
            .request({
            url: "/api/Sms/receive-sms/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=SmsController.js.map