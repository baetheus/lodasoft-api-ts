import { TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersDashboardControllerDashboardFilterCriteria,
	LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO,
} from '../definitions/LELodasoftApiControllersDashboardControllerDashboardFilterCriteria';
import {
	LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView,
	LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView';
import {
	LELodasoftDataAccessModelsTaskCountModel,
	LELodasoftDataAccessModelsTaskCountModelIO,
} from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, array } from 'io-ts';
import { Observable } from 'rxjs';

export type DashboardController = {
	/**
	 * @param { object } parameters
	 */
	readonly Dashboard_GetTaskCountsbyFilterCriteria: (parameters: {
		body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria;
	}) => Observable<LELodasoftDataAccessModelsTaskCountModel>;

	/**
	 * @param { number } filter undefined
	 * @param { object } parameters
	 */
	readonly Dashboard_GetTaskByFilterbyFilterCriteria: (
		filter: number,
		parameters: { body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria },
	) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;

	readonly Dashboard_GetTaskCounts: () => Observable<LELodasoftDataAccessModelsTaskCountModel>;

	/**
	 * @param { number } filter undefined
	 */
	readonly Dashboard_GetTaskByFilter: (
		filter: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;

	/**
	 * @param { number } filter undefined
	 * @param { number } appId undefined
	 */
	readonly Dashboard_GetTaskByFilterInApp: (
		filter: number,
		appId: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;

	/**
	 * @param { number } filter undefined
	 * @param { number } leadId undefined
	 */
	readonly Dashboard_GetTaskByFilterInLead: (
		filter: number,
		leadId: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;
};

export const dashboardController = asks(
	(e: { apiClient: TAPIClient }): DashboardController => ({
		Dashboard_GetTaskCountsbyFilterCriteria: parameters => {
			const encoded = partial({
				body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskCountsbyFilterCriteria`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftDataAccessModelsTaskCountModelIO));
		},

		Dashboard_GetTaskByFilterbyFilterCriteria: (filter, parameters) => {
			const encoded = partial({
				body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteriaIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilterbyFilterCriteria/${encodeURIComponent(
						number.encode(filter).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
		},

		Dashboard_GetTaskCounts: () => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskCounts`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftDataAccessModelsTaskCountModelIO));
		},

		Dashboard_GetTaskByFilter: filter => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilter/${encodeURIComponent(number.encode(filter).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
		},

		Dashboard_GetTaskByFilterInApp: (filter, appId) => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilterInApp/${encodeURIComponent(
						number.encode(filter).toString(),
					)}/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
		},

		Dashboard_GetTaskByFilterInLead: (filter, leadId) => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilterInLead/${encodeURIComponent(
						number.encode(filter).toString(),
					)}/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)));
		},
	}),
);
