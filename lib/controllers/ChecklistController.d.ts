import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminChecklistAnswerViewModel } from '../definitions/LELodasoftCommonModelsAdminChecklistAnswerViewModel';
import { Observable } from 'rxjs';
export declare type ChecklistController = {
    /**
     * Get all checklist answers for loan
     * @param { number } checklistId - id of the checklist
     * @param { object } parameters
     */
    readonly Checklist_GetAllByLoanForChecklist: (checklistId: number, parameters: {
        query: {
            loanId: number;
        };
    }) => Observable<Array<LELodasoftCommonModelsAdminChecklistAnswerViewModel>>;
    /**
     * Insert an answer to a checklist
     * @param { object } parameters
     */
    readonly Checklist_InsertChecklistAnswer: (parameters: {
        body: LELodasoftCommonModelsAdminChecklistAnswerViewModel;
    }) => Observable<LELodasoftCommonModelsAdminChecklistAnswerViewModel>;
};
export declare const checklistController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, ChecklistController>;
