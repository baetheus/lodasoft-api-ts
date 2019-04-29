import { TAPIClient } from '../client/client';
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
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, boolean, type } from 'io-ts';
import { Observable } from 'rxjs';

export type PipelineController = {
	/**
	 * Get Applications by filter criteria
	 * @param { object } parameters
	 */
	readonly Pipeline_GetAppsByLoanStatusId: (parameters: {
		body: LELodasoftApiModelsAdminPipelineFilterCriteria;
	}) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;

	/**
	 * Get Application counts by loan status and by loan purpose
	 */
	readonly Pipeline_GetCountApplicationbyLoanStatus: () => Observable<
		LELodasoftApiModelsAdminPipelineApplicationCounts
	>;

	/**
	 * Get Applications for Internal Contact
	 * @param { object } parameters
	 */
	readonly Pipeline_GetAllApplicationsForInternalContact: (parameters: {
		query: { archive: boolean };
	}) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;
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
				.pipe(decodeAndMap(array(LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
		},

		Pipeline_GetCountApplicationbyLoanStatus: () => {
			return e.apiClient
				.request({
					url: `/api/Pipeline/GetCountApplicationByFilterTypes`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftApiModelsAdminPipelineApplicationCountsIO));
		},

		Pipeline_GetAllApplicationsForInternalContact: parameters => {
			const encoded = partial({ query: type({ archive: boolean }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Pipeline/GetAllApplicationsForInternalContact`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
		},
	}),
);
