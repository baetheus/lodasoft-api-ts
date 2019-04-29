import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type DocumentTemplateController = {
	readonly DocumentTemplate_GetApplicationGlobalMergeFieldKeys: () => Observable<Array<string>>;

	readonly DocumentTemplate_GetLeadGlobalMergeFieldKeys: () => Observable<Array<string>>;

	readonly DocumentTemplate_GetAllDocumentTemplates: () => Observable<
		Array<LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>
	>;

	readonly DocumentTemplate_InsertDocumentTemplate: () => Observable<unknown>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplateById: (
		documentTemplateId: number,
	) => Observable<LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_UpdateDocumentTemplate: (documentTemplateId: number) => Observable<unknown>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_DeleteDocumentTemplate: (documentTemplateId: number) => Observable<unknown>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplateFieldsById: (
		documentTemplateId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel>>;

	/**
	 * @param { number } documentTemplateFieldId undefined
	 * @param { object } parameters
	 */
	readonly DocumentTemplate_UpdateDocumentTemplateField: (
		documentTemplateFieldId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel },
	) => Observable<unknown>;

	/**
	 * @param { number } documentTemplateId undefined
	 */
	readonly DocumentTemplate_GetDocumentTemplatePagesById: (
		documentTemplateId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>;

	/**
	 * @param { number } documentTemplateId undefined
	 * @param { object } parameters
	 */
	readonly DocumentTemplate_UpsertDocumentTemplatePages: (
		documentTemplateId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel },
	) => Observable<unknown>;

	/**
	 * @param { number } documentTemplatePageId undefined
	 */
	readonly DocumentTemplate_DeleteDocumentTemplatePage: (documentTemplatePageId: number) => Observable<unknown>;
};

export const documentTemplateController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): DocumentTemplateController => ({
		DocumentTemplate_GetApplicationGlobalMergeFieldKeys: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/app-global-merge-field-keys`,
				method: 'GET',
			}).pipe(decodeAndMap(array(string)));
		},

		DocumentTemplate_GetLeadGlobalMergeFieldKeys: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/lead-global-merge-field-keys`,
				method: 'GET',
			}).pipe(decodeAndMap(array(string)));
		},

		DocumentTemplate_GetAllDocumentTemplates: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO)));
		},

		DocumentTemplate_InsertDocumentTemplate: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		DocumentTemplate_GetDocumentTemplateById: documentTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationDocumentTemplateViewModelIO));
		},

		DocumentTemplate_UpdateDocumentTemplate: documentTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		DocumentTemplate_DeleteDocumentTemplate: documentTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		DocumentTemplate_GetDocumentTemplateFieldsById: documentTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}/fields`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO)));
		},

		DocumentTemplate_UpdateDocumentTemplateField: (documentTemplateFieldId, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/fields/${encodeURIComponent(
					number.encode(documentTemplateFieldId).toString(),
				)}/update`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		DocumentTemplate_GetDocumentTemplatePagesById: documentTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}/pages`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO)));
		},

		DocumentTemplate_UpsertDocumentTemplatePages: (documentTemplateId, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/templates/${encodeURIComponent(
					number.encode(documentTemplateId).toString(),
				)}/pages`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		DocumentTemplate_DeleteDocumentTemplatePage: documentTemplatePageId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/configuration/document-templates/pages/${encodeURIComponent(
					number.encode(documentTemplatePageId).toString(),
				)}/delete`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
