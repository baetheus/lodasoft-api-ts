"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsMortgageDeclarationViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.mortgageDeclarationController = Reader_1.asks(function (e) { return ({
    MortgageDeclaration_GetDeclarationById: function (declarationId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/declarations/" + encodeURIComponent(io_ts_1.number.encode(declarationId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO));
    },
    MortgageDeclaration_UpdateDeclaration: function (declarationId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/declarations/" + encodeURIComponent(io_ts_1.number.encode(declarationId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO));
    },
    MortgageDeclaration_DeleteDeclaration: function (declarationId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/declarations/" + encodeURIComponent(io_ts_1.number.encode(declarationId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageDeclaration_InsertDeclaration: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/declarations",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModel_1.LELodasoftCommonModelsMortgageDeclarationViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageDeclarationController.js.map