"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageAddressViewModelIO = io_ts_1.type({
    addressId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    typeOfAddress: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ PresentAddress: null, FormerAddress: null, MailingAddress: null })),
    address1: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zipCode: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    country: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageAddressViewModel.js.map