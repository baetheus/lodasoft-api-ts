import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, partial, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

import { TAPIClient } from '../client/client';
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
import { decodeAndMap } from '../utils/utils';

export type LookupController = {
	/**
	 * Get all roles for user's company
	 */
	readonly Lookup_getAllRolesByCompanyId: () => Observable<Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>;

	/**
	 * Get all users
	 */
	readonly Lookup_getAllUsers: () => Observable<Array<LELodasoftApiModelsUserUserLookupView>>;

	/**
	 * Get list of los providers
	 * @param { object } [parameters]
	 */
	readonly Lookup_GetLosProviders: (parameters: {
		query?: { providerId: Option<number> };
	}) => Observable<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;

	/**
	 * Get loan statuses for loan purpose/loan status by user and role
	 * @param { number } loanPurposeId -
	 * @param { number } loanStatusId -
	 */
	readonly Lookup_GetLoanStatusForLoanPurpose: (
		loanPurposeId: number,
		loanStatusId: number,
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

	/**
	 * Get lead statuses for loan purpose/loan status by user and role
	 * @param { number } loanPurposeId -
	 * @param { number } loanStatusId -
	 */
	readonly Lookup_GetLeadStatusForLoanPurpose: (
		loanPurposeId: number,
		loanStatusId: number,
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
};

export const lookupController = asks(
	(e: { apiClient: TAPIClient }): LookupController => ({
		Lookup_getAllRolesByCompanyId: () => {
			return e.apiClient
				.request({
					url: `/api/Lookup/getAllRoles`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationRoleModelIO)));
		},

		Lookup_getAllUsers: () => {
			return e.apiClient
				.request({
					url: `/api/Lookup/getAllUsers`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsUserUserLookupViewIO)));
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
				.pipe(decodeAndMap(array(LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO)));
		},

		Lookup_GetLoanStatusForLoanPurpose: (loanPurposeId, loanStatusId) => {
			return e.apiClient
				.request({
					url: `/api/Lookup/GetLoanStatusForLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},

		Lookup_GetLeadStatusForLoanPurpose: (loanPurposeId, loanStatusId) => {
			return e.apiClient
				.request({
					url: `/api/Lookup/GetLeadStatusForLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},
	}),
);
