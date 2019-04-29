"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminChecklistAnswerViewModelIO = io_ts_1.type({
    checklistAnswerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    answerText: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    applicationId: io_ts_1.number,
    checkListId: io_ts_1.number,
    questionId: io_ts_1.number,
    loanDocTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminChecklistAnswerViewModel.js.map