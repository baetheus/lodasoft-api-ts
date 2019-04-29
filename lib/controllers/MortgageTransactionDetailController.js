"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel");
var LELodasoftCommonModelsMortgageTransactionDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageTransactionDetailController = Reader_1.asks(function (e) { return ({
    MortgageTransactionDetail_GetTransactionDetailById: function (transactionDetailId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/transactiondetails/" + encodeURIComponent(io_ts_1.number.encode(transactionDetailId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
    },
    MortgageTransactionDetail_UpdateTransactionDetail: function (transactionDetailId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/transactiondetails/" + encodeURIComponent(io_ts_1.number.encode(transactionDetailId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
    },
    MortgageTransactionDetail_DeleteTransactionDetail: function (transactionDetailId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/transactiondetails/" + encodeURIComponent(io_ts_1.number.encode(transactionDetailId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: function (transactionDetailId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/transactiondetails/" + encodeURIComponent(io_ts_1.number.encode(transactionDetailId).toString()) + "/purchasecredits",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO)));
    },
    MortgageTransactionDetail_InsertPurchaseCredit: function (transactionDetailId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/transactiondetails/" + encodeURIComponent(io_ts_1.number.encode(transactionDetailId).toString()) + "/purchasecredits",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModel_1.LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageTransactionDetailController.js.map