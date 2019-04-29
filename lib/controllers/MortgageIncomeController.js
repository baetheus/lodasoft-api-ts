"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageIncomeViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageIncomeViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageIncomeController = Reader_1.asks(function (e) { return ({
    MortgageIncome_GetIncomeById: function (incomeId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/incomes/" + encodeURIComponent(io_ts_1.number.encode(incomeId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO));
    },
    MortgageIncome_UpdateIncome: function (incomeId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/incomes/" + encodeURIComponent(io_ts_1.number.encode(incomeId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO));
    },
    MortgageIncome_DeleteIncome: function (incomeId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/incomes/" + encodeURIComponent(io_ts_1.number.encode(incomeId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageIncome_InsertIncome: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/incomes",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageIncomeController.js.map