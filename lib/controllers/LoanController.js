"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView");
var LELodasoftApiModelsBorrowerExternalContactView_1 = require("../definitions/LELodasoftApiModelsBorrowerExternalContactView");
var LELodasoftApiModelsBorrowerLoanCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView");
var LELodasoftApiModelsBorrowerLoanDocDto_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanDocDto");
var LELodasoftApiModelsBorrowerLoanInfo_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanInfo");
var LELodasoftApiModelsBorrowerNewApplicationRequest_1 = require("../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest");
var LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView_1 = require("../definitions/LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView");
var LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView_1 = require("../definitions/LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView");
var LELodasoftApiModelsSharedAddressView_1 = require("../definitions/LELodasoftApiModelsSharedAddressView");
var LELodasoftCommonModelsAdminActivityLogViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminActivityLogViewModel");
var LELodasoftCommonModelsAdminAgentViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAgentViewModel");
var LELodasoftCommonModelsAdminTrackingViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminTrackingViewModel");
var LELodasoftCommonModelsLoanDocFileViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanDocFileViewModel");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var LELodasoftDataAccessDbModelsAdminApplicationModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel");
var LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel");
var LELodasoftDataAccessDbModelsAdminInternalContactModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminInternalContactModel");
var LELodasoftDataAccessDbModelsAdminLoanDocModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel");
var LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto");
var LELodasoftDataAccessModelsTaskCountModel_1 = require("../definitions/LELodasoftDataAccessModelsTaskCountModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.loanController = Reader_1.asks(function (e) { return ({
    Loan_GetBorrowersByLoanId: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/Borrowers",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
    },
    Loan_GetBorrowerNotOwnedByLoan: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/BorrowersNotOwnedByLoan",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
    },
    Loan_SelectBorrower: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SelectBorrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_GetFirstBorrowerAddress: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetFirstBorrowerAddress/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_SetBorrowerAsPrimaryOnLoan: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SetBorrowerAsPrimaryOnLoan/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_SetAllowPrimaryToStatisfyFlagOnLoan: function (loanId, borrowerId, allow) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SetAllowPrimaryToStatisfyFlagOnLoan/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/" + encodeURIComponent(io_ts_1.boolean.encode(allow).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_RemoveBorrowerFromLoan: function (loanId, borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/RemoveBorrowerFromLoan/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_AllExternalContacts: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/AllExternalContacts",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerExternalContactView_1.LELodasoftApiModelsBorrowerExternalContactViewIO)));
    },
    Loan_AllRemainExternalContacts: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/AllRemainExternalContacts",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentViewModel_1.LELodasoftCommonModelsAdminAgentViewModelIO)));
    },
    Loan_SelectAgentForExternalContact: function (loanId, agentId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ agentTypeId: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SelectAgentForExternalContact/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    Loan_RemoveAgentFromExternalContact: function (loanId, agentId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/RemoveAgentFromExternalContact/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    Loan_InternalContacts: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/InternalContacts",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_UpsertInternalContacts: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftDataAccessDbModelsAdminInternalContactModel_1.LELodasoftDataAccessDbModelsAdminInternalContactModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertInternalContacts",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsAdminInternalContactModel_1.LELodasoftDataAccessDbModelsAdminInternalContactModelIO)));
    },
    Loan_CurrentLoanInfo: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/CurrentLoanInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1.LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO));
    },
    Loan_UpsertCurrentLoanInfo: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1.LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertCurrentLoanInfo",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel_1.LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO));
    },
    Loan_GetLoanCharacteristic: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetLoanCharacteristic",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerLoanCharacteristicView_1.LELodasoftApiModelsBorrowerLoanCharacteristicViewIO));
    },
    Loan_UpsertLoanCharacteristicPreview: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerLoanCharacteristicView_1.LELodasoftApiModelsBorrowerLoanCharacteristicViewIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertLoanCharacteristicPreview",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
    },
    Loan_UpsertLoanCharacteristic: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView_1.LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertLoanCharacteristic",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_GetBorrowerCharacteristics: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetBorrowerCharacteristics",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1.LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)));
    },
    Loan_UpsertBorrowerCharacteristicsPreview: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1.LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertBorrowerCharacteristicsPreview",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
    },
    Loan_UpsertBorrowerCharacteristics: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView_1.LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertBorrowerCharacteristics",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerBorrowerCharacteristicView_1.LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)));
    },
    Loan_GetAllLoanDocs: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetAllLoanDocs",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsAdminLoanDocModel_1.LELodasoftDataAccessDbModelsAdminLoanDocModelIO)));
    },
    Loan_UpsertLoanDoc: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsAdminLoanDocModel_1.LELodasoftDataAccessDbModelsAdminLoanDocModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertLoanDoc",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerLoanDocDto_1.LELodasoftApiModelsBorrowerLoanDocDtoIO));
    },
    Loan_GetAllDocFiles: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetAllDocFiles",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLoanDocFileViewModel_1.LELodasoftCommonModelsLoanDocFileViewModelIO)));
    },
    Loan_GetTaskCountByApplicationID: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetTaskCountByApplicationID",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsTaskCountModel_1.LELodasoftDataAccessModelsTaskCountModelIO));
    },
    Loan_GetAllLoanDocTaskConditions: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetAllLoanDocTaskConditions",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
    },
    Loan_SaveFirstLoanStatusByLoanPurpose: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SaveFirstLoanStatusByLoanPurpose",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_UpdateLoanStatus: function (loanId, loanStatusId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpdateLoanStatus/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_ViewLoanStatusHistory: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/ViewLoanStatusHistory",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminTrackingViewModel_1.LELodasoftCommonModelsAdminTrackingViewModelIO)));
    },
    Loan_ViewLoanStatusHistory1: function (applicationId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(applicationId).toString()) + "/GetActivityLogs",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminActivityLogViewModel_1.LELodasoftCommonModelsAdminActivityLogViewModelIO)));
    },
    Loan_SaveLoanInfo: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerLoanInfo_1.LELodasoftApiModelsBorrowerLoanInfoIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/SaveLoanInfo",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_GetLoanInfo: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/GetLoanInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerNewApplicationRequest_1.LELodasoftApiModelsBorrowerNewApplicationRequestIO));
    },
    Loan_DeActivateLoan: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ applicationId: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/DeActivateLoan",
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Loan_UpsertSubjectProperty: function (loanId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsSharedAddressView_1.LELodasoftApiModelsSharedAddressViewIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/UpsertSubjectProperty",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminApplicationModel_1.LELodasoftDataAccessDbModelsAdminApplicationModelIO));
    },
    Loan_AddOnlineApplicationTask: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/add-online-app-task",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
    },
    Loan_CheckForOnlineApplicationTask: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/Loan/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/check-for-online-app-task",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
    },
}); });
//# sourceMappingURL=LoanController.js.map