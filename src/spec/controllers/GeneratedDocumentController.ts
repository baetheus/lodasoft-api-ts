import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminGenerateDocumentRequest,
	LELodasoftCommonModelsAdminGenerateDocumentRequestIO,
} from '../definitions/LELodasoftCommonModelsAdminGenerateDocumentRequest';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { string, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type GeneratedDocumentController = {
	/**
	 * @param { object } parameters
	 */
	readonly GeneratedDocument_GenerateDocument: (parameters: {
		body: LELodasoftCommonModelsAdminGenerateDocumentRequest;
	}) => Observable<string>;
};

export const generatedDocumentController = asks(
	(e: { apiClient: TAPIClient }): GeneratedDocumentController => ({
		GeneratedDocument_GenerateDocument: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminGenerateDocumentRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/generated-documents`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(string));
		},
	}),
);
