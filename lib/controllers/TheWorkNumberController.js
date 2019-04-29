"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest_1 = require("../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest");
var LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse_1 = require("../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.theWorkNumberController = Reader_1.asks(function (e) { return ({
    TheWorkNumber_RequestVerification: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest_1.LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/twn/verification",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse_1.LELodasoftThirdPartyTheWorkNumberModelsVerificationResponseIO));
    },
}); });
//# sourceMappingURL=TheWorkNumberController.js.map