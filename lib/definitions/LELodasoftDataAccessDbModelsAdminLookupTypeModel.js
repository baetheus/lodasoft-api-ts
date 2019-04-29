"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsAdminLookupTypeModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lookupTypeID: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lookupGroup: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lookupValue: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lookupDescription: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lookupOrder: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsAdminLookupTypeModel.js.map