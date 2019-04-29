"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageEmailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmailViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageEmailController = Reader_1.asks(function (e) { return ({
    MortgageEmail_GetEmailById: function (emailId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/emails/" + encodeURIComponent(io_ts_1.number.encode(emailId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO));
    },
    MortgageEmail_UpdateEmail: function (emailId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/emails/" + encodeURIComponent(io_ts_1.number.encode(emailId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO));
    },
    MortgageEmail_DeleteEmail: function (emailId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/emails/" + encodeURIComponent(io_ts_1.number.encode(emailId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=MortgageEmailController.js.map