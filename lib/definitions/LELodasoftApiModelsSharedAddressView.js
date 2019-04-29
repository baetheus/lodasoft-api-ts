"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsSharedAddressViewIO = io_ts_1.type({
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingPOBox: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsSharedAddressView.js.map