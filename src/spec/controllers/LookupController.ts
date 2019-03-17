import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsUserUserLookupView,
	LELodasoftApiModelsUserUserLookupViewIO,
} from '../definitions/LELodasoftApiModelsUserUserLookupView';
import {
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel,
	LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type LookupController = {
	/**
	 * Get all roles for user's company
	 */
	readonly Lookup_getAllRolesByCompanyId: () => Observable<
		AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>
	>;

	/**
	 * Get all users
	 */
	readonly Lookup_getAllUsers: () => Observable<AsyncData<Error, Array<LELodasoftApiModelsUserUserLookupView>>>;

	/**
	 * Get list of los providers
	 * @param { object } [parameters]
	 */
	readonly Lookup_GetLosProviders: (parameters: {
		query?: { providerId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>>;

	/**
	 * Get loan statuses for loan purpose/loan status by user and role
	 * @param { number } loanPurposeId -
	 * @param { number } loanStatusId -
	 */
	readonly Lookup_GetLoanStatusForLoanPurpose: (
		loanPurposeId: number,
		loanStatusId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;

	/**
	 * Get lead statuses for loan purpose/loan status by user and role
	 * @param { number } loanPurposeId -
	 * @param { number } loanStatusId -
	 */
	readonly Lookup_GetLeadStatusForLoanPurpose: (
		loanPurposeId: number,
		loanStatusId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;
};

export const lookupController = asks(
	(e: { apiClient: TAPIClient }): LookupController => ({
		Lookup_getAllRolesByCompanyId: () => {
			return e.apiClient
				.request({
					url: `/api/Lookup/getAllRoles`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationRoleModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lookup_getAllUsers: () => {
			return e.apiClient
				.request({
					url: `/api/Lookup/getAllUsers`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsUserUserLookupViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lookup_GetLosProviders: parameters => {
			const encoded = partial({ query: type({ providerId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Lookup/get-los-providers`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lookup_GetLoanStatusForLoanPurpose: (loanPurposeId, loanStatusId) => {
			return e.apiClient
				.request({
					url: `/api/Lookup/GetLoanStatusForLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lookup_GetLeadStatusForLoanPurpose: (loanPurposeId, loanStatusId) => {
			return e.apiClient
				.request({
					url: `/api/Lookup/GetLeadStatusForLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},
	}),
);
