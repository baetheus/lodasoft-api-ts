"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminLenderModelViewIO = io_ts_1.type({
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lenderId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    nameOfLender: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    address: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsAdminLenderModelView.js.map