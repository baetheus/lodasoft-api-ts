"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO = io_ts_1.type({
    taskCategoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCategoryName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskOption: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ AutoApply: null, Confirm: null, RequestQuantity: null })),
    characteristicType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ LoanCharacteristic: null, BorrowerCharacteristic: null })),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationCharacteristicModel.js.map