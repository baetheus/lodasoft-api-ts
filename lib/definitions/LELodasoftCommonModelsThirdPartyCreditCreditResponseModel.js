"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO = io_ts_1.type({
    success: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    validationErrors: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
    errorMessage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsThirdPartyCreditCreditResponseModel.js.map