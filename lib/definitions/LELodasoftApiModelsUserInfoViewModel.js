"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsUserInfoViewModelIO = io_ts_1.type({
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    hasRegistered: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    loginProvider: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailAddress: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsUserInfoViewModel.js.map