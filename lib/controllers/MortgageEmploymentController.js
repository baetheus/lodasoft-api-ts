"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var LELodasoftCommonModelsMortgageEmploymentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageEmploymentController = Reader_1.asks(function (e) { return ({
    MortgageEmployment_GetEmploymentById: function (employmentId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/employments/" + encodeURIComponent(io_ts_1.number.encode(employmentId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO));
    },
    MortgageEmployment_UpdateEmployment: function (employmentId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/employments/" + encodeURIComponent(io_ts_1.number.encode(employmentId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO));
    },
    MortgageEmployment_DeleteEmployment: function (employmentId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/employments/" + encodeURIComponent(io_ts_1.number.encode(employmentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageEmployment_InsertEmployment: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/employments",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO));
    },
    MortgageEmployment_InsertAddress: function (employmentId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/employments/" + encodeURIComponent(io_ts_1.number.encode(employmentId).toString()) + "/address",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageEmploymentController.js.map