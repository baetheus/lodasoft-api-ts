"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedPortalTaskDocumentIO = io_ts_1.type({
    documentGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    documentUrl: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    fileName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerNote: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedPortalTaskDocument.js.map