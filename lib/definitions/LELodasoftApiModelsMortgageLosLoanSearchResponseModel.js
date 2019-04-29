"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftThirdPartyLosSearchResponseItem_1 = require("../definitions/LELodasoftThirdPartyLosSearchResponseItem");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO = io_ts_1.type({
    searchResponseItems: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftThirdPartyLosSearchResponseItem_1.LELodasoftThirdPartyLosSearchResponseItemIO)),
    success: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    validationErrors: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
    errorMessage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsMortgageLosLoanSearchResponseModel.js.map