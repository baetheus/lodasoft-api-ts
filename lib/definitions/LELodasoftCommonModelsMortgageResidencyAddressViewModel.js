"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAddressViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO = io_ts_1.type({
    residencyAddressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_1.number,
    addressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    residencyBasis: io_ts_1.keyof({ PresentAddress: null, FormerAddress: null, MailingAddress: null }),
    durationYears: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    durationMonths: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    ownRentType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Own: null, Rent: null, LivingRentFree: null })),
    fromCreditReport: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    address: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModel_1.LELodasoftCommonModelsMortgageAddressViewModelIO),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageResidencyAddressViewModel.js.map