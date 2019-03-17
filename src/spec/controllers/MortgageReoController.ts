import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageReoViewModel,
	LELodasoftCommonModelsMortgageReoViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageReoController = {
	/**
	 * @param { number } reoId undefined
	 */
	readonly MortgageReo_GetReoById: (
		reoId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageReoViewModel>>;

	/**
	 * @param { number } reoId undefined
	 * @param { object } parameters
	 */
	readonly MortgageReo_UpdateReo: (
		reoId: number,
		parameters: { body: LELodasoftCommonModelsMortgageReoViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageReoViewModel>>;

	/**
	 * @param { number } reoId undefined
	 */
	readonly MortgageReo_DeleteReo: (reoId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageReo_InsertReo: (parameters: {
		body: LELodasoftCommonModelsMortgageReoViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageReoViewModel>>;

	/**
	 * @param { number } reoId undefined
	 * @param { object } parameters
	 */
	readonly MortgageReo_InsertAddress: (
		reoId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageReoController = asks(
	(e: { apiClient: TAPIClient }): MortgageReoController => ({
		MortgageReo_GetReoById: reoId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/reos/${encodeURIComponent(number.encode(reoId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageReoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageReo_UpdateReo: (reoId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/reos/${encodeURIComponent(number.encode(reoId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageReoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageReo_DeleteReo: reoId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/reos/${encodeURIComponent(number.encode(reoId).toString())}`,
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

		MortgageReo_InsertReo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/reos`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageReoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageReo_InsertAddress: (reoId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/reos/${encodeURIComponent(number.encode(reoId).toString())}/address`,
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
