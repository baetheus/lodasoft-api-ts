"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedCreateAccountModelIO = io_ts_1.type({
    firstName: io_ts_1.string,
    lastName: io_ts_1.string,
    userName: io_ts_1.string,
    password: io_ts_1.string,
    confirmPassword: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedCreateAccountModel.js.map