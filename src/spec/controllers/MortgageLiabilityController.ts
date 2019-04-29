import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageLiabilityViewModel,
	LELodasoftCommonModelsMortgageLiabilityViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageLiabilityController = {
	/**
	 * @param { number } liabilityId undefined
	 */
	readonly MortgageLiability_GetLiabilityById: (
		liabilityId: number,
	) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;

	/**
	 * @param { number } liabilityId undefined
	 * @param { object } parameters
	 */
	readonly MortgageLiability_UpdateLiability: (
		liabilityId: number,
		parameters: { body: LELodasoftCommonModelsMortgageLiabilityViewModel },
	) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;

	/**
	 * @param { number } liabilityId undefined
	 */
	readonly MortgageLiability_DeleteLiability: (liabilityId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageLiability_InsertLiability: (parameters: {
		body: LELodasoftCommonModelsMortgageLiabilityViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;

	/**
	 * @param { number } liabilityId undefined
	 * @param { object } parameters
	 */
	readonly MortgageLiability_InsertAddress: (
		liabilityId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};

export const mortgageLiabilityController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageLiabilityController => ({
		MortgageLiability_GetLiabilityById: liabilityId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/liabilities/${encodeURIComponent(
					number.encode(liabilityId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModelIO));
		},

		MortgageLiability_UpdateLiability: (liabilityId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/liabilities/${encodeURIComponent(
					number.encode(liabilityId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModelIO));
		},

		MortgageLiability_DeleteLiability: liabilityId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/liabilities/${encodeURIComponent(
					number.encode(liabilityId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		MortgageLiability_InsertLiability: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/liabilities`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModelIO));
		},

		MortgageLiability_InsertAddress: (liabilityId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/liabilities/${encodeURIComponent(
					number.encode(liabilityId).toString(),
				)}/address`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},
	}),
);
