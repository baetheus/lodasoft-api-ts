"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsBorrowerApplicationViewModel_1 = require("../definitions/LELodasoftApiModelsBorrowerApplicationViewModel");
var LELodasoftApiModelsBorrowerBorrowerFull_1 = require("../definitions/LELodasoftApiModelsBorrowerBorrowerFull");
var LELodasoftApiModelsBorrowerNewApplicationRequest_1 = require("../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest");
var LELodasoftApiModelsBorrowerUpsertApplicationInfoView_1 = require("../definitions/LELodasoftApiModelsBorrowerUpsertApplicationInfoView");
var LELodasoftCommonModelsLoanCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanCreditViewModel");
var LELodasoftDataAccessDbModelsAdminApplicationModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel");
var LELodasoftDataAccessDbModelsAdminLoanDocTaskModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel");
var LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel");
var LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1 = require("../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.borrowerController = Reader_1.asks(function (e) { return ({
    Borrower_GetAllBorrower: function () {
        return e.apiClient
            .request({
            url: "/api/Borrower/AllBorrower",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDto_1.LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
    },
    Borrower_UpsertBorrower: function (sendInvite, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerBorrowerFull_1.LELodasoftApiModelsBorrowerBorrowerFullIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Borrower/UpsertBorrower/" + encodeURIComponent(io_ts_1.boolean.encode(sendInvite).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerBorrowerFull_1.LELodasoftApiModelsBorrowerBorrowerFullIO));
    },
    Borrower_InviteBorrower: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Borrower/InviteBorrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Borrower_GetBorrower: function (borrowerId, isAdmin) {
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/" + encodeURIComponent(io_ts_1.boolean.encode(isAdmin).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerBorrowerFull_1.LELodasoftApiModelsBorrowerBorrowerFullIO));
    },
    Borrower_DeleteBorrower: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Borrower_AddNewApplication: function (borrowerId, shouldSendCoBorrInvite, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerNewApplicationRequest_1.LELodasoftApiModelsBorrowerNewApplicationRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/AddNewApplication/" + encodeURIComponent(io_ts_1.boolean.encode(shouldSendCoBorrInvite).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminApplicationModel_1.LELodasoftDataAccessDbModelsAdminApplicationModelIO));
    },
    Borrower_GetAllApplicationInfo: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/GetAllApplicationInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerApplicationViewModel_1.LELodasoftApiModelsBorrowerApplicationViewModelIO)));
    },
    Borrower_UpsertApplicationInfo: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerUpsertApplicationInfoView_1.LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/UpsertApplicationInfo",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModel_1.LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
    },
    Borrower_AllEmploymentInfo: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/AllEmploymentInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel_1.LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO)));
    },
    Borrower_AllCreditInfo: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/Borrower/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/AllCreditInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanCreditViewModel_1.LELodasoftCommonModelsLoanCreditViewModelIO));
    },
}); });
//# sourceMappingURL=BorrowerController.js.map