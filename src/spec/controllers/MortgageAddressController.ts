import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageAddressController = {
	/**
	 * @param { number } addressId undefined
	 */
	readonly MortgageAddress_GetAddressById: (
		addressId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;

	/**
	 * @param { number } addressId undefined
	 * @param { object } parameters
	 */
	readonly MortgageAddress_UpdateAddress: (
		addressId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;

	/**
	 * @param { number } addressId undefined
	 */
	readonly MortgageAddress_DeleteAddress: (addressId: number) => Observable<AsyncData<Error, unknown>>;
};

export const mortgageAddressController = asks(
	(e: { apiClient: TAPIClient }): MortgageAddressController => ({
		MortgageAddress_GetAddressById: addressId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
					method: 'GET',
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

		MortgageAddress_UpdateAddress: (addressId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
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

		MortgageAddress_DeleteAddress: addressId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/addresses/${encodeURIComponent(number.encode(addressId).toString())}`,
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
	}),
);
