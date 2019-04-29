"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLoanMergeDocFilesInstruction_1 = require("../definitions/LELodasoftCommonModelsLoanMergeDocFilesInstruction");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLoanMergeDocFilesRequestIO = io_ts_1.type({
    newSourceDocFileBase64Content: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, io_ts_1.string)),
    mergeInstructions: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsLoanMergeDocFilesInstruction_1.LELodasoftCommonModelsLoanMergeDocFilesInstructionIO)),
    originalFileGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    newFileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsLoanMergeDocFilesRequest.js.map