import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageAssetViewModel,
	LELodasoftCommonModelsMortgageAssetViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageAssetController = {
	/**
	 * @param { number } assetId undefined
	 */
	readonly MortgageAsset_GetAssetById: (
		assetId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAssetViewModel>>;

	/**
	 * @param { number } assetId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAsset_UpdateAsset: (
		assetId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAssetViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAssetViewModel>>;

	/**
	 * @param { number } assetId undefined
	 */
	readonly MortgageAsset_DeleteAsset: (assetId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageAsset_InsertAsset: (parameters: {
		body: LELodasoftCommonModelsMortgageAssetViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAssetViewModel>>;

	/**
	 * @param { number } assetId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAsset_InsertAddress: (
		assetId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageAssetController = asks(
	(e: { apiClient: TAPIClient }): MortgageAssetController => ({
		MortgageAsset_GetAssetById: assetId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAssetViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageAsset_UpdateAsset: (assetId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAssetViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageAsset_DeleteAsset: assetId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}`,
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

		MortgageAsset_InsertAsset: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/assets`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAssetViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageAsset_InsertAddress: (assetId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/assets/${encodeURIComponent(number.encode(assetId).toString())}/address`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
