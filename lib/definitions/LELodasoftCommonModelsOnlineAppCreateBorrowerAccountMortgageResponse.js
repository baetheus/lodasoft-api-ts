"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAuthenticationTokenResponseModel_1 = require("../definitions/LELodasoftCommonModelsAuthenticationTokenResponseModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO = io_ts_1.type({
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userExists: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userMustConfirmRegistration: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    authToken: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsAuthenticationTokenResponseModel_1.LELodasoftCommonModelsAuthenticationTokenResponseModelIO),
});
//# sourceMappingURL=LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse.js.map