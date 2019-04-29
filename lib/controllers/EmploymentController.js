"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.employmentController = Reader_1.asks(function (e) { return ({
    Employment_UpsertEmploymentInfo: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel_1.LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Employment/UpsertEmploymentInfo",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel_1.LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO));
    },
    Employment_DeleteEmploymentInfo: function (employmentId) {
        return e.apiClient
            .request({
            url: "/api/Employment/" + encodeURIComponent(io_ts_1.number.encode(employmentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
}); });
//# sourceMappingURL=EmploymentController.js.map