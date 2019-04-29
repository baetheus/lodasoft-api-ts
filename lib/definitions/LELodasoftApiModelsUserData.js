"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MicrosoftAspNetIdentityUserLoginInfo_1 = require("../definitions/MicrosoftAspNetIdentityUserLoginInfo");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsUserDataIO = io_ts_1.type({
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phoneNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    twoFactor: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    logins: io_ts_types_1.createOptionFromNullable(io_ts_1.array(MicrosoftAspNetIdentityUserLoginInfo_1.MicrosoftAspNetIdentityUserLoginInfoIO)),
    lastTimeLogin: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    avatar: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsUserData.js.map