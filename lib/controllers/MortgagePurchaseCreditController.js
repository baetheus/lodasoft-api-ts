"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgagePurchaseCreditController = Reader_1.asks(function (e) { return ({
    MortgagePurchaseCredit_GetPurchaseCreditById: function (purchaseCreditId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/purchasecredits/" + encodeURIComponent(io_ts_1.number.encode(purchaseCreditId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
    },
    MortgagePurchaseCredit_UpdatePurchaseCredit: function (purchaseCreditId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/purchasecredits/" + encodeURIComponent(io_ts_1.number.encode(purchaseCreditId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
    },
    MortgagePurchaseCredit_DeletePurchaseCredit: function (purchaseCreditId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/purchasecredits/" + encodeURIComponent(io_ts_1.number.encode(purchaseCreditId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgagePurchaseCredit_InsertPurchaseCredit: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/purchasecredits",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
    },
}); });
//# sourceMappingURL=MortgagePurchaseCreditController.js.map