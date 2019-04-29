import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageDependentViewModel,
	LELodasoftCommonModelsMortgageDependentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageDependentController = {
	/**
	 * @param { number } dependentId undefined
	 */
	readonly MortgageDependent_GetDependentById: (
		dependentId: number,
	) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;

	/**
	 * @param { number } dependentId undefined
	 * @param { object } parameters
	 */
	readonly MortgageDependent_UpdateDependent: (
		dependentId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDependentViewModel },
	) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;

	/**
	 * @param { number } dependentId undefined
	 */
	readonly MortgageDependent_DeleteDependent: (dependentId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageDependent_InsertDependent: (parameters: {
		body: LELodasoftCommonModelsMortgageDependentViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;
};

export const mortgageDependentController = asks(
	(e: { apiClient: TAPIClient }): MortgageDependentController => ({
		MortgageDependent_GetDependentById: dependentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModelIO));
		},

		MortgageDependent_UpdateDependent: (dependentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModelIO));
		},

		MortgageDependent_DeleteDependent: dependentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/dependents/${encodeURIComponent(number.encode(dependentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		MortgageDependent_InsertDependent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/dependents`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModelIO));
		},
	}),
);
