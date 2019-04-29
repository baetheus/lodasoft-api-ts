"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    flowType: io_ts_1.keyof({ Unspecified: null, LeadPost: null, OnlineApplication: null, ContactStrategy: null }),
    title: io_ts_1.string,
    comment: io_ts_1.string,
    data: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    flowGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    active: io_ts_1.boolean,
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel.js.map