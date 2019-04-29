"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMessageSendSmsViewModelIO = io_ts_1.type({
    from: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    to: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    body: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsMessageSendSmsViewModel.js.map