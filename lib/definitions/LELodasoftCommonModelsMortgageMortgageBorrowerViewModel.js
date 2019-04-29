"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAssetViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAssetViewModel");
var LELodasoftCommonModelsMortgageDeclarationViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel");
var LELodasoftCommonModelsMortgageDependentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDependentViewModel");
var LELodasoftCommonModelsMortgageEmailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmailViewModel");
var LELodasoftCommonModelsMortgageEmploymentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel");
var LELodasoftCommonModelsMortgageExpenseViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageExpenseViewModel");
var LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel");
var LELodasoftCommonModelsMortgageIncomeViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageIncomeViewModel");
var LELodasoftCommonModelsMortgageLiabilityViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel");
var LELodasoftCommonModelsMortgagePhoneViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePhoneViewModel");
var LELodasoftCommonModelsMortgageReoViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageReoViewModel");
var LELodasoftCommonModelsMortgageResidencyAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO = io_ts_1.type({
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mortgageId: io_ts_1.number,
    contactId: io_ts_1.number,
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    middleName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    nameSuffix: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    yearsOfSchool: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    dependentCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    authorizedCreditCheck: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    socialSecNum: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    maritalStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Single: null, Married: null, Separated: null })),
    dateOfBirth: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    creditScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    creditScore_Equifax: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    creditScore_Experian: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    creditScore_TransUnion: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    typeOfBorrower: io_ts_1.keyof({ PrimaryBorrower: null, CoBorrower: null }),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    assets: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO)),
    declarations: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO)),
    dependents: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO)),
    emails: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO)),
    employments: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO)),
    expenses: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO)),
    governmentMonitors: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO)),
    incomes: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO)),
    liabilities: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO)),
    phones: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO)),
    reos: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO)),
    residencyAddresses: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageMortgageBorrowerViewModel.js.map