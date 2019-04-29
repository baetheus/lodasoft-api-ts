import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsReportPipelineMetricsRequest } from '../definitions/LELodasoftCommonModelsReportPipelineMetricsRequest';
import { LELodasoftCommonModelsReportTaskMetricsRequest } from '../definitions/LELodasoftCommonModelsReportTaskMetricsRequest';
import { LELodasoftDataAccessModelsReportPipelineMetricsModel } from '../definitions/LELodasoftDataAccessModelsReportPipelineMetricsModel';
import { LELodasoftDataAccessModelsReportTaskMetricsModel } from '../definitions/LELodasoftDataAccessModelsReportTaskMetricsModel';
import { Observable } from 'rxjs';
export declare type ReportController = {
    /**
     * Get Task Metrics
     * @param { object } parameters
     */
    readonly Report_GetTaskMetrics: (parameters: {
        body: LELodasoftCommonModelsReportTaskMetricsRequest;
    }) => Observable<LELodasoftDataAccessModelsReportTaskMetricsModel>;
    /**
     * Get Pipeline Metrics
     * @param { object } parameters
     */
    readonly Report_GetPipelineMetrics: (parameters: {
        body: LELodasoftCommonModelsReportPipelineMetricsRequest;
    }) => Observable<LELodasoftDataAccessModelsReportPipelineMetricsModel>;
};
export declare const reportController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, ReportController>;
