"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsAdminBorrowerModelIO = io_ts_1.type({
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    middleName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    birthDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    socialSecNum: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerContact: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    creditScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    alertViaSms: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    mobilePhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    workPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    extPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fax: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assistantName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    assistantPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    doNotCall: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    doNotEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingPOBox: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateCreateBorrower: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    creditMonitoringStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Unset: null, Active: null, Disabled: null })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsAdminBorrowerModel.js.map