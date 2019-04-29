"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var utils_1 = require("../utils/utils");
exports.mortgageAddressController = Reader_1.asks(function (e) { return ({
    MortgageAddress_GetAddressById: function (addressId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/addresses/" + encodeURIComponent(io_ts_1.number.encode(addressId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
    MortgageAddress_UpdateAddress: function (addressId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/addresses/" + encodeURIComponent(io_ts_1.number.encode(addressId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
    MortgageAddress_DeleteAddress: function (addressId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/addresses/" + encodeURIComponent(io_ts_1.number.encode(addressId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=MortgageAddressController.js.map