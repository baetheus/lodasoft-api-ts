"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO = io_ts_1.type({
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurposeName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mortgageLoanPurpose: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        Refinance: null,
        Purchase: null,
        ConstructionOnly: null,
        ConstructionToPermanent: null,
        OtherLoanPurpose: null,
        RefinanceCashOut: null,
    })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    companyModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel.js.map