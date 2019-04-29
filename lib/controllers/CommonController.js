"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminAlertViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAlertViewModel");
var LELodasoftCommonModelsAdminNotificationViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminNotificationViewModel");
var LELodasoftDataAccessDbModelsAdminAlertModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminAlertModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.commonController = Reader_1.asks(function (e) { return ({
    Common_InsertDocExpire: function () {
        return e.apiClient
            .request({
            url: "/api/Common/InsertDocExpire",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Common_GetTaskStatusAlert: function () {
        return e.apiClient
            .request({
            url: "/api/Common/GetTaskStatusAlert",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsAdminAlertModel_1.LELodasoftDataAccessDbModelsAdminAlertModelIO)));
    },
    Common_GetAlerts: function (alertTypeId) {
        return e.apiClient
            .request({
            url: "/api/Common/GetAlerts/" + encodeURIComponent(io_ts_1.string.encode(alertTypeId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAlertViewModel_1.LELodasoftCommonModelsAdminAlertViewModelIO)));
    },
    Common_ClearAlert: function (alertId) {
        return e.apiClient
            .request({
            url: "/api/Common/ClearAlert/" + encodeURIComponent(io_ts_1.number.encode(alertId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Common_SendAnonymous: function (toUserId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminNotificationViewModel_1.LELodasoftCommonModelsAdminNotificationViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Common/send-notification/" + encodeURIComponent(io_ts_1.string.encode(toUserId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=CommonController.js.map