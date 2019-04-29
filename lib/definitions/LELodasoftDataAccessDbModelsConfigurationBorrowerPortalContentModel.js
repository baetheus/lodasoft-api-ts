"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    aboutUsContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    referralContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    showReferralTerms: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    referralTermsContent: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel.js.map