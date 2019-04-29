import { TAPIClient } from '../client/client';
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
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, void as tvoid, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type LoanDocController = {
	/**
	 * Get a loan document
	 * @param { number } loanDocId -
	 */
	readonly LoanDoc_Get: (loanDocId: number) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocModel>;

	/**
	 * Change the document type for a loan document
	 * @param { number } loanDocId -
	 * @param { number } documentTypeId -
	 */
	readonly LoanDoc_ChangeDocumentTypeOfLoanDoc: (loanDocId: number, documentTypeId: number) => Observable<void>;

	/**
	 * Delete a loan document
	 * @param { number } loanDocId -
	 */
	readonly LoanDoc_RemoveLoanDoc: (loanDocId: number) => Observable<void>;

	/**
	 * Update or Insert a doc file to a Loan Document
	 * @param { number } loanDocId -
	 * @param { object } parameters
	 */
	readonly LoanDoc_UpsertFile: (
		loanDocId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminDocFileModel },
	) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;

	/**
	 * Merge doc files into a single file for a Loan Document
	 * @param { number } loanDocId -
	 * @param { object } parameters
	 */
	readonly LoanDoc_MergeDocFiles: (
		loanDocId: number,
		parameters: { body: LELodasoftCommonModelsLoanMergeDocFilesRequest },
	) => Observable<void>;
};

export const loanDocController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): LoanDocController => ({
		LoanDoc_Get: loanDocId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocModelIO));
		},

		LoanDoc_ChangeDocumentTypeOfLoanDoc: (loanDocId, documentTypeId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/LoanDoc/${encodeURIComponent(
					number.encode(loanDocId).toString(),
				)}/ChangeDocumentType/${encodeURIComponent(number.encode(documentTypeId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(tvoid));
		},

		LoanDoc_RemoveLoanDoc: loanDocId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/RemoveLoanDoc`,
				method: 'DELETE',
			}).pipe(decodeAndMap(tvoid));
		},

		LoanDoc_UpsertFile: (loanDocId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminDocFileModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/UpsertFile`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsAdminBorrowerFileDtoIO));
		},

		LoanDoc_MergeDocFiles: (loanDocId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanMergeDocFilesRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/LoanDoc/${encodeURIComponent(number.encode(loanDocId).toString())}/MergeDocFiles`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(tvoid));
		},
	}),
);
