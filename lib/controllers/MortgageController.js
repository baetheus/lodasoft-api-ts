"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel");
var LELodasoftCommonModelsMortgageMortgageTermViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel");
var LELodasoftCommonModelsMortgageMortgageViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageMortgageViewModel");
var LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel");
var LELodasoftCommonModelsMortgageTransactionDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.mortgageController = Reader_1.asks(function (e) { return ({
    Mortgage_GetMortgageById: function (mortgageId) {
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_UpdateMortgage: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_DeleteMortgage: function (mortgageId) {
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Mortgage_GetMortgageByApplicationId: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ applicationId: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_InsertMortgage: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ mapFromApplication: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }),
            body: LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_ResetMortgage: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/reset",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_ImportDu: function (loanId, mortgageId) {
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/import-du/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModel_1.LELodasoftCommonModelsMortgageMortgageViewModelIO));
    },
    Mortgage_ExportDu: function (loanId) {
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(loanId).toString()) + "/export-du",
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Mortgage_InsertSubjectProperty: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/subjectproperty",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModel_1.LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
    },
    Mortgage_InsertMortgageTerm: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/mortgageterm",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModel_1.LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
    },
    Mortgage_InsertTransactionDetail: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/transactiondetail",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModel_1.LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
    },
    Mortgage_GetBorrowersByMortgageId: function (mortgageId) {
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/borrowers",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO)));
    },
    Mortgage_InsertBorrower: function (mortgageId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgages/" + encodeURIComponent(io_ts_1.number.encode(mortgageId).toString()) + "/borrowers",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModel_1.LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageController.js.map