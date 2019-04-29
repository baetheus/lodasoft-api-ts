"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerPortalBorrowerMessageModelIO = io_ts_1.type({
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanDocTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    messageText: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerPortalBorrowerMessageModel.js.map