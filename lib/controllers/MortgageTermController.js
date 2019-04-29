"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageMortgageTermViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageTermController = Reader_1.asks(function (e) { return ({
    MortgageTerm_GetMortgageTermById: function (mortgageTermId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/mortgageterms/" + encodeURIComponent(io_ts_1.number.encode(mortgageTermId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
    },
    MortgageTerm_UpdateMortgageTerm: function (mortgageTermId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/mortgageterms/" + encodeURIComponent(io_ts_1.number.encode(mortgageTermId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
    },
    MortgageTerm_DeleteMortgageTerm: function (mortgageTermId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/mortgageterms/" + encodeURIComponent(io_ts_1.number.encode(mortgageTermId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=MortgageTermController.js.map