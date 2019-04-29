"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedReferralModelIO = io_ts_1.type({
    referToUserId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referralType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Borrower: null, Agent: null })),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userContact: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referredByName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referredByEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referredByPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedReferralModel.js.map