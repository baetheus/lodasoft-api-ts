import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageResidencyAddressViewModel,
	LELodasoftCommonModelsMortgageResidencyAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageResidencyAddressController = {
	/**
	 * @param { number } residencyAddressId undefined
	 */
	readonly MortgageResidencyAddress_GetResidencyAddressById: (
		residencyAddressId: number,
	) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;

	/**
	 * @param { number } residencyAddressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_UpdateResidencyAddress: (
		residencyAddressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageResidencyAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;

	/**
	 * @param { number } residencyAddressId undefined
	 */
	readonly MortgageResidencyAddress_DeleteResidencyAddress: (residencyAddressId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_InsertResidencyAddress: (parameters: {
		body: LELodasoftCommonModelsMortgageResidencyAddressViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;

	/**
	 * @param { number } residencyAddressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_InsertAddress: (
		residencyAddressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};

export const mortgageResidencyAddressController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageResidencyAddressController => ({
		MortgageResidencyAddress_GetResidencyAddressById: residencyAddressId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/residencyaddresses/${encodeURIComponent(
					number.encode(residencyAddressId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
		},

		MortgageResidencyAddress_UpdateResidencyAddress: (residencyAddressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/residencyaddresses/${encodeURIComponent(
					number.encode(residencyAddressId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
		},

		MortgageResidencyAddress_DeleteResidencyAddress: residencyAddressId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/residencyaddresses/${encodeURIComponent(
					number.encode(residencyAddressId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		MortgageResidencyAddress_InsertResidencyAddress: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/residencyaddresses`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
		},

		MortgageResidencyAddress_InsertAddress: (residencyAddressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/residencyaddresses/${encodeURIComponent(
					number.encode(residencyAddressId).toString(),
				)}/address`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},
	}),
);
