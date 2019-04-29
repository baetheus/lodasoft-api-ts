"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO = io_ts_1.type({
    loanDocTask: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO),
    multipleBorrower: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    numFiles: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    expirationDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel.js.map