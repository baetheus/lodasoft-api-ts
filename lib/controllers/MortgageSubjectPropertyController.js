"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageSubjectPropertyController = Reader_1.asks(function (e) { return ({
    MortgageSubjectProperty_GetSubjectPropertyById: function (subjectPropertyId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/subjectproperties/" + encodeURIComponent(io_ts_1.number.encode(subjectPropertyId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
    },
    MortgageSubjectProperty_UpdateSubjectProperty: function (subjectPropertyId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/subjectproperties/" + encodeURIComponent(io_ts_1.number.encode(subjectPropertyId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
    },
    MortgageSubjectProperty_DeleteSubjectProperty: function (subjectPropertyId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/subjectproperties/" + encodeURIComponent(io_ts_1.number.encode(subjectPropertyId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageSubjectProperty_InsertAddress: function (subjectPropertyId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/subjectproperties/" + encodeURIComponent(io_ts_1.number.encode(subjectPropertyId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageSubjectPropertyController.js.map