import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel,
	LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel';
import {
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';
import {
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel';
import {
	LELodasoftCommonModelsConfigurationDocumentTemplateViewModel,
	LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type DocumentTemplateController = {
	readonly DocumentTemplate_GetApplicationGlobalMergeFieldKeys: () => Observable<AsyncData<Error, Array<string>>>;

	readonly DocumentTemplate_GetLeadGlobalMergeFieldKeys: () => Observable<AsyncData<Error, Array<string>>>;

	readonly DocumentTemplate_GetAllDocumentTemplates: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>>
	>;

	readonly DocumentTemplate_InsertDocumentTemplate: () => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplateById: (
		documentTemplateId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_UpdateDocumentTemplate: (
		documentTemplateId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_DeleteDocumentTemplate: (
		documentTemplateId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplateFieldsById: (
		documentTemplateId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel>>>;

	/**
	 * @param { number } documentTemplateFieldId undefined
	 * @param { object } parameters
	 */
	readonly DocumentTemplate_UpdateDocumentTemplateField: (
		documentTemplateFieldId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplatePagesById: (
		documentTemplateId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>>;

	/**
	 * @param { number } documentTemplateId undefined
	 * @param { object } parameters
	 */
	readonly DocumentTemplate_UpsertDocumentTemplatePages: (
		documentTemplateId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } documentTemplatePageId undefined
	 */
	readonly DocumentTemplate_DeleteDocumentTemplatePage: (
		documentTemplatePageId: number,
	) => Observable<AsyncData<Error, unknown>>;
};

export const documentTemplateController = asks(
	(e: { apiClient: TAPIClient }): DocumentTemplateController => ({
		DocumentTemplate_GetApplicationGlobalMergeFieldKeys: () => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/app-global-merge-field-keys`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(string)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		DocumentTemplate_GetLeadGlobalMergeFieldKeys: () => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/lead-global-merge-field-keys`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(string)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		DocumentTemplate_GetAllDocumentTemplates: () => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		DocumentTemplate_InsertDocumentTemplate: () => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		DocumentTemplate_GetDocumentTemplateById: documentTemplateId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		DocumentTemplate_UpdateDocumentTemplate: documentTemplateId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		DocumentTemplate_DeleteDocumentTemplate: documentTemplateId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}`,
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

		DocumentTemplate_GetDocumentTemplateFieldsById: documentTemplateId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}/fields`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		DocumentTemplate_UpdateDocumentTemplateField: (documentTemplateFieldId, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/fields/${encodeURIComponent(
						number.encode(documentTemplateFieldId).toString(),
					)}/update`,
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

		DocumentTemplate_GetDocumentTemplatePagesById: documentTemplateId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}/pages`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		DocumentTemplate_UpsertDocumentTemplatePages: (documentTemplateId, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/templates/${encodeURIComponent(
						number.encode(documentTemplateId).toString(),
					)}/pages`,
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

		DocumentTemplate_DeleteDocumentTemplatePage: documentTemplatePageId => {
			return e.apiClient
				.request({
					url: `/api/configuration/document-templates/pages/${encodeURIComponent(
						number.encode(documentTemplatePageId).toString(),
					)}/delete`,
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
