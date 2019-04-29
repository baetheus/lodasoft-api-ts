"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerLoanCharacteristicViewIO = io_ts_1.type({
    loanCharacteristicId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    selectedCharacteristics: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerLoanCharacteristicView.js.map