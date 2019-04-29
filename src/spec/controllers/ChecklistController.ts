import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminChecklistAnswerViewModel,
	LELodasoftCommonModelsAdminChecklistAnswerViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminChecklistAnswerViewModel';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, type, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type ChecklistController = {
	/**
	 * Get all checklist answers for loan
	 * @param { number } checklistId - id of the checklist
	 * @param { object } parameters
	 */
	readonly Checklist_GetAllByLoanForChecklist: (
		checklistId: number,
		parameters: { query: { loanId: number } },
	) => Observable<Array<LELodasoftCommonModelsAdminChecklistAnswerViewModel>>;

	/**
	 * Insert an answer to a checklist
	 * @param { object } parameters
	 */
	readonly Checklist_InsertChecklistAnswer: (parameters: {
		body: LELodasoftCommonModelsAdminChecklistAnswerViewModel;
	}) => Observable<LELodasoftCommonModelsAdminChecklistAnswerViewModel>;
};

export const checklistController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): ChecklistController => ({
		Checklist_GetAllByLoanForChecklist: (checklistId, parameters) => {
			const encoded = partial({ query: type({ loanId: number }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/checklist/answers/${encodeURIComponent(number.encode(checklistId).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminChecklistAnswerViewModelIO)));
		},

		Checklist_InsertChecklistAnswer: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminChecklistAnswerViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/checklist/answers`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminChecklistAnswerViewModelIO));
		},
	}),
);
