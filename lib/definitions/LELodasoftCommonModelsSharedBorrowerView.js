"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedBorrowerViewIO = io_ts_1.type({
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedBorrowerView.js.map