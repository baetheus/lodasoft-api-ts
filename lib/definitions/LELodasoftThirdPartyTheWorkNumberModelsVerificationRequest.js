"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower_1 = require("../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO = io_ts_1.type({
    requestType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ VOE: null, VOI: null })),
    responseFormat: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Pdf: null, Xml: null })),
    referenceNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrower: io_ts_types_1.createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower_1.LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO),
});
//# sourceMappingURL=LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest.js.map