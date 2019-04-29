"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationProductModelIO = io_ts_1.type({
    productId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    productName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    term: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationProductModel.js.map