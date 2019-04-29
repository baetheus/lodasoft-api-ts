"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsPublicApiUserViewModelIO = io_ts_1.type({
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    avatar: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsPublicApiUserViewModel.js.map