"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageReoViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageReoViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageReoController = Reader_1.asks(function (e) { return ({
    MortgageReo_GetReoById: function (reoId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/reos/" + encodeURIComponent(io_ts_1.number.encode(reoId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO));
    },
    MortgageReo_UpdateReo: function (reoId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/reos/" + encodeURIComponent(io_ts_1.number.encode(reoId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO));
    },
    MortgageReo_DeleteReo: function (reoId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/reos/" + encodeURIComponent(io_ts_1.number.encode(reoId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageReo_InsertReo: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/reos",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO));
    },
    MortgageReo_InsertAddress: function (reoId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/reos/" + encodeURIComponent(io_ts_1.number.encode(reoId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageReoController.js.map