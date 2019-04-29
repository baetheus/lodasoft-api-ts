"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsSharedBorrowerView_1 = require("../definitions/LELodasoftCommonModelsSharedBorrowerView");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedReferralViewIO = io_ts_1.type({
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    streetViewImageUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mapViewImageUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    address: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    blurb: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanPurpose: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    contactRole: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    contactName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    contactNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    applicationName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    createDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    borrowerDetails: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsSharedBorrowerView_1.LELodasoftCommonModelsSharedBorrowerViewIO),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedReferralView.js.map