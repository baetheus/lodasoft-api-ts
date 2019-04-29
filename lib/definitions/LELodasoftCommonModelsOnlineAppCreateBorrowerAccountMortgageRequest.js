"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO = io_ts_1.type({
    companyGuid: io_ts_1.string,
    userGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    firstName: io_ts_1.string,
    lastName: io_ts_1.string,
    email: io_ts_1.string,
    password: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest.js.map