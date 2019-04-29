"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageDependentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDependentViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageDependentController = Reader_1.asks(function (e) { return ({
    MortgageDependent_GetDependentById: function (dependentId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/dependents/" + encodeURIComponent(io_ts_1.number.encode(dependentId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO));
    },
    MortgageDependent_UpdateDependent: function (dependentId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/dependents/" + encodeURIComponent(io_ts_1.number.encode(dependentId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO));
    },
    MortgageDependent_DeleteDependent: function (dependentId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/dependents/" + encodeURIComponent(io_ts_1.number.encode(dependentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageDependent_InsertDependent: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/dependents",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageDependentController.js.map