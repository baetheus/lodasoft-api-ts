"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsFileExportLoanDocModel_1 = require("../definitions/LELodasoftApiModelsFileExportLoanDocModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsFileExportDocumentModelIO = io_ts_1.type({
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentTypeName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    docFiles: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsFileExportLoanDocModel_1.LELodasoftApiModelsFileExportLoanDocModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsFileExportDocumentModel.js.map