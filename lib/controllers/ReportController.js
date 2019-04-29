"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsReportPipelineMetricsRequest_1 = require("../definitions/LELodasoftCommonModelsReportPipelineMetricsRequest");
var LELodasoftCommonModelsReportTaskMetricsRequest_1 = require("../definitions/LELodasoftCommonModelsReportTaskMetricsRequest");
var LELodasoftDataAccessModelsReportPipelineMetricsModel_1 = require("../definitions/LELodasoftDataAccessModelsReportPipelineMetricsModel");
var LELodasoftDataAccessModelsReportTaskMetricsModel_1 = require("../definitions/LELodasoftDataAccessModelsReportTaskMetricsModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.reportController = Reader_1.asks(function (e) { return ({
    Report_GetTaskMetrics: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsReportTaskMetricsRequest_1.LELodasoftCommonModelsReportTaskMetricsRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Report/GetTaskMetrics",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsReportTaskMetricsModel_1.LELodasoftDataAccessModelsReportTaskMetricsModelIO));
    },
    Report_GetPipelineMetrics: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsReportPipelineMetricsRequest_1.LELodasoftCommonModelsReportPipelineMetricsRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Report/GetPipelineMetrics",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsReportPipelineMetricsModel_1.LELodasoftDataAccessModelsReportPipelineMetricsModelIO));
    },
}); });
//# sourceMappingURL=ReportController.js.map