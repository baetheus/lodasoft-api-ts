import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsReportPipelineMetricsRequest,
	LELodasoftCommonModelsReportPipelineMetricsRequestIO,
} from '../definitions/LELodasoftCommonModelsReportPipelineMetricsRequest';
import {
	LELodasoftCommonModelsReportTaskMetricsRequest,
	LELodasoftCommonModelsReportTaskMetricsRequestIO,
} from '../definitions/LELodasoftCommonModelsReportTaskMetricsRequest';
import {
	LELodasoftDataAccessModelsReportPipelineMetricsModel,
	LELodasoftDataAccessModelsReportPipelineMetricsModelIO,
} from '../definitions/LELodasoftDataAccessModelsReportPipelineMetricsModel';
import {
	LELodasoftDataAccessModelsReportTaskMetricsModel,
	LELodasoftDataAccessModelsReportTaskMetricsModelIO,
} from '../definitions/LELodasoftDataAccessModelsReportTaskMetricsModel';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';

export type ReportController = {
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

export const reportController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): ReportController => ({
		Report_GetTaskMetrics: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReportTaskMetricsRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Report/GetTaskMetrics`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsReportTaskMetricsModelIO));
		},

		Report_GetPipelineMetrics: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReportPipelineMetricsRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Report/GetPipelineMetrics`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsReportPipelineMetricsModelIO));
		},
	}),
);
