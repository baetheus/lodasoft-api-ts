"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.MicrosoftAspNetIdentityEntityFrameworkIdentityUserLoginIO = io_ts_1.type({
    loginProvider: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    providerKey: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=MicrosoftAspNetIdentityEntityFrameworkIdentityUserLogin.js.map