"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminInviteViewModelIO = io_ts_1.type({
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    sentDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    registerDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    isAdmin: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    active: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftApiModelsAdminInviteViewModel.js.map