"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsRegisterExternalBindingModelIO = io_ts_1.type({
    userName: io_ts_1.string,
    password: io_ts_1.string,
    confirmPassword: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    provider: io_ts_1.string,
    externalAccessToken: io_ts_1.string,
});
//# sourceMappingURL=LELodasoftApiModelsRegisterExternalBindingModel.js.map