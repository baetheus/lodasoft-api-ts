import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageEmailViewModel,
	LELodasoftCommonModelsMortgageEmailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageEmailController = {
	/**
	 * @param { number } emailId undefined
	 */
	readonly MortgageEmail_GetEmailById: (
		emailId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmailViewModel>>;

	/**
	 * @param { number } emailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageEmail_UpdateEmail: (
		emailId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmailViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmailViewModel>>;

	/**
	 * @param { number } emailId undefined
	 */
	readonly MortgageEmail_DeleteEmail: (emailId: number) => Observable<AsyncData<Error, unknown>>;
};

export const mortgageEmailController = asks(
	(e: { apiClient: TAPIClient }): MortgageEmailController => ({
		MortgageEmail_GetEmailById: emailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageEmailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageEmail_UpdateEmail: (emailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageEmailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageEmail_DeleteEmail: emailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/emails/${encodeURIComponent(number.encode(emailId).toString())}`,
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
