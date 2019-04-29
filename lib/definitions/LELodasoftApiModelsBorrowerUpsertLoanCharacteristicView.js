"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsBorrowerLoanCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO = io_ts_1.type({
    loanCharacteristic: io_ts_types_1.createOptionFromNullable(LELodasoftApiModelsBorrowerLoanCharacteristicView_1.LELodasoftApiModelsBorrowerLoanCharacteristicViewIO),
    loanDocTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView.js.map