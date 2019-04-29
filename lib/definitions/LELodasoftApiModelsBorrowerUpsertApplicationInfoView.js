"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationApplicationViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO = io_ts_1.type({
    application: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsConfigurationApplicationViewModel_1.LELodasoftCommonModelsConfigurationApplicationViewModelIO),
    loanDocTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerUpsertApplicationInfoView.js.map