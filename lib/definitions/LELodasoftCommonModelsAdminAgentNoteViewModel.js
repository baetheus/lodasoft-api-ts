"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminAgentNoteViewModelIO = io_ts_1.type({
    messageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    agentId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    content: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    postTime: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    userFirstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userLastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userAvatar: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminAgentNoteViewModel.js.map