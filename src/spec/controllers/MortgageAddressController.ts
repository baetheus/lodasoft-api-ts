import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageAddressController = {
	/**
	 * @param { number } addressId undefined
	 */
	readonly MortgageAddress_GetAddressById: (
		addressId: number,
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;

	/**
	 * @param { number } addressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAddress_UpdateAddress: (
		addressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;

	/**
	 * @param { number } addressId undefined
	 */
	readonly MortgageAddress_DeleteAddress: (addressId: number) => Observable<unknown>;
};

export const mortgageAddressController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageAddressController => ({
		MortgageAddress_GetAddressById: addressId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},

		MortgageAddress_UpdateAddress: (addressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},

		MortgageAddress_DeleteAddress: addressId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
