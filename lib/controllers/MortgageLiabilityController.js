"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageLiabilityViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageLiabilityController = Reader_1.asks(function (e) { return ({
    MortgageLiability_GetLiabilityById: function (liabilityId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/liabilities/" + encodeURIComponent(io_ts_1.number.encode(liabilityId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO));
    },
    MortgageLiability_UpdateLiability: function (liabilityId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/liabilities/" + encodeURIComponent(io_ts_1.number.encode(liabilityId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO));
    },
    MortgageLiability_DeleteLiability: function (liabilityId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/liabilities/" + encodeURIComponent(io_ts_1.number.encode(liabilityId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageLiability_InsertLiability: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/liabilities",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO));
    },
    MortgageLiability_InsertAddress: function (liabilityId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/liabilities/" + encodeURIComponent(io_ts_1.number.encode(liabilityId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageLiabilityController.js.map