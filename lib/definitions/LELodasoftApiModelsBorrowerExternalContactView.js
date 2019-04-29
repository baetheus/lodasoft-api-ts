"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsBorrowerExternalContactViewIO = io_ts_1.type({
    agentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    agentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    agentType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    orgName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fax: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftApiModelsBorrowerExternalContactView.js.map