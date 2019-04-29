"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel");
var LELodasoftCommonModelsMortgageMortgageTermViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel");
var LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel");
var LELodasoftCommonModelsMortgageTransactionDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageMortgageViewModelIO = io_ts_1.type({
    mortgageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    subjectPropertyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mortgageTermId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    transactionDetailId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    subjectProperty: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO),
    mortgageTerm: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO),
    transactionDetail: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO),
    borrowers: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageMortgageViewModel.js.map