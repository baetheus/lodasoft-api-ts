"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLeadsProviderModelsAddressInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo");
var LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo");
var LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo");
var LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo");
var LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo");
var LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO = io_ts_1.type({
    borrowerInfo: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo_1.LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO),
    subjectPropertyAddress: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAddressInfo_1.LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO),
    loanAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    appraisedValue: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    cashOutAmount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    downPayment: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    interestRate: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loanPurposeId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    currentLoanInfo: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo_1.LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO),
    assignmentInfo: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo_1.LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO),
    appointmentInfo: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo_1.LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO),
    customData: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo_1.LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO),
    losRefNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    internalNotes: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    leadSource: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    tags: io_ts_types_1.createOptionFromNullable(io_ts_1.array(io_ts_1.string)),
    referralSource: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsLodasoftLead.js.map