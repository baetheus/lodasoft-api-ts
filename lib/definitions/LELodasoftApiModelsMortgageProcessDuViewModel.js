"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView");
var LELodasoftCommonModelsMortgageMortgageViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsMortgageProcessDuViewModelIO = io_ts_1.type({
    mortgageViewModel: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO),
    loanNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    losIdentifier: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    credentialId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    linkBorrowers: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, io_ts_1.number)),
    loanCharacteristics: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    borrowerCharacteristics: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1.LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    alignmentGroupId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsMortgageProcessDuViewModel.js.map