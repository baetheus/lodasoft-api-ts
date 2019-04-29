"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO = io_ts_1.type({
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    creditScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    last4Ssn: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isRegister: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isInvited: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isPrimary: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    isPortalMerged: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    lastTimeLogin: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    birthDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    mailingStreet: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingCity: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingState: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingZip: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerContact: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    creditMonitoringStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Unset: null, Active: null, Disabled: null })),
    dateCreateBorrower: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessModelsAdminBorrowerBorrowerDto.js.map