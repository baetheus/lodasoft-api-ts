"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminEmailTemplateImageViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsAdminEmailTemplateViewModelIO = io_ts_1.type({
    emailTemplateId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    emailTemplateName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    emailTemplateType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Loan: null, Lead: null })),
    manualSendEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    emailText: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    images: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminEmailTemplateImageViewModel_1.LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsAdminEmailTemplateViewModel.js.map