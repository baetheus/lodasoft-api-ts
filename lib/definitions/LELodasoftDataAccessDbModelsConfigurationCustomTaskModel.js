"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCharacteristicModel");
var LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel");
var LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel");
var LELodasoftDataAccessDbModelsConfigurationRoleModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO = io_ts_1.type({
    customTaskId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCategoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCategoryModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO),
    loanStatusId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanStatusModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
    taskDescription: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    option: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Immediately: null, OnLoanStatus: null })),
    applyTo: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Loan: null, PrimaryBorrower: null, SelectBorrowers: null })),
    roleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    roleModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
    documentTypeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    documentType: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO),
    reviewRequiredRoleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    reviewRequiredRoleModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
    notifyPartyRoleId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    notifyPartyRoleModel: io_ts_types_1.createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO),
    taskType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        RequestDocument: null,
        ViewDocument: null,
        AcknowledgeReceipt: null,
        EsignDocument: null,
        RequestInformation: null,
        PerformAction: null,
        OnlineApplication: null,
        DigitalAssetVerification: null,
    })),
    dueDays: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    permittedAgentTypes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    tasksOnCompletion: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    documentDataHeader: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    defaultTaskPriority: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Low: null, Normal: null, High: null, Immediate: null })),
    docDataString: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    requestBorrower: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    alwaysShowPending: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftDataAccessDbModelsConfigurationCustomTaskModel.js.map