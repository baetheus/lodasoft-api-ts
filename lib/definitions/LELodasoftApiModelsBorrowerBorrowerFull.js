"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsAdminBorrowerModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerBorrowerFullIO = io_ts_1.type({
    portalUserName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrower: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsAdminBorrowerModel_1.LELodasoftDataAccessDbModelsAdminBorrowerModelIO),
    isEdit: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    accountStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ NotInvited: null, Invited: null, Live: null })),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerBorrowerFull.js.map