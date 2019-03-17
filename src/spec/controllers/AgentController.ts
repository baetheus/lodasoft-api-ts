import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsAgentAgentFull,
	LELodasoftApiModelsAgentAgentFullIO,
} from '../definitions/LELodasoftApiModelsAgentAgentFull';
import {
	LELodasoftApiModelsAgentReferralSourceModel,
	LELodasoftApiModelsAgentReferralSourceModelIO,
} from '../definitions/LELodasoftApiModelsAgentReferralSourceModel';
import {
	LELodasoftCommonModelsAdminAgentListViewModel,
	LELodasoftCommonModelsAdminAgentListViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentListViewModel';
import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import {
	LELodasoftCommonModelsPipelinePipelineApplicationView,
	LELodasoftCommonModelsPipelinePipelineApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, boolean, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type AgentController = {
	readonly Agent_GetAllAgent: () => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminAgentViewModel>>>;

	readonly Agent_GetAllReferralSources: () => Observable<
		AsyncData<Error, Array<LELodasoftApiModelsAgentReferralSourceModel>>
	>;

	/**
	 * @param { number } id undefined
	 */
	readonly Agent_GetAgentbyId: (id: number) => Observable<AsyncData<Error, LELodasoftApiModelsAgentAgentFull>>;

	/**
	 * @param { boolean } sendInvite undefined
	 * @param { object } parameters
	 */
	readonly Agent_UpsertAgent: (
		sendInvite: boolean,
		parameters: { body: LELodasoftApiModelsAgentAgentFull },
	) => Observable<AsyncData<Error, LELodasoftApiModelsAgentAgentFull>>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_InviteAgent: (agentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_DeleteAgent: (agentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_GetAllApplicationInfo: (
		agentId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>>;

	readonly Agent_GetAllAgentLists: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsAdminAgentListViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Agent_InsertAgentList: (parameters: {
		body: LELodasoftCommonModelsAdminAgentListViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminAgentListViewModel>>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_GetAgentListsByAgentId: (
		agentId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminAgentListViewModel>>>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_GetAgentListById: (
		agentListId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminAgentListViewModel>>;

	/**
	 * @param { number } agentListId undefined
	 * @param { object } parameters
	 */
	readonly Agent_UpdateAgentList: (
		agentListId: number,
		parameters: { body: LELodasoftCommonModelsAdminAgentListViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminAgentListViewModel>>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_DeleteAgentList: (agentListId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_GetAgentsByAgentListId: (
		agentListId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminAgentViewModel>>>;

	/**
	 * @param { number } agentListId undefined
	 * @param { number } agentId undefined
	 */
	readonly Agent_AddAgentToAgentList: (agentListId: number, agentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } agentListId undefined
	 * @param { number } agentId undefined
	 */
	readonly Agent_RemoveAgentFromAgentList: (
		agentListId: number,
		agentId: number,
	) => Observable<AsyncData<Error, unknown>>;
};

export const agentController = asks(
	(e: { apiClient: TAPIClient }): AgentController => ({
		Agent_GetAllAgent: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/AllAgent`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAgentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Agent_GetAllReferralSources: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/AllReferralSources`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAgentReferralSourceModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Agent_GetAgentbyId: id => {
			return e.apiClient
				.request({
					url: `/api/Agent/GetAgent/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAgentAgentFullIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Agent_UpsertAgent: (sendInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsAgentAgentFullIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/UpsertAgent/${encodeURIComponent(boolean.encode(sendInvite).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAgentAgentFullIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Agent_InviteAgent: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/InviteAgent/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Agent_DeleteAgent: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/DeleteAgent/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Agent_GetAllApplicationInfo: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/GetAllApplicationInfo`,
					method: 'GET',
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

		Agent_GetAllAgentLists: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAgentListViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Agent_InsertAgentList: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/lists`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminAgentListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Agent_GetAgentListsByAgentId: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/lists`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAgentListViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Agent_GetAgentListById: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminAgentListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Agent_UpdateAgentList: (agentListId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminAgentListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Agent_DeleteAgentList: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Agent_GetAgentsByAgentListId: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}/agents`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAgentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Agent_AddAgentToAgentList: (agentListId, agentId) => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(
						number.encode(agentListId).toString(),
					)}/agents/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Agent_RemoveAgentFromAgentList: (agentListId, agentId) => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(
						number.encode(agentListId).toString(),
					)}/agents/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},
	}),
);
