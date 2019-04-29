"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsSharedEmailServiceModelIO = io_ts_1.type({
    serviceType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    server: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    port: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    password: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isSecure: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    servicesUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsSharedEmailServiceModel.js.map