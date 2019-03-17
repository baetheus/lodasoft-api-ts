import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageIncomeController = {
	/**
	 * @param { number } incomeId undefined
	 */
	readonly MortgageIncome_GetIncomeById: (
		incomeId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageIncomeViewModel>>;

	/**
	 * @param { number } incomeId undefined
	 * @param { object } parameters
	 */
	readonly MortgageIncome_UpdateIncome: (
		incomeId: number,
		parameters: { body: LELodasoftCommonModelsMortgageIncomeViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageIncomeViewModel>>;

	/**
	 * @param { number } incomeId undefined
	 */
	readonly MortgageIncome_DeleteIncome: (incomeId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageIncome_InsertIncome: (parameters: {
		body: LELodasoftCommonModelsMortgageIncomeViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageIncomeViewModel>>;
};

export const mortgageIncomeController = asks(
	(e: { apiClient: TAPIClient }): MortgageIncomeController => ({
		MortgageIncome_GetIncomeById: incomeId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageIncomeViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageIncome_UpdateIncome: (incomeId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageIncomeViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageIncome_DeleteIncome: incomeId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
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

		MortgageIncome_InsertIncome: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/incomes`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageIncomeViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
