import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, dictionary, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type PublicAPIController = {
	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetUserListPrimaryRole: (
		companyGuid: string,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsPublicApiUserViewModel>>>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetUserList: (companyGuid: string) => Observable<AsyncData<Error, { [key: string]: string }>>;

	/**
	 * @param { string } companyGuid undefined
	 */
	readonly PublicAPI_GetLoanPurposes: (
		companyGuid: string,
	) => Observable<AsyncData<Error, { [key: string]: string }>>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostLodasoftLead: (
		companyGuid: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLead },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userId undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostBestReferralLead: (
		companyGuid: string,
		userId: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLead },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { string } userId undefined
	 * @param { object } parameters
	 */
	readonly PublicAPI_PostZillowLead: (
		companyGuid: string,
		userId: string,
		parameters: { body: LELodasoftCommonModelsLeadsProviderModelsZillowLead },
	) => Observable<AsyncData<Error, unknown>>;
};

export const publicAPIController = asks(
	(e: { apiClient: TAPIClient }): PublicAPIController => ({
		PublicAPI_GetUserListPrimaryRole: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/PublicApi/GetUserListPrimaryRole/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsPublicApiUserViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		PublicAPI_GetUserList: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/PublicApi/GetUserList/${encodeURIComponent(string.encode(companyGuid).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								dictionary(string, string)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		PublicAPI_GetLoanPurposes: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/PublicApi/GetLoanPurposes/${encodeURIComponent(string.encode(companyGuid).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								dictionary(string, string)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		PublicAPI_PostLodasoftLead: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/PublicApi/PostLead/${encodeURIComponent(string.encode(companyGuid).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		PublicAPI_PostBestReferralLead: (companyGuid, userId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLeadIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/PublicApi/PostBestReferralLead/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		PublicAPI_PostZillowLead: (companyGuid, userId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/PublicApi/PostZillowLead/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'POST',

					body: encoded.body,
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
