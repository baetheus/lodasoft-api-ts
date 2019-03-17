import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, array } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type DashboardController = {
	/**
	 * @param { object } parameters
	 */
	readonly Dashboard_GetTaskCountsbyFilterCriteria: (parameters: {
		body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessModelsTaskCountModel>>;

	/**
	 * @param { number } filter undefined
	 * @param { object } parameters
	 */
	readonly Dashboard_GetTaskByFilterbyFilterCriteria: (
		filter: number,
		parameters: { body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria },
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>>;

	readonly Dashboard_GetTaskCounts: () => Observable<AsyncData<Error, LELodasoftDataAccessModelsTaskCountModel>>;

	/**
	 * @param { number } filter undefined
	 */
	readonly Dashboard_GetTaskByFilter: (
		filter: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>>;

	/**
	 * @param { number } filter undefined
	 * @param { number } appId undefined
	 */
	readonly Dashboard_GetTaskByFilterInApp: (
		filter: number,
		appId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>>;

	/**
	 * @param { number } filter undefined
	 * @param { number } leadId undefined
	 */
	readonly Dashboard_GetTaskByFilterInLead: (
		filter: number,
		leadId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>>;
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsTaskCountModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Dashboard_GetTaskCounts: () => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskCounts`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsTaskCountModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Dashboard_GetTaskByFilter: filter => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilter/${encodeURIComponent(number.encode(filter).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Dashboard_GetTaskByFilterInApp: (filter, appId) => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilterInApp/${encodeURIComponent(
						number.encode(filter).toString(),
					)}/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Dashboard_GetTaskByFilterInLead: (filter, leadId) => {
			return e.apiClient
				.request({
					url: `/api/Dashboard/GetTaskByFilterInLead/${encodeURIComponent(
						number.encode(filter).toString(),
					)}/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},
	}),
);
