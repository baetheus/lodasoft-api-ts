import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageMortgageTermViewModel,
	LELodasoftCommonModelsMortgageMortgageTermViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageTermController = {
	/**
	 * @param { number } mortgageTermId undefined
	 */
	readonly MortgageTerm_GetMortgageTermById: (
		mortgageTermId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageTermViewModel>>;

	/**
	 * @param { number } mortgageTermId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTerm_UpdateMortgageTerm: (
		mortgageTermId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageTermViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageTermViewModel>>;

	/**
	 * @param { number } mortgageTermId undefined
	 */
	readonly MortgageTerm_DeleteMortgageTerm: (mortgageTermId: number) => Observable<AsyncData<Error, unknown>>;
};

export const mortgageTermController = asks(
	(e: { apiClient: TAPIClient }): MortgageTermController => ({
		MortgageTerm_GetMortgageTermById: mortgageTermId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageTermViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageTerm_UpdateMortgageTerm: (mortgageTermId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageTermViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageTerm_DeleteMortgageTerm: mortgageTermId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/mortgageterms/${encodeURIComponent(number.encode(mortgageTermId).toString())}`,
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
