import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersTaskNoteModel } from '../definitions/LELodasoftApiControllersTaskNoteModel';
import { LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel } from '../definitions/LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel';
import { LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView } from '../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView';
import { LELodasoftCommonModelsAdminTrackingViewModel } from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import { LELodasoftCommonModelsLoanLoanDocTaskViewModel } from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { LELodasoftDataAccessDbModelsAdminLoanDocTaskModel } from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel';
import { Observable } from 'rxjs';
export declare type TaskController = {
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
    readonly Task_TrackingFile: (loanDocTaskId: number) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;
    /**
     * Add notes to existing task
     * @param { number } loandoctaskid -
     * @param { object } parameters
     */
    readonly Task_AddTaskNote: (loandoctaskid: number, parameters: {
        body: LELodasoftApiControllersTaskNoteModel;
    }) => Observable<void>;
    /**
     * Update the FollowUp date for a task
     * @param { number } loandoctaskid -
     * @param { object } parameters
     */
    readonly Task_UpdateFollowUp: (loandoctaskid: number, parameters: {
        query: {
            followup: string;
        };
    }) => Observable<void>;
    /**
     * @param { object } parameters
     */
    readonly Task_UpdateFollowUpBulk: (parameters: {
        query: {
            followup: string;
        };
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
    readonly Task_SetConditionStatus: (loandoctaskId: number, status: number) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>;
    /**
     * Change Responsible User for Multiple Tasks
     * @param { string } userId -
     * @param { object } parameters
     */
    readonly Task_ChangeResponsibleMultiTasks: (userId: string, parameters: {
        body: Array<number>;
    }) => Observable<void>;
    /**
     * Delete a Loan Doc Task
     * @param { number } loandoctaskid -
     */
    readonly Task_DeleteLoanDocTask: (loandoctaskid: number) => Observable<void>;
    /**
     * Delete multiple Loan Doc Tasks
     * @param { object } parameters
     */
    readonly Task_DeleteMultiTasks: (parameters: {
        body: Array<number>;
    }) => Observable<void>;
    /**
     * @param { number } loandoctaskid undefined
     */
    readonly Task_GetTaskDashboardViewById: (loandoctaskid: number) => Observable<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>;
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
export declare const taskController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, TaskController>;
