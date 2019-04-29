"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageReoViewModelIO = io_ts_1.type({
    reoId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    addressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    typeOfProperty: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        SingleFamily: null,
        Condo: null,
        Townhouse: null,
        Coop: null,
        TwoToFourUnitProperty: null,
        MultifamilyMoreThanFourUnits: null,
        CommercialNonResidential: null,
        MixedUseResidential: null,
        Farm: null,
        HomeAndBusinessCombined: null,
        Land: null,
    })),
    dispositionStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Sold: null, PendingSale: null, RetainForPrimaryOrSecondaryResidence: null, RentalProperty: null })),
    marketValue: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    amountOfMortgage: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    grossRentalIncome: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    netRentalIncome: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mortgagePayment: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    monthlyMiscExpenses: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    isCurrentResidence: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isSubjectProperty: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    address: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageReoViewModel.js.map