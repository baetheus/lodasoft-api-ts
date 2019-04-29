"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO = io_ts_1.type({
    date: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    notes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo.js.map