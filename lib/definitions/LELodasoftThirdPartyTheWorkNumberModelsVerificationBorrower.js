"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer_1 = require("../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO = io_ts_1.type({
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    middleName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    ssn: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    employer: io_ts_types_1.createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer_1.LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO),
});
//# sourceMappingURL=LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower.js.map