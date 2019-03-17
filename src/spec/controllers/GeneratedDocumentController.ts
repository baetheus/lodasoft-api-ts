import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminGenerateDocumentRequest,
	LELodasoftCommonModelsAdminGenerateDocumentRequestIO,
} from '../definitions/LELodasoftCommonModelsAdminGenerateDocumentRequest';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { string, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type GeneratedDocumentController = {
	/**
	 * @param { object } parameters
	 */
	readonly GeneratedDocument_GenerateDocument: (parameters: {
		body: LELodasoftCommonModelsAdminGenerateDocumentRequest;
	}) => Observable<AsyncData<Error, string>>;
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
				.pipe(
					map(data =>
						data.chain(value => fromEither(string.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},
	}),
);
