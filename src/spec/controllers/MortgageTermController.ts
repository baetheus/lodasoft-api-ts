import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageMortgageTermViewModel,
	LELodasoftCommonModelsMortgageMortgageTermViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageTermController = {
	/**
	 * @param { number } mortgageTermId undefined
	 */
	readonly MortgageTerm_GetMortgageTermById: (
		mortgageTermId: number,
	) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;

	/**
	 * @param { number } mortgageTermId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTerm_UpdateMortgageTerm: (
		mortgageTermId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageTermViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;

	/**
	 * @param { number } mortgageTermId undefined
	 */
	readonly MortgageTerm_DeleteMortgageTerm: (mortgageTermId: number) => Observable<unknown>;
};

export const mortgageTermController = asks(
	(e: { apiClient: TAPIClient }): MortgageTermController => ({
		MortgageTerm_GetMortgageTermById: mortgageTermId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
		},

		MortgageTerm_UpdateMortgageTerm: (mortgageTermId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
		},

		MortgageTerm_DeleteMortgageTerm: mortgageTermId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
