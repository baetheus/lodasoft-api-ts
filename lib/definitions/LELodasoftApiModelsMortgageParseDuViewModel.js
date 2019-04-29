"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageMortgageViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageViewModel");
var LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsMortgageParseDuViewModelIO = io_ts_1.type({
    mortgageViewModel: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO),
    suggestedBorrowers: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO))),
    loanNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    losIdentifier: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    success: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    validationErrors: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
    errorMessage: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsMortgageParseDuViewModel.js.map