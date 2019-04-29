"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageAssetViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAssetViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageAssetController = Reader_1.asks(function (e) { return ({
    MortgageAsset_GetAssetById: function (assetId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/assets/" + encodeURIComponent(io_ts_1.number.encode(assetId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO));
    },
    MortgageAsset_UpdateAsset: function (assetId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/assets/" + encodeURIComponent(io_ts_1.number.encode(assetId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO));
    },
    MortgageAsset_DeleteAsset: function (assetId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/assets/" + encodeURIComponent(io_ts_1.number.encode(assetId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageAsset_InsertAsset: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/assets",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO));
    },
    MortgageAsset_InsertAddress: function (assetId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/assets/" + encodeURIComponent(io_ts_1.number.encode(assetId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageAssetController.js.map