import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePhoneViewModel,
	LELodasoftCommonModelsMortgagePhoneViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgagePhoneController = {
	/**
	 * @param { number } phoneId undefined
	 */
	readonly MortgagePhone_GetPhoneById: (phoneId: number) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;

	/**
	 * @param { number } phoneId undefined
	 * @param { object } parameters
	 */
	readonly MortgagePhone_UpdatePhone: (
		phoneId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePhoneViewModel },
	) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;

	/**
	 * @param { number } phoneId undefined
	 */
	readonly MortgagePhone_DeletePhone: (phoneId: number) => Observable<unknown>;
};

export const mortgagePhoneController = asks(
	(e: { apiClient: TAPIClient }): MortgagePhoneController => ({
		MortgagePhone_GetPhoneById: phoneId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModelIO));
		},

		MortgagePhone_UpdatePhone: (phoneId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModelIO));
		},

		MortgagePhone_DeletePhone: phoneId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
