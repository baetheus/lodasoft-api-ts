"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedCreateAccountResponseModelIO = io_ts_1.type({
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    success: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    alreadyRegistered: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    errorMessage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedCreateAccountResponseModel.js.map