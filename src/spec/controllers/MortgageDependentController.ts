import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageDependentViewModel,
	LELodasoftCommonModelsMortgageDependentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageDependentController = {
	/**
	 * @param { number } dependentId undefined
	 */
	readonly MortgageDependent_GetDependentById: (
		dependentId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDependentViewModel>>;

	/**
	 * @param { number } dependentId undefined
	 * @param { object } parameters
	 */
	readonly MortgageDependent_UpdateDependent: (
		dependentId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDependentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDependentViewModel>>;

	/**
	 * @param { number } dependentId undefined
	 */
	readonly MortgageDependent_DeleteDependent: (dependentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageDependent_InsertDependent: (parameters: {
		body: LELodasoftCommonModelsMortgageDependentViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDependentViewModel>>;
};

export const mortgageDependentController = asks(
	(e: { apiClient: TAPIClient }): MortgageDependentController => ({
		MortgageDependent_GetDependentById: dependentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDependentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageDependent_UpdateDependent: (dependentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDependentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageDependent_DeleteDependent: dependentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
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

		MortgageDependent_InsertDependent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/dependents`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDependentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
