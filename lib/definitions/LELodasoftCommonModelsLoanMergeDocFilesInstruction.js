"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLoanMergeDocFilesInstructionIO = io_ts_1.type({
    sourceDocFileGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    destinationDocFileGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    destinationLoanDocId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    destinationLoanDocTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    note: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerNote: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    condition: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    mergeMode: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Append: null, Prepend: null, Replace: null })),
    allPages: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    customPages: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.number)),
    removePagesFromSource: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftCommonModelsLoanMergeDocFilesInstruction.js.map