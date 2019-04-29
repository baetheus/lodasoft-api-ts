import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageIncomeController = {
	/**
	 * @param { number } incomeId undefined
	 */
	readonly MortgageIncome_GetIncomeById: (
		incomeId: number,
	) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;

	/**
	 * @param { number } incomeId undefined
	 * @param { object } parameters
	 */
	readonly MortgageIncome_UpdateIncome: (
		incomeId: number,
		parameters: { body: LELodasoftCommonModelsMortgageIncomeViewModel },
	) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;

	/**
	 * @param { number } incomeId undefined
	 */
	readonly MortgageIncome_DeleteIncome: (incomeId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageIncome_InsertIncome: (parameters: {
		body: LELodasoftCommonModelsMortgageIncomeViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;
};

export const mortgageIncomeController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageIncomeController => ({
		MortgageIncome_GetIncomeById: incomeId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModelIO));
		},

		MortgageIncome_UpdateIncome: (incomeId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModelIO));
		},

		MortgageIncome_DeleteIncome: incomeId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/incomes/${encodeURIComponent(number.encode(incomeId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		MortgageIncome_InsertIncome: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/incomes`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModelIO));
		},
	}),
);
