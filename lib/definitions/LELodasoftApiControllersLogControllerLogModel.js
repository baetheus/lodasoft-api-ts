"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiControllersLogControllerLogModelIO = io_ts_1.type({
    level: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Fatal: null, Error: null, Warning: null, Info: null, Debug: null, Trace: null })),
    timestamp: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    message: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    actionType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    origin: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    data: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, utils_1.unknownType)),
});
//# sourceMappingURL=LELodasoftApiControllersLogControllerLogModel.js.map