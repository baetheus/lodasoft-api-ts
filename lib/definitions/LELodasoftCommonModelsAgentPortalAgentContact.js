"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsSharedLoanContact_1 = require("../definitions/LELodasoftCommonModelsSharedLoanContact");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAgentPortalAgentContactIO = io_ts_1.type({
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentNMLS: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentAvatarUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentAddressUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phoneNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    faxNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailAddress: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyNMLS: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    address: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    city: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    state: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    zip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    loanContacts: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsSharedLoanContact_1.LELodasoftCommonModelsSharedLoanContactIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsAgentPortalAgentContact.js.map