import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageExpenseViewModel,
	LELodasoftCommonModelsMortgageExpenseViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageExpenseController = {
	/**
	 * @param { number } expenseId undefined
	 */
	readonly MortgageExpense_GetExpenseById: (
		expenseId: number,
	) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;

	/**
	 * @param { number } expenseId undefined
	 * @param { object } parameters
	 */
	readonly MortgageExpense_UpdateExpense: (
		expenseId: number,
		parameters: { body: LELodasoftCommonModelsMortgageExpenseViewModel },
	) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;

	/**
	 * @param { number } expenseId undefined
	 */
	readonly MortgageExpense_DeleteExpense: (expenseId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageExpense_InsertExpense: (parameters: {
		body: LELodasoftCommonModelsMortgageExpenseViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;
};

export const mortgageExpenseController = asks(
	(e: { apiClient: TAPIClient }): MortgageExpenseController => ({
		MortgageExpense_GetExpenseById: expenseId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModelIO));
		},

		MortgageExpense_UpdateExpense: (expenseId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModelIO));
		},

		MortgageExpense_DeleteExpense: expenseId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		MortgageExpense_InsertExpense: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/expenses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModelIO));
		},
	}),
);
