"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO = io_ts_1.type({
    borrowerCharacteristics: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1.LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)),
    loanDocTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView.js.map