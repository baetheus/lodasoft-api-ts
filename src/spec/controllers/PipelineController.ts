import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsAdminPipelineApplicationCounts,
	LELodasoftApiModelsAdminPipelineApplicationCountsIO,
} from '../definitions/LELodasoftApiModelsAdminPipelineApplicationCounts';
import {
	LELodasoftApiModelsAdminPipelineFilterCriteria,
	LELodasoftApiModelsAdminPipelineFilterCriteriaIO,
} from '../definitions/LELodasoftApiModelsAdminPipelineFilterCriteria';
import {
	LELodasoftCommonModelsPipelinePipelineApplicationView,
	LELodasoftCommonModelsPipelinePipelineApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, boolean, type } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type PipelineController = {
	/**
	 * Get Applications by filter criteria
	 * @param { object } parameters
	 */
	readonly Pipeline_GetAppsByLoanStatusId: (parameters: {
		body: LELodasoftApiModelsAdminPipelineFilterCriteria;
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>>;

	/**
	 * Get Application counts by loan status and by loan purpose
	 */
	readonly Pipeline_GetCountApplicationbyLoanStatus: () => Observable<
		AsyncData<Error, LELodasoftApiModelsAdminPipelineApplicationCounts>
	>;

	/**
	 * Get Applications for Internal Contact
	 * @param { object } parameters
	 */
	readonly Pipeline_GetAllApplicationsForInternalContact: (parameters: {
		query: { archive: boolean };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>>;
};

export const pipelineController = asks(
	(e: { apiClient: TAPIClient }): PipelineController => ({
		Pipeline_GetAppsByLoanStatusId: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsAdminPipelineFilterCriteriaIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Pipeline/GetAppsByLoanStatusId`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsPipelinePipelineApplicationViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Pipeline_GetCountApplicationbyLoanStatus: () => {
			return e.apiClient
				.request({
					url: `/api/Pipeline/GetCountApplicationByFilterTypes`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminPipelineApplicationCountsIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Pipeline_GetAllApplicationsForInternalContact: parameters => {
			const encoded = partial({ query: type({ archive: boolean }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Pipeline/GetAllApplicationsForInternalContact`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsPipelinePipelineApplicationViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},
	}),
);
