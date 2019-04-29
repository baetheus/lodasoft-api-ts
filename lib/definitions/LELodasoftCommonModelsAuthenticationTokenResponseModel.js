"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAuthenticationTokenResponseModelIO = io_ts_1.type({
    access_token: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    token_type: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    expires_in: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    issued: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    expires: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsAuthenticationTokenResponseModel.js.map