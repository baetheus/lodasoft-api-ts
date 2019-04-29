"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel");
var LELodasoftThirdPartyFormFreeModelsLiteAccountInfo_1 = require("../definitions/LELodasoftThirdPartyFormFreeModelsLiteAccountInfo");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.formFreeController = Reader_1.asks(function (e) { return ({
    FormFree_GetFormFreeHistory: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                loanId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/form-free/history",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel_1.LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)));
    },
    FormFree_GetLiteAccountInfo: function (transactionId) {
        return e.apiClient
            .request({
            url: "/api/form-free/" + encodeURIComponent(io_ts_1.string.encode(transactionId).toString()) + "/lite",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftThirdPartyFormFreeModelsLiteAccountInfo_1.LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO)));
    },
    FormFree_UpgradeVoaRequest: function (transactionId) {
        return e.apiClient
            .request({
            url: "/api/form-free/" + encodeURIComponent(io_ts_1.string.encode(transactionId).toString()) + "/upgrade",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel_1.LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO));
    },
    FormFree_LinkHistoryToBorrower: function (historyId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/form-free/history/" + encodeURIComponent(io_ts_1.number.encode(historyId).toString()) + "/link-to-borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel_1.LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)));
    },
    FormFree_InviteBorrower: function (loanId, borrowerId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ requestType: io_ts_types_1.createOptionFromNullable(io_ts_1.string) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/form-free/invite/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=FormFreeController.js.map