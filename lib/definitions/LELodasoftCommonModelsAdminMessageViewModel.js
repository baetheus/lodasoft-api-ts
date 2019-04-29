"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminMessageViewModelIO = io_ts_1.type({
    messageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanDocTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    content: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    flagInternalMessage: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    postTime: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    senderId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    senderFirstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    senderLastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    senderAvatar: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    notifyPartyId: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminMessageViewModel.js.map