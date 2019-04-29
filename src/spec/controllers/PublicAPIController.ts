import { asks } from 'fp-ts/lib/Reader';
import { array, dictionary, partial, string } from 'io-ts';
import { Observable } from 'rxjs';

import { TAPIClient } from '../client/client';
import {
  LELodasoftCommonModelsLeadsProviderModelsBestReferralLead,
  LELodasoftCommonModelsLeadsProviderModelsBestReferralLeadIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsBestReferralLead';
import {
  LELodasoftCommonModelsLeadsProviderModelsLodasoftLead,
  LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsLodasoftLead';
import {
  LELodasoftCommonModelsLeadsProviderModelsZillowLead,
  LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLead';
import {
  LELodasoftCommonModelsPublicApiUserViewModel,
  LELodasoftCommonModelsPublicApiUserViewModelIO,
} from '../definitions/LELodasoftCommonModelsPublicApiUserViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';

export type PublicAPIController = {
	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetUserListPrimaryRole: (
		companyGuid: string,
	) => Observable<Array<LELodasoftCommonModelsPublicApiUserViewModel>>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetUserList: (companyGuid: string) => Observable<{ [key: string]: string }>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetLoanPurposes: (companyGuid: string) => Observable<{ [key: string]: string }>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostLodasoftLead: (
		companyGuid: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLead },
	) => Observable<unknown>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userId undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostBestReferralLead: (
		companyGuid: string,
		userId: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLead },
	) => Observable<unknown>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userId undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostZillowLead: (
		companyGuid: string,
		userId: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsZillowLead },
	) => Observable<unknown>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userId undefined
	 */
	readonly PublicAPI_PostLendingTreeLeadAsync: (companyGuid: string, userId: string) => Observable<unknown>;
};

export const publicAPIController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): PublicAPIController => ({
		PublicAPI_GetUserListPrimaryRole: companyGuid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/GetUserListPrimaryRole/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsPublicApiUserViewModelIO)));
		},

		PublicAPI_GetUserList: companyGuid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/GetUserList/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(dictionary(string, string)));
		},

		PublicAPI_GetLoanPurposes: companyGuid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/GetLoanPurposes/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(dictionary(string, string)));
		},

		PublicAPI_PostLodasoftLead: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/PostLead/${encodeURIComponent(string.encode(companyGuid).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		PublicAPI_PostBestReferralLead: (companyGuid, userId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLeadIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/PostBestReferralLead/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		PublicAPI_PostZillowLead: (companyGuid, userId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/PostZillowLead/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		PublicAPI_PostLendingTreeLeadAsync: (companyGuid, userId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/PublicApi/PostLendingTreeLead/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
