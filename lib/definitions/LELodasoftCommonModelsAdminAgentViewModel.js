"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLeadsUserProfileViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsUserProfileViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminAgentViewModelIO = io_ts_1.type({
    agentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userProfile: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsUserProfileViewModel_1.LELodasoftCommonModelsLeadsUserProfileViewModelIO),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    department: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    orgName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    nmlsId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mobilePhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    workPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    extPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fax: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assistantName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assistantPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assistantEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    doNotCall: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    doNotEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    alertViaSms: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingPOBox: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    createDate: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    modifiedDate: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    agentListIds: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminAgentViewModel.js.map