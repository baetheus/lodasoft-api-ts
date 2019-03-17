import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminChecklistAnswerViewModel,
	LELodasoftCommonModelsAdminChecklistAnswerViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminChecklistAnswerViewModel';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, type, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type ChecklistController = {
	/**
	 * Get all checklist answers for loan
	 * @param { number } checklistId - id of the checklist
	 * @param { object } parameters
	 */
	readonly Checklist_GetAllByLoanForChecklist: (
		checklistId: number,
		parameters: { query: { loanId: number } },
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminChecklistAnswerViewModel>>>;

	/**
	 * Insert an answer to a checklist
	 * @param { object } parameters
	 */
	readonly Checklist_InsertChecklistAnswer: (parameters: {
		body: LELodasoftCommonModelsAdminChecklistAnswerViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminChecklistAnswerViewModel>>;
};

export const checklistController = asks(
	(e: { apiClient: TAPIClient }): ChecklistController => ({
		Checklist_GetAllByLoanForChecklist: (checklistId, parameters) => {
			const encoded = partial({ query: type({ loanId: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/checklist/answers/${encodeURIComponent(number.encode(checklistId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminChecklistAnswerViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Checklist_InsertChecklistAnswer: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminChecklistAnswerViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/checklist/answers`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminChecklistAnswerViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
