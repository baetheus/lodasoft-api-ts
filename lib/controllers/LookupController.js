"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
var LELodasoftApiModelsUserUserLookupView_1 = require("../definitions/LELodasoftApiModelsUserUserLookupView");
var LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel");
var LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel");
var LELodasoftDataAccessDbModelsConfigurationRoleModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel");
var utils_1 = require("../utils/utils");
exports.lookupController = Reader_1.asks(function (e) { return ({
    Lookup_getAllRolesByCompanyId: function () {
        return e.apiClient
            .request({
            url: "/api/Lookup/getAllRoles",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO)));
    },
    Lookup_getAllUsers: function () {
        return e.apiClient
            .request({
            url: "/api/Lookup/getAllUsers",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsUserUserLookupView_1.LELodasoftApiModelsUserUserLookupViewIO)));
    },
    Lookup_GetLosProviders: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ providerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Lookup/get-los-providers",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel_1.LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO)));
    },
    Lookup_GetLoanStatusForLoanPurpose: function (loanPurposeId, loanStatusId) {
        return e.apiClient
            .request({
            url: "/api/Lookup/GetLoanStatusForLoanPurpose/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
    Lookup_GetLeadStatusForLoanPurpose: function (loanPurposeId, loanStatusId) {
        return e.apiClient
            .request({
            url: "/api/Lookup/GetLeadStatusForLoanPurpose/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
}); });
//# sourceMappingURL=LookupController.js.map