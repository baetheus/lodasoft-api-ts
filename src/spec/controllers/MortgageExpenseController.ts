import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageExpenseViewModel,
	LELodasoftCommonModelsMortgageExpenseViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageExpenseController = {
	/**
	 * @param { number } expenseId undefined
	 */
	readonly MortgageExpense_GetExpenseById: (
		expenseId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageExpenseViewModel>>;

	/**
	 * @param { number } expenseId undefined
	 * @param { object } parameters
	 */
	readonly MortgageExpense_UpdateExpense: (
		expenseId: number,
		parameters: { body: LELodasoftCommonModelsMortgageExpenseViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageExpenseViewModel>>;

	/**
	 * @param { number } expenseId undefined
	 */
	readonly MortgageExpense_DeleteExpense: (expenseId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageExpense_InsertExpense: (parameters: {
		body: LELodasoftCommonModelsMortgageExpenseViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageExpenseViewModel>>;
};

export const mortgageExpenseController = asks(
	(e: { apiClient: TAPIClient }): MortgageExpenseController => ({
		MortgageExpense_GetExpenseById: expenseId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageExpenseViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageExpense_UpdateExpense: (expenseId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageExpenseViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageExpense_DeleteExpense: expenseId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/expenses/${encodeURIComponent(number.encode(expenseId).toString())}`,
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

		MortgageExpense_InsertExpense: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/expenses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageExpenseViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
