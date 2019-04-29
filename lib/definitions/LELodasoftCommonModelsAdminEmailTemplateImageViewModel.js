"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO = io_ts_1.type({
    emailTemplateImageId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailTemplateImageGuid: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    definedEmailTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    mimeType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    imageData: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminEmailTemplateImageViewModel.js.map