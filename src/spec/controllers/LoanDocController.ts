import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsLoanMergeDocFilesRequest,
	LELodasoftCommonModelsLoanMergeDocFilesRequestIO,
} from '../definitions/LELodasoftCommonModelsLoanMergeDocFilesRequest';
import {
	LELodasoftDataAccessDbModelsAdminDocFileModel,
	LELodasoftDataAccessDbModelsAdminDocFileModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import {
	LELodasoftDataAccessDbModelsAdminLoanDocModel,
	LELodasoftDataAccessDbModelsAdminLoanDocModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerFileDto,
	LELodasoftDataAccessModelsAdminBorrowerFileDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, void as tvoid, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type LoanDocController = {
	/**
	 * Get a loan document
	 * @param { number } loanDocId -
	 */
	readonly LoanDoc_Get: (
		loanDocId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminLoanDocModel>>;

	/**
	 * Change the document type for a loan document
	 * @param { number } loanDocId -
	 * @param { number } documentTypeId -
	 */
	readonly LoanDoc_ChangeDocumentTypeOfLoanDoc: (
		loanDocId: number,
		documentTypeId: number,
	) => Observable<AsyncData<Error, void>>;

	/**
	 * Delete a loan document
	 * @param { number } loanDocId -
	 */
	readonly LoanDoc_RemoveLoanDoc: (loanDocId: number) => Observable<AsyncData<Error, void>>;

	/**
	 * Update or Insert a doc file to a Loan Document
	 * @param { number } loanDocId -
	 * @param { object } parameters
	 */
	readonly LoanDoc_UpsertFile: (
		loanDocId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminDocFileModel },
	) => Observable<AsyncData<Error, LELodasoftDataAccessModelsAdminBorrowerFileDto>>;

	/**
	 * Merge doc files into a single file for a Loan Document
	 * @param { number } loanDocId -
	 * @param { object } parameters
	 */
	readonly LoanDoc_MergeDocFiles: (
		loanDocId: number,
		parameters: { body: LELodasoftCommonModelsLoanMergeDocFilesRequest },
	) => Observable<AsyncData<Error, void>>;
};

export const loanDocController = asks(
	(e: { apiClient: TAPIClient }): LoanDocController => ({
		LoanDoc_Get: loanDocId => {
			return e.apiClient
				.request({
					url: `/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminLoanDocModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		LoanDoc_ChangeDocumentTypeOfLoanDoc: (loanDocId, documentTypeId) => {
			return e.apiClient
				.request({
					url: `/api/LoanDoc/${encodeURIComponent(
						number.encode(loanDocId).toString(),
					)}/ChangeDocumentType/${encodeURIComponent(number.encode(documentTypeId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(tvoid.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		LoanDoc_RemoveLoanDoc: loanDocId => {
			return e.apiClient
				.request({
					url: `/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/RemoveLoanDoc`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(tvoid.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		LoanDoc_UpsertFile: (loanDocId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminDocFileModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/UpsertFile`,
					method: 'POST',

					body: encoded.body,
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

		LoanDoc_MergeDocFiles: (loanDocId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanMergeDocFilesRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/MergeDocFiles`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(tvoid.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},
	}),
);
