import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, number, boolean, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type FileController = {
	/**
	 * @param { string } guid undefined
	 */
	readonly File_TrackingFile: (
		guid: string,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminTrackingViewModel>>>;

	/**
	 * @param { string } guid undefined
	 */
	readonly File_GetDocFile: (
		guid: string,
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminDocFileModel>>;

	/**
	 * @param { string } guid undefined
	 */
	readonly File_RemoveFile: (
		guid: string,
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminDocFileModel>>;

	/**
	 * @param { number } taskId undefined
	 * @param { object } [parameters]
	 */
	readonly File_UpsertFileFromTask: (
		taskId: number,
		parameters: { query?: { autoTransition: Option<boolean> } },
	) => Observable<AsyncData<Error, LELodasoftDataAccessModelsAdminBorrowerFileDto>>;

	/**
	 * @param { number } loanDocId undefined
	 */
	readonly File_UpsertFileFromLoanDoc: (
		loanDocId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessModelsAdminBorrowerFileDto>>;

	/**
	 * @param { number } appId undefined
	 */
	readonly File_GetFileForExport: (
		appId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsFileExportDocumentModel>>>;

	/**
	 * @param { string } fileGuid undefined
	 * @param { string } downloadUserId undefined
	 */
	readonly File_DownloadFile: (fileGuid: string, downloadUserId: string) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } fileGuid undefined
	 * @param { string } userId undefined
	 */
	readonly File_ViewFile: (fileGuid: string, userId: string) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { boolean } asPDF undefined
	 * @param { object } parameters
	 */
	readonly File_ExportFile: (
		asPDF: boolean,
		parameters: { body: LELodasoftCommonModelsLoanExportDocFilesRequest },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } fileGuid undefined
	 */
	readonly File_ConvertToPdf: (fileGuid: string) => Observable<AsyncData<Error, string>>;
};

export const fileController = asks(
	(e: { apiClient: TAPIClient }): FileController => ({
		File_TrackingFile: guid => {
			return e.apiClient
				.request({
					url: `/api/File/TrackingFile/${encodeURIComponent(string.encode(guid).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminTrackingViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		File_GetDocFile: guid => {
			return e.apiClient
				.request({
					url: `/api/File/GetDocFile/${encodeURIComponent(string.encode(guid).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminDocFileModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		File_RemoveFile: guid => {
			return e.apiClient
				.request({
					url: `/api/File/RemoveFile/${encodeURIComponent(string.encode(guid).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminDocFileModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		File_UpsertFileFromTask: (taskId, parameters) => {
			const encoded = partial({ query: type({ autoTransition: createOptionFromNullable(boolean) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/File/UpsertFileFromTask/${encodeURIComponent(number.encode(taskId).toString())}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsAdminBorrowerFileDtoIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		File_UpsertFileFromLoanDoc: loanDocId => {
			return e.apiClient
				.request({
					url: `/api/File/UpsertFileFromLoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsAdminBorrowerFileDtoIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		File_GetFileForExport: appId => {
			return e.apiClient
				.request({
					url: `/api/File/GetFileForExport/${encodeURIComponent(number.encode(appId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsFileExportDocumentModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		File_DownloadFile: (fileGuid, downloadUserId) => {
			return e.apiClient
				.request({
					url: `/api/File/DownloadFile/${encodeURIComponent(
						string.encode(fileGuid).toString(),
					)}/${encodeURIComponent(string.encode(downloadUserId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		File_ViewFile: (fileGuid, userId) => {
			return e.apiClient
				.request({
					url: `/api/File/ViewFile/${encodeURIComponent(
						string.encode(fileGuid).toString(),
					)}/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		File_ExportFile: (asPDF, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanExportDocFilesRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/File/ExportFile/${encodeURIComponent(boolean.encode(asPDF).toString())}`,
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

		File_ConvertToPdf: fileGuid => {
			return e.apiClient
				.request({
					url: `/api/File/convert-to-pdf/${encodeURIComponent(string.encode(fileGuid).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(string.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},
	}),
);
