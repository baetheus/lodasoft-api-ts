"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgagePhoneViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePhoneViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgagePhoneController = Reader_1.asks(function (e) { return ({
    MortgagePhone_GetPhoneById: function (phoneId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/phones/" + encodeURIComponent(io_ts_1.number.encode(phoneId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO));
    },
    MortgagePhone_UpdatePhone: function (phoneId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/phones/" + encodeURIComponent(io_ts_1.number.encode(phoneId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO));
    },
    MortgagePhone_DeletePhone: function (phoneId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/phones/" + encodeURIComponent(io_ts_1.number.encode(phoneId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=MortgagePhoneController.js.map