import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminPrequalDetailViewModel,
	LELodasoftCommonModelsAdminPrequalDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, type, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type PrequalDetailController = {
	/**
	 * @param { object } parameters
	 */
	readonly PrequalDetail_GetPrequalDetail: (parameters: {
		query: { applicationId: number };
	}) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;

	/**
	 * @param { object } parameters
	 */
	readonly PrequalDetail_UpsertPrequalDetail: (parameters: {
		body: LELodasoftCommonModelsAdminPrequalDetailViewModel;
	}) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;
};

export const prequalDetailController = asks(
	(e: { apiClient: TAPIClient }): PrequalDetailController => ({
		PrequalDetail_GetPrequalDetail: parameters => {
			const encoded = partial({ query: type({ applicationId: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/prequal-detail`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
		},

		PrequalDetail_UpsertPrequalDetail: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminPrequalDetailViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/prequal-detail`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsAdminPrequalDetailViewModelIO));
		},
	}),
);
