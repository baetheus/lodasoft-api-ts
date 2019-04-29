"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageAssetViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageAssetViewModel");
var LELodasoftCommonModelsMortgageDeclarationViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel");
var LELodasoftCommonModelsMortgageDependentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDependentViewModel");
var LELodasoftCommonModelsMortgageEmailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmailViewModel");
var LELodasoftCommonModelsMortgageEmploymentViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel");
var LELodasoftCommonModelsMortgageExpenseViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageExpenseViewModel");
var LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel");
var LELodasoftCommonModelsMortgageIncomeViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageIncomeViewModel");
var LELodasoftCommonModelsMortgageLiabilityViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel");
var LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel");
var LELodasoftCommonModelsMortgagePhoneViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgagePhoneViewModel");
var LELodasoftCommonModelsMortgageReoViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageReoViewModel");
var LELodasoftCommonModelsMortgageResidencyAddressViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageBorrowerController = Reader_1.asks(function (e) { return ({
    MortgageBorrower_GetBorrowerById: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
    },
    MortgageBorrower_UpdateBorrower: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
    },
    MortgageBorrower_DeleteBorrower: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageBorrower_InsertBorrower: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
    },
    MortgageBorrower_GetAssetsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/assets",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO)));
    },
    MortgageBorrower_InsertAsset: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/assets",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModel_1.LELodasoftCommonModelsMortgageAssetViewModelIO));
    },
    MortgageBorrower_GetDeclarationsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/declarations",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO)));
    },
    MortgageBorrower_InsertDeclaration: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/declarations",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO));
    },
    MortgageBorrower_GetDependentsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/dependents",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO)));
    },
    MortgageBorrower_InsertDependent: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/dependents",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModel_1.LELodasoftCommonModelsMortgageDependentViewModelIO));
    },
    MortgageBorrower_GetEmailsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/emails",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO)));
    },
    MortgageBorrower_InsertEmail: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/emails",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModel_1.LELodasoftCommonModelsMortgageEmailViewModelIO));
    },
    MortgageBorrower_GetEmploymentsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/employments",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO)));
    },
    MortgageBorrower_InsertEmployment: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/employments",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageEmploymentViewModel_1.LELodasoftCommonModelsMortgageEmploymentViewModelIO));
    },
    MortgageBorrower_GetExpensesByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/expenses",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO)));
    },
    MortgageBorrower_InsertExpense: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/expenses",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModel_1.LELodasoftCommonModelsMortgageExpenseViewModelIO));
    },
    MortgageBorrower_GetGovernmentMonitorsByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/governmentmonitors",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO)));
    },
    MortgageBorrower_InsertGovernmentMonitor: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/governmentmonitors",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
    },
    MortgageBorrower_GetIncomesByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/incomes",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO)));
    },
    MortgageBorrower_InsertIncome: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/incomes",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModel_1.LELodasoftCommonModelsMortgageIncomeViewModelIO));
    },
    MortgageBorrower_GetLiabilitiesByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/liabilities",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO)));
    },
    MortgageBorrower_InsertLiability: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/liabilities",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModel_1.LELodasoftCommonModelsMortgageLiabilityViewModelIO));
    },
    MortgageBorrower_GetPhonesByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/phones",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO)));
    },
    MortgageBorrower_InsertPhone: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/phones",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModel_1.LELodasoftCommonModelsMortgagePhoneViewModelIO));
    },
    MortgageBorrower_GetReosByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/reos",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO)));
    },
    MortgageBorrower_InsertReo: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/reos",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageReoViewModel_1.LELodasoftCommonModelsMortgageReoViewModelIO));
    },
    MortgageBorrower_GetResidencyAddressesByBorrowerId: function (borrowerId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/residencyaddresses",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO)));
    },
    MortgageBorrower_InsertResidencyAddress: function (borrowerId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/borrowers/" + encodeURIComponent(io_ts_1.number.encode(borrowerId).toString()) + "/residencyaddresses",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModel_1.LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageBorrowerController.js.map