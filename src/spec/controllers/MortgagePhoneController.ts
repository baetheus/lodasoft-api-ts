import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePhoneViewModel,
	LELodasoftCommonModelsMortgagePhoneViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgagePhoneController = {
	/**
	 * @param { number } phoneId undefined
	 */
	readonly MortgagePhone_GetPhoneById: (
		phoneId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePhoneViewModel>>;

	/**
	 * @param { number } phoneId undefined
	 * @param { object } parameters
	 */
	readonly MortgagePhone_UpdatePhone: (
		phoneId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePhoneViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePhoneViewModel>>;

	/**
	 * @param { number } phoneId undefined
	 */
	readonly MortgagePhone_DeletePhone: (phoneId: number) => Observable<AsyncData<Error, unknown>>;
};

export const mortgagePhoneController = asks(
	(e: { apiClient: TAPIClient }): MortgagePhoneController => ({
		MortgagePhone_GetPhoneById: phoneId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgagePhoneViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgagePhone_UpdatePhone: (phoneId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgagePhoneViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgagePhone_DeletePhone: phoneId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/phones/${encodeURIComponent(number.encode(phoneId).toString())}`,
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
