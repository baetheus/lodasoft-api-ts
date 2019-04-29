"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
    borrowerFriendlyStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerFriendlyBlurb: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    supressBorrowerNotification: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    order: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    associatedStatuses: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    isLeadStatusAssociation: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel.js.map