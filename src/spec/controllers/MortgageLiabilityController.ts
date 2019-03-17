import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageLiabilityViewModel,
	LELodasoftCommonModelsMortgageLiabilityViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageLiabilityController = {
	/**
	 * @param { number } liabilityId undefined
	 */
	readonly MortgageLiability_GetLiabilityById: (
		liabilityId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageLiabilityViewModel>>;

	/**
	 * @param { number } liabilityId undefined
	 * @param { object } parameters
	 */
	readonly MortgageLiability_UpdateLiability: (
		liabilityId: number,
		parameters: { body: LELodasoftCommonModelsMortgageLiabilityViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageLiabilityViewModel>>;

	/**
	 * @param { number } liabilityId undefined
	 */
	readonly MortgageLiability_DeleteLiability: (liabilityId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageLiability_InsertLiability: (parameters: {
		body: LELodasoftCommonModelsMortgageLiabilityViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageLiabilityViewModel>>;

	/**
	 * @param { number } liabilityId undefined
	 * @param { object } parameters
	 */
	readonly MortgageLiability_InsertAddress: (
		liabilityId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageLiabilityController = asks(
	(e: { apiClient: TAPIClient }): MortgageLiabilityController => ({
		MortgageLiability_GetLiabilityById: liabilityId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/liabilities/${encodeURIComponent(number.encode(liabilityId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageLiabilityViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageLiability_UpdateLiability: (liabilityId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/liabilities/${encodeURIComponent(number.encode(liabilityId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageLiabilityViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageLiability_DeleteLiability: liabilityId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/liabilities/${encodeURIComponent(number.encode(liabilityId).toString())}`,
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

		MortgageLiability_InsertLiability: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/liabilities`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageLiabilityViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageLiability_InsertAddress: (liabilityId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/liabilities/${encodeURIComponent(
						number.encode(liabilityId).toString(),
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
