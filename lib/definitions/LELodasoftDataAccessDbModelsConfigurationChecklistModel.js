"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationChecklistModelIO = io_ts_1.type({
    checkListId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    checkLisItemId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    parentRefId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    parentQuestionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionAnswerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    answerValue: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    questionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionRefId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    level: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationChecklistModel.js.map