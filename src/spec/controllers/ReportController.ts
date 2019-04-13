import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type ReportController = {
	/**
	 * Get Task Metrics
	 * @param { object } parameters
	 */
	readonly Report_GetTaskMetrics: (parameters: {
		body: LELodasoftCommonModelsReportTaskMetricsRequest;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessModelsReportTaskMetricsModel>>;

	/**
	 * Get Pipeline Metrics
	 * @param { object } parameters
	 */
	readonly Report_GetPipelineMetrics: (parameters: {
		body: LELodasoftCommonModelsReportPipelineMetricsRequest;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessModelsReportPipelineMetricsModel>>;
};

export const reportController = asks(
	(e: { apiClient: TAPIClient }): ReportController => ({
		Report_GetTaskMetrics: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReportTaskMetricsRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Report/GetTaskMetrics`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsReportTaskMetricsModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Report_GetPipelineMetrics: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReportPipelineMetricsRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Report/GetPipelineMetrics`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsReportPipelineMetricsModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
