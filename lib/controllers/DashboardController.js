"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersDashboardControllerDashboardFilterCriteria_1 = require("../definitions/LELodasoftApiControllersDashboardControllerDashboardFilterCriteria");
var LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView");
var LELodasoftDataAccessModelsTaskCountModel_1 = require("../definitions/LELodasoftDataAccessModelsTaskCountModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.dashboardController = Reader_1.asks(function (e) { return ({
    Dashboard_GetTaskCountsbyFilterCriteria: function (parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria_1.LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskCountsbyFilterCriteria",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsTaskCountModel_1.LELodasoftDataAccessModelsTaskCountModelIO));
    },
    Dashboard_GetTaskByFilterbyFilterCriteria: function (filter, parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria_1.LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskByFilterbyFilterCriteria/" + encodeURIComponent(io_ts_1.number.encode(filter).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1.LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
    },
    Dashboard_GetTaskCounts: function () {
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskCounts",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsTaskCountModel_1.LELodasoftDataAccessModelsTaskCountModelIO));
    },
    Dashboard_GetTaskByFilter: function (filter) {
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskByFilter/" + encodeURIComponent(io_ts_1.number.encode(filter).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1.LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
    },
    Dashboard_GetTaskByFilterInApp: function (filter, appId) {
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskByFilterInApp/" + encodeURIComponent(io_ts_1.number.encode(filter).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(appId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1.LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
    },
    Dashboard_GetTaskByFilterInLead: function (filter, leadId) {
        return e.apiClient
            .request({
            url: "/api/Dashboard/GetTaskByFilterInLead/" + encodeURIComponent(io_ts_1.number.encode(filter).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1.LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
    },
}); });
//# sourceMappingURL=DashboardController.js.map