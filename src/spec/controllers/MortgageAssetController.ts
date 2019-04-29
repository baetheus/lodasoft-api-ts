import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageAssetViewModel,
	LELodasoftCommonModelsMortgageAssetViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageAssetController = {
	/**
	 * @param { number } assetId undefined
	 */
	readonly MortgageAsset_GetAssetById: (assetId: number) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;

	/**
	 * @param { number } assetId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAsset_UpdateAsset: (
		assetId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAssetViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;

	/**
	 * @param { number } assetId undefined
	 */
	readonly MortgageAsset_DeleteAsset: (assetId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageAsset_InsertAsset: (parameters: {
		body: LELodasoftCommonModelsMortgageAssetViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;

	/**
	 * @param { number } assetId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAsset_InsertAddress: (
		assetId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};

export const mortgageAssetController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageAssetController => ({
		MortgageAsset_GetAssetById: assetId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModelIO));
		},

		MortgageAsset_UpdateAsset: (assetId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModelIO));
		},

		MortgageAsset_DeleteAsset: assetId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		MortgageAsset_InsertAsset: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/assets`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModelIO));
		},

		MortgageAsset_InsertAddress: (assetId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}/address`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},
	}),
);
