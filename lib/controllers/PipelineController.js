"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsAdminPipelineApplicationCounts_1 = require("../definitions/LELodasoftApiModelsAdminPipelineApplicationCounts");
var LELodasoftApiModelsAdminPipelineFilterCriteria_1 = require("../definitions/LELodasoftApiModelsAdminPipelineFilterCriteria");
var LELodasoftCommonModelsPipelinePipelineApplicationView_1 = require("../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.pipelineController = Reader_1.asks(function (e) { return ({
    Pipeline_GetAppsByLoanStatusId: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsAdminPipelineFilterCriteria_1.LELodasoftApiModelsAdminPipelineFilterCriteriaIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Pipeline/GetAppsByLoanStatusId",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsPipelinePipelineApplicationView_1.LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
    },
    Pipeline_GetCountApplicationbyLoanStatus: function () {
        return e.apiClient
            .request({
            url: "/api/Pipeline/GetCountApplicationByFilterTypes",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminPipelineApplicationCounts_1.LELodasoftApiModelsAdminPipelineApplicationCountsIO));
    },
    Pipeline_GetAllApplicationsForInternalContact: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ archive: io_ts_1.boolean }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Pipeline/GetAllApplicationsForInternalContact",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsPipelinePipelineApplicationView_1.LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
    },
}); });
//# sourceMappingURL=PipelineController.js.map