"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsSystemVersionResultIO = io_ts_1.type({
    assemblyVersion: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assemblyInformation: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    machineName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    port: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftApiModelsSystemVersionResult.js.map