import { TAPIClient } from '../client/client';
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
	LELodasoftCommonModelsAdminAgentNoteViewModel,
	LELodasoftCommonModelsAdminAgentNoteViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentNoteViewModel';
import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import {
	LELodasoftCommonModelsPipelinePipelineApplicationView,
	LELodasoftCommonModelsPipelinePipelineApplicationViewIO,
} from '../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, boolean, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type AgentController = {
	readonly Agent_GetAllAgent: () => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;

	readonly Agent_GetAllReferralSources: () => Observable<Array<LELodasoftApiModelsAgentReferralSourceModel>>;

	/**
	 * @param { number } id undefined
	 */
	readonly Agent_GetAgentbyId: (id: number) => Observable<LELodasoftApiModelsAgentAgentFull>;

	/**
	 * @param { boolean } sendInvite undefined
	 * @param { object } parameters
	 */
	readonly Agent_UpsertAgent: (
		sendInvite: boolean,
		parameters: { body: LELodasoftApiModelsAgentAgentFull },
	) => Observable<LELodasoftApiModelsAgentAgentFull>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_InviteAgent: (agentId: number) => Observable<unknown>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_DeleteAgent: (agentId: number) => Observable<unknown>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_GetAllApplicationInfo: (
		agentId: number,
	) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;

	readonly Agent_GetAllAgentLists: () => Observable<Array<LELodasoftCommonModelsAdminAgentListViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Agent_InsertAgentList: (parameters: {
		body: LELodasoftCommonModelsAdminAgentListViewModel;
	}) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_GetAgentListsByAgentId: (
		agentId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminAgentListViewModel>>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_GetAgentListById: (agentListId: number) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;

	/**
	 * @param { number } agentListId undefined
	 * @param { object } parameters
	 */
	readonly Agent_UpdateAgentList: (
		agentListId: number,
		parameters: { body: LELodasoftCommonModelsAdminAgentListViewModel },
	) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_DeleteAgentList: (agentListId: number) => Observable<unknown>;

	/**
	 * @param { number } agentListId undefined
	 */
	readonly Agent_GetAgentsByAgentListId: (
		agentListId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;

	/**
	 * @param { number } agentListId undefined
	 * @param { number } agentId undefined
	 */
	readonly Agent_AddAgentToAgentList: (agentListId: number, agentId: number) => Observable<unknown>;

	/**
	 * @param { number } agentListId undefined
	 * @param { number } agentId undefined
	 */
	readonly Agent_RemoveAgentFromAgentList: (agentListId: number, agentId: number) => Observable<unknown>;

	/**
	 * @param { number } agentId undefined
	 * @param { object } parameters
	 */
	readonly Agent_AddAgentNote: (
		agentId: number,
		parameters: { body: LELodasoftCommonModelsAdminAgentNoteViewModel },
	) => Observable<unknown>;

	/**
	 * @param { number } agentId undefined
	 */
	readonly Agent_GetAgentNotes: (agentId: number) => Observable<Array<LELodasoftCommonModelsAdminAgentNoteViewModel>>;
};

export const agentController = asks(
	(e: { apiClient: TAPIClient }): AgentController => ({
		Agent_GetAllAgent: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/AllAgent`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentViewModelIO)));
		},

		Agent_GetAllReferralSources: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/AllReferralSources`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsAgentReferralSourceModelIO)));
		},

		Agent_GetAgentbyId: id => {
			return e.apiClient
				.request({
					url: `/api/Agent/GetAgent/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftApiModelsAgentAgentFullIO));
		},

		Agent_UpsertAgent: (sendInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsAgentAgentFullIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/UpsertAgent/${encodeURIComponent(boolean.encode(sendInvite).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftApiModelsAgentAgentFullIO));
		},

		Agent_InviteAgent: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/InviteAgent/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_DeleteAgent: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/DeleteAgent/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_GetAllApplicationInfo: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/GetAllApplicationInfo`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
		},

		Agent_GetAllAgentLists: () => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentListViewModelIO)));
		},

		Agent_InsertAgentList: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/lists`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModelIO));
		},

		Agent_GetAgentListsByAgentId: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/lists`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentListViewModelIO)));
		},

		Agent_GetAgentListById: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModelIO));
		},

		Agent_UpdateAgentList: (agentListId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModelIO));
		},

		Agent_DeleteAgentList: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_GetAgentsByAgentListId: agentListId => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(number.encode(agentListId).toString())}/agents`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentViewModelIO)));
		},

		Agent_AddAgentToAgentList: (agentListId, agentId) => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(
						number.encode(agentListId).toString(),
					)}/agents/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_RemoveAgentFromAgentList: (agentListId, agentId) => {
			return e.apiClient
				.request({
					url: `/api/Agent/lists/${encodeURIComponent(
						number.encode(agentListId).toString(),
					)}/agents/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_AddAgentNote: (agentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminAgentNoteViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/note`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(unknownType));
		},

		Agent_GetAgentNotes: agentId => {
			return e.apiClient
				.request({
					url: `/api/Agent/${encodeURIComponent(number.encode(agentId).toString())}/notes`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentNoteViewModelIO)));
		},
	}),
);
