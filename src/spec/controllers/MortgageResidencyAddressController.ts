import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageResidencyAddressViewModel,
	LELodasoftCommonModelsMortgageResidencyAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageResidencyAddressController = {
	/**
	 * @param { number } residencyAddressId undefined
	 */
	readonly MortgageResidencyAddress_GetResidencyAddressById: (
		residencyAddressId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;

	/**
	 * @param { number } residencyAddressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_UpdateResidencyAddress: (
		residencyAddressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageResidencyAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;

	/**
	 * @param { number } residencyAddressId undefined
	 */
	readonly MortgageResidencyAddress_DeleteResidencyAddress: (
		residencyAddressId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_InsertResidencyAddress: (parameters: {
		body: LELodasoftCommonModelsMortgageResidencyAddressViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;

	/**
	 * @param { number } residencyAddressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageResidencyAddress_InsertAddress: (
		residencyAddressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageResidencyAddressController = asks(
	(e: { apiClient: TAPIClient }): MortgageResidencyAddressController => ({
		MortgageResidencyAddress_GetResidencyAddressById: residencyAddressId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/residencyaddresses/${encodeURIComponent(
						number.encode(residencyAddressId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageResidencyAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageResidencyAddress_UpdateResidencyAddress: (residencyAddressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/residencyaddresses/${encodeURIComponent(
						number.encode(residencyAddressId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageResidencyAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageResidencyAddress_DeleteResidencyAddress: residencyAddressId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/residencyaddresses/${encodeURIComponent(
						number.encode(residencyAddressId).toString(),
					)}`,
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

		MortgageResidencyAddress_InsertResidencyAddress: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/residencyaddresses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageResidencyAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageResidencyAddress_InsertAddress: (residencyAddressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/residencyaddresses/${encodeURIComponent(
						number.encode(residencyAddressId).toString(),
					)}/address`,
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
