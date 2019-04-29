"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var LELodasoftCommonModelsLeadsProviderModelsBestReferralLead_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsBestReferralLead");
var LELodasoftCommonModelsLeadsProviderModelsLodasoftLead_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsLodasoftLead");
var LELodasoftCommonModelsLeadsProviderModelsZillowLead_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLead");
var LELodasoftCommonModelsPublicApiUserViewModel_1 = require("../definitions/LELodasoftCommonModelsPublicApiUserViewModel");
var utils_1 = require("../utils/utils");
exports.publicAPIController = Reader_1.asks(function (e) { return ({
    PublicAPI_GetUserListPrimaryRole: function (companyGuid) {
        return e.apiClient
            .request({
            url: "/api/PublicApi/GetUserListPrimaryRole/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsPublicApiUserViewModel_1.LELodasoftCommonModelsPublicApiUserViewModelIO)));
    },
    PublicAPI_GetUserList: function (companyGuid) {
        return e.apiClient
            .request({
            url: "/api/PublicApi/GetUserList/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.dictionary(io_ts_1.string, io_ts_1.string)));
    },
    PublicAPI_GetLoanPurposes: function (companyGuid) {
        return e.apiClient
            .request({
            url: "/api/PublicApi/GetLoanPurposes/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.dictionary(io_ts_1.string, io_ts_1.string)));
    },
    PublicAPI_PostLodasoftLead: function (companyGuid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLead_1.LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/PublicApi/PostLead/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    PublicAPI_PostBestReferralLead: function (companyGuid, userId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLead_1.LELodasoftCommonModelsLeadsProviderModelsBestReferralLeadIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/PublicApi/PostBestReferralLead/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    PublicAPI_PostZillowLead: function (companyGuid, userId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsProviderModelsZillowLead_1.LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/PublicApi/PostZillowLead/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    PublicAPI_PostLendingTreeLeadAsync: function (companyGuid, userId) {
        return e.apiClient
            .request({
            url: "/api/PublicApi/PostLendingTreeLead/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=PublicAPIController.js.map