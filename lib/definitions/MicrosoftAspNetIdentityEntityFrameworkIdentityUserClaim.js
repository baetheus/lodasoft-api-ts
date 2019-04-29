"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaimIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    claimType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    claimValue: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=MicrosoftAspNetIdentityEntityFrameworkIdentityUserClaim.js.map