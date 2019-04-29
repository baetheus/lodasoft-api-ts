import { TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersTaskNoteModel,
	LELodasoftApiControllersTaskNoteModelIO,
} from '../definitions/LELodasoftApiControllersTaskNoteModel';
import {
	LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel,
	LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel';
import {
	LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView,
	LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView';
import {
	LELodasoftCommonModelsAdminTrackingViewModel,
	LELodasoftCommonModelsAdminTrackingViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import {
	LELodasoftDataAccessDbModelsAdminLoanDocTaskModel,
	LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, array, void as tvoid, string, type } from 'io-ts';
import { Observable } from 'rxjs';

export type TaskController = {
	/**
	 * Create or Update a Task
	 * @param { object } parameters
	 */
	readonly Task_UpsertLoanDocTask: (parameters: {
		body: LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel;
	}) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>;

	/**
	 * Get a LoanDocTask
	 * @param { number } loanDocTaskId -
	 */
	readonly Task_GetLoanDocTask: (loanDocTaskId: number) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;

	/**
	 * @param { number } loanDocTaskId undefined
	 */
	readonly Task_TrackingFile: (
		loanDocTaskId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;

	/**
	 * Add notes to existing task
	 * @param { number } loandoctaskid -
	 * @param { object } parameters
	 */
	readonly Task_AddTaskNote: (
		loandoctaskid: number,
		parameters: { body: LELodasoftApiControllersTaskNoteModel },
	) => Observable<void>;

	/**
	 * Update the FollowUp date for a task
	 * @param { number } loandoctaskid -
	 * @param { object } parameters
	 */
	readonly Task_UpdateFollowUp: (
		loandoctaskid: number,
		parameters: { query: { followup: string } },
	) => Observable<void>;

	/**
	 * @param { object } parameters
	 */
	readonly Task_UpdateFollowUpBulk: (parameters: {
		query: { followup: string };
		body: Array<number>;
	}) => Observable<unknown>;

	/**
	 * Set Task Status
	 * @param { number } loandoctaskId -
	 * @param { string } status - Lookup LoanDocStatus or OtherTaskStatus
	 */
	readonly Task_SetTaskStatus: (loandoctaskId: number, status: string) => Observable<void>;

	/**
	 * Set condition status for a task
	 * @param { number } loandoctaskId -
	 * @param { number } status -
	 */
	readonly Task_SetConditionStatus: (
		loandoctaskId: number,
		status: number,
	) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>;

	/**
	 * Change Responsible User for Multiple Tasks
	 * @param { string } userId -
	 * @param { object } parameters
	 */
	readonly Task_ChangeResponsibleMultiTasks: (
		userId: string,
		parameters: { body: Array<number> },
	) => Observable<void>;

	/**
	 * Delete a Loan Doc Task
	 * @param { number } loandoctaskid -
	 */
	readonly Task_DeleteLoanDocTask: (loandoctaskid: number) => Observable<void>;

	/**
	 * Delete multiple Loan Doc Tasks
	 * @param { object } parameters
	 */
	readonly Task_DeleteMultiTasks: (parameters: { body: Array<number> }) => Observable<void>;

	/**
	 * @param { number } loandoctaskid undefined
	 */
	readonly Task_GetTaskDashboardViewById: (
		loandoctaskid: number,
	) => Observable<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>;

	/**
	 * @param { string } taskTypeId undefined
	 * @param { string } currentUserId undefined
	 */
	readonly Task_DownloadTemplateFile: (taskTypeId: string, currentUserId: string) => Observable<unknown>;

	/**
	 * @param { string } taskTypeId undefined
	 * @param { string } currentUserId undefined
	 */
	readonly Task_ViewTemplateFile: (taskTypeId: string, currentUserId: string) => Observable<unknown>;
};

export const taskController = asks(
	(e: { apiClient: TAPIClient }): TaskController => ({
		Task_UpsertLoanDocTask: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/UpsertLoanDocTask`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
		},

		Task_GetLoanDocTask: loanDocTaskId => {
			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(number.encode(loanDocTaskId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
		},

		Task_TrackingFile: loanDocTaskId => {
			return e.apiClient
				.request({
					url: `/api/Task/tracking/${encodeURIComponent(number.encode(loanDocTaskId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsAdminTrackingViewModelIO)));
		},

		Task_AddTaskNote: (loandoctaskid, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersTaskNoteModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(number.encode(loandoctaskid).toString())}/AddTaskNote`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_UpdateFollowUp: (loandoctaskid, parameters) => {
			const encoded = partial({ query: type({ followup: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(number.encode(loandoctaskid).toString())}/UpdateFollowUp`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_UpdateFollowUpBulk: parameters => {
			const encoded = partial({ query: type({ followup: string }), body: array(number) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/UpdateFollowUpBulk`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(decodeAndMap(unknownType));
		},

		Task_SetTaskStatus: (loandoctaskId, status) => {
			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(
						number.encode(loandoctaskId).toString(),
					)}/SetTaskStatus/${encodeURIComponent(string.encode(status).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_SetConditionStatus: (loandoctaskId, status) => {
			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(
						number.encode(loandoctaskId).toString(),
					)}/SetConditionStatus/${encodeURIComponent(number.encode(status).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
		},

		Task_ChangeResponsibleMultiTasks: (userId, parameters) => {
			const encoded = partial({ body: array(number) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/ChangeResponsibleMultiTasks/${encodeURIComponent(
						string.encode(userId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_DeleteLoanDocTask: loandoctaskid => {
			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(number.encode(loandoctaskid).toString())}/DeleteLoanDocTask`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_DeleteMultiTasks: parameters => {
			const encoded = partial({ body: array(number) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Task/DeleteMultiTasks`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(tvoid));
		},

		Task_GetTaskDashboardViewById: loandoctaskid => {
			return e.apiClient
				.request({
					url: `/api/Task/${encodeURIComponent(
						number.encode(loandoctaskid).toString(),
					)}/GetTaskDashboardViewById`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO));
		},

		Task_DownloadTemplateFile: (taskTypeId, currentUserId) => {
			return e.apiClient
				.request({
					url: `/api/Task/DownloadTemplateFile/${encodeURIComponent(
						string.encode(taskTypeId).toString(),
					)}/${encodeURIComponent(string.encode(currentUserId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(unknownType));
		},

		Task_ViewTemplateFile: (taskTypeId, currentUserId) => {
			return e.apiClient
				.request({
					url: `/api/Task/ViewTemplateFile/${encodeURIComponent(
						string.encode(taskTypeId).toString(),
					)}/${encodeURIComponent(string.encode(currentUserId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
