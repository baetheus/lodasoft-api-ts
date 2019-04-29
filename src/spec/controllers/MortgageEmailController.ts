import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageEmailViewModel,
	LELodasoftCommonModelsMortgageEmailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageEmailController = {
	/**
	 * @param { number } emailId undefined
	 */
	readonly MortgageEmail_GetEmailById: (emailId: number) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;

	/**
	 * @param { number } emailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageEmail_UpdateEmail: (
		emailId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmailViewModel },
	) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;

	/**
	 * @param { number } emailId undefined
	 */
	readonly MortgageEmail_DeleteEmail: (emailId: number) => Observable<unknown>;
};

export const mortgageEmailController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageEmailController => ({
		MortgageEmail_GetEmailById: emailId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModelIO));
		},

		MortgageEmail_UpdateEmail: (emailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModelIO));
		},

		MortgageEmail_DeleteEmail: emailId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
