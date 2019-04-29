"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminPrequalDetailViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.prequalDetailController = Reader_1.asks(function (e) { return ({
    PrequalDetail_GetPrequalDetail: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ applicationId: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/prequal-detail",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModel_1.LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
    },
    PrequalDetail_UpsertPrequalDetail: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminPrequalDetailViewModel_1.LELodasoftCommonModelsAdminPrequalDetailViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/prequal-detail",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModel_1.LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
    },
}); });
//# sourceMappingURL=PrequalDetailController.js.map