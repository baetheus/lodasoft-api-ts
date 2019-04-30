import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsFileExportDocumentModel,
	LELodasoftApiModelsFileExportDocumentModelIO,
} from '../definitions/LELodasoftApiModelsFileExportDocumentModel';
import {
	LELodasoftCommonModelsAdminTrackingViewModel,
	LELodasoftCommonModelsAdminTrackingViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import {
	LELodasoftCommonModelsLoanExportDocFilesRequest,
	LELodasoftCommonModelsLoanExportDocFilesRequestIO,
} from '../definitions/LELodasoftCommonModelsLoanExportDocFilesRequest';
import {
	LELodasoftDataAccessDbModelsAdminDocFileModel,
	LELodasoftDataAccessDbModelsAdminDocFileModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, number, boolean, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type FileController = {
	/**
	 * @param { string } guid undefined
	 */
	readonly File_TrackingFile: (guid: string) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;

	/**
	 * @param { string } guid undefined
	 */
	readonly File_GetDocFile: (guid: string) => Observable<LELodasoftDataAccessDbModelsAdminDocFileModel>;

	/**
	 * @param { string } guid undefined
	 */
	readonly File_RemoveFile: (guid: string) => Observable<LELodasoftDataAccessDbModelsAdminDocFileModel>;

	/**
	 * @param { number } taskId undefined
	 * @param { object } [parameters]
	 */
	readonly File_UpsertFileFromTask: (
		taskId: number,
		parameters: { query?: { autoTransition: Option<boolean> } },
	) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;

	/**
	 * @param { number } loanDocId undefined
	 */
	readonly File_UpsertFileFromLoanDoc: (
		loanDocId: number,
	) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;

	/**
	 * @param { number } appId undefined
	 */
	readonly File_GetFileForExport: (appId: number) => Observable<Array<LELodasoftApiModelsFileExportDocumentModel>>;

	/**
	 * @param { string } fileGuid undefined
	 * @param { string } downloadUserId undefined
	 */
	readonly File_DownloadFile: (fileGuid: string, downloadUserId: string) => Observable<unknown>;

	/**
	 * @param { string } fileGuid undefined
	 * @param { string } userId undefined
	 */
	readonly File_ViewFile: (fileGuid: string, userId: string) => Observable<unknown>;

	/**
	 * @param { boolean } asPDF undefined
	 * @param { object } parameters
	 */
	readonly File_ExportFile: (
		asPDF: boolean,
		parameters: { body: LELodasoftCommonModelsLoanExportDocFilesRequest },
	) => Observable<unknown>;

	/**
	 * @param { string } fileGuid undefined
	 */
	readonly File_ConvertToPdf: (fileGuid: string) => Observable<string>;
};

export const fileController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): FileController => ({
		File_TrackingFile: guid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/TrackingFile/${encodeURIComponent(string.encode(guid).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminTrackingViewModelIO)));
		},

		File_GetDocFile: guid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/GetDocFile/${encodeURIComponent(string.encode(guid).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminDocFileModelIO));
		},

		File_RemoveFile: guid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/RemoveFile/${encodeURIComponent(string.encode(guid).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminDocFileModelIO));
		},

		File_UpsertFileFromTask: (taskId, parameters) => {
			const encoded = partial({
				query: type({ autoTransition: createOptionFromNullable(boolean, 'autoTransition') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/UpsertFileFromTask/${encodeURIComponent(number.encode(taskId).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
		},

		File_UpsertFileFromLoanDoc: loanDocId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/UpsertFileFromLoanDoc/${encodeURIComponent(
					number.encode(loanDocId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
		},

		File_GetFileForExport: appId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/GetFileForExport/${encodeURIComponent(number.encode(appId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftApiModelsFileExportDocumentModelIO)));
		},

		File_DownloadFile: (fileGuid, downloadUserId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/DownloadFile/${encodeURIComponent(
					string.encode(fileGuid).toString(),
				)}/${encodeURIComponent(string.encode(downloadUserId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		File_ViewFile: (fileGuid, userId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/ViewFile/${encodeURIComponent(
					string.encode(fileGuid).toString(),
				)}/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		File_ExportFile: (asPDF, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanExportDocFilesRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/ExportFile/${encodeURIComponent(boolean.encode(asPDF).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		File_ConvertToPdf: fileGuid => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/File/convert-to-pdf/${encodeURIComponent(string.encode(fileGuid).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(string));
		},
	}),
);
