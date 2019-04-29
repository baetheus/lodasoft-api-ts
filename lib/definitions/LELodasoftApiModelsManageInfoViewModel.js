"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsExternalLoginViewModel_1 = require("../definitions/LELodasoftApiModelsExternalLoginViewModel");
var LELodasoftApiModelsUserLoginInfoViewModel_1 = require("../definitions/LELodasoftApiModelsUserLoginInfoViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsManageInfoViewModelIO = io_ts_1.type({
    localLoginProvider: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    logins: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsUserLoginInfoViewModel_1.LELodasoftApiModelsUserLoginInfoViewModelIO)),
    externalLoginProviders: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsExternalLoginViewModel_1.LELodasoftApiModelsExternalLoginViewModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsManageInfoViewModel.js.map