"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedGeneratePrequalLetterRequestIO = io_ts_1.type({
    productDescription: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    address: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    purchasePrice: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    downPayment: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedGeneratePrequalLetterRequest.js.map