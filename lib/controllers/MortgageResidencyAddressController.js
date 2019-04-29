"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageResidencyAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageResidencyAddressController = Reader_1.asks(function (e) { return ({
    MortgageResidencyAddress_GetResidencyAddressById: function (residencyAddressId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/residencyaddresses/" + encodeURIComponent(io_ts_1.number.encode(residencyAddressId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
    },
    MortgageResidencyAddress_UpdateResidencyAddress: function (residencyAddressId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/residencyaddresses/" + encodeURIComponent(io_ts_1.number.encode(residencyAddressId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
    },
    MortgageResidencyAddress_DeleteResidencyAddress: function (residencyAddressId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/residencyaddresses/" + encodeURIComponent(io_ts_1.number.encode(residencyAddressId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageResidencyAddress_InsertResidencyAddress: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/residencyaddresses",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
    },
    MortgageResidencyAddress_InsertAddress: function (residencyAddressId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/residencyaddresses/" + encodeURIComponent(io_ts_1.number.encode(residencyAddressId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageResidencyAddressController.js.map