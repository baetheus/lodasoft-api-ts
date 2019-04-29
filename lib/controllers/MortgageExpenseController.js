"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageExpenseViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageExpenseViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageExpenseController = Reader_1.asks(function (e) { return ({
    MortgageExpense_GetExpenseById: function (expenseId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/expenses/" + encodeURIComponent(io_ts_1.number.encode(expenseId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO));
    },
    MortgageExpense_UpdateExpense: function (expenseId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/expenses/" + encodeURIComponent(io_ts_1.number.encode(expenseId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO));
    },
    MortgageExpense_DeleteExpense: function (expenseId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/expenses/" + encodeURIComponent(io_ts_1.number.encode(expenseId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageExpense_InsertExpense: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/expenses",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageExpenseController.js.map