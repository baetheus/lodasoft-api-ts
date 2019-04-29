import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsMortgageLosLoanSearchResponseModel,
	LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO,
} from '../definitions/LELodasoftApiModelsMortgageLosLoanSearchResponseModel';
import {
	LELodasoftApiModelsMortgageParseDuViewModel,
	LELodasoftApiModelsMortgageParseDuViewModelIO,
} from '../definitions/LELodasoftApiModelsMortgageParseDuViewModel';
import {
	LELodasoftApiModelsMortgageProcessDuResponseModel,
	LELodasoftApiModelsMortgageProcessDuResponseModelIO,
} from '../definitions/LELodasoftApiModelsMortgageProcessDuResponseModel';
import {
	LELodasoftApiModelsMortgageProcessDuViewModel,
	LELodasoftApiModelsMortgageProcessDuViewModelIO,
} from '../definitions/LELodasoftApiModelsMortgageProcessDuViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { number, string, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type NewSubmissionController = {
	/**
	 * @param { number } credentialId undefined
	 * @param { object } [parameters]
	 */
	readonly NewSubmission_LosLoanSearch: (
		credentialId: number,
		parameters: {
			query?: { loanNumber: Option<string>; borrowerFirstName: Option<string>; borrowerLastName: Option<string> };
		},
	) => Observable<LELodasoftApiModelsMortgageLosLoanSearchResponseModel>;

	/**
	 * @param { number } credentialId undefined
	 * @param { string } losIdentifier undefined
	 */
	readonly NewSubmission_ImportFromLos: (
		credentialId: number,
		losIdentifier: string,
	) => Observable<LELodasoftApiModelsMortgageParseDuViewModel>;

	/**
	 * @param { number } credentialId undefined
	 * @param { number } applicationId undefined
	 */
	readonly NewSubmission_CreateMortgageInIntegratedLos: (
		credentialId: number,
		applicationId: number,
	) => Observable<unknown>;

	/**
	 * @param { number } applicationId undefined
	 * @param { string } credentialId undefined
	 */
	readonly NewSubmission_UpdateMortgageFromIntegratedLos: (
		applicationId: number,
		credentialId: string,
	) => Observable<unknown>;

	readonly NewSubmission_ParseDu: () => Observable<LELodasoftApiModelsMortgageParseDuViewModel>;

	/**
	 * @param { object } parameters
	 */
	readonly NewSubmission_ProcessSubmission: (parameters: {
		body: LELodasoftApiModelsMortgageProcessDuViewModel;
	}) => Observable<LELodasoftApiModelsMortgageProcessDuResponseModel>;
};

export const newSubmissionController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): NewSubmissionController => ({
		NewSubmission_LosLoanSearch: (credentialId, parameters) => {
			const encoded = partial({
				query: type({
					loanNumber: createOptionFromNullable(string),
					borrowerFirstName: createOptionFromNullable(string),
					borrowerLastName: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/los-loan-search/${encodeURIComponent(
					number.encode(credentialId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO));
		},

		NewSubmission_ImportFromLos: (credentialId, losIdentifier) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/import-from-los/${encodeURIComponent(
					number.encode(credentialId).toString(),
				)}/${encodeURIComponent(string.encode(losIdentifier).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsMortgageParseDuViewModelIO));
		},

		NewSubmission_CreateMortgageInIntegratedLos: (credentialId, applicationId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/create-in-integrated-los/${encodeURIComponent(
					number.encode(credentialId).toString(),
				)}/${encodeURIComponent(number.encode(applicationId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		NewSubmission_UpdateMortgageFromIntegratedLos: (applicationId, credentialId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/update-from-integrated-los/${encodeURIComponent(
					string.encode(credentialId).toString(),
				)}/${encodeURIComponent(number.encode(applicationId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		NewSubmission_ParseDu: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/parse-du`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftApiModelsMortgageParseDuViewModelIO));
		},

		NewSubmission_ProcessSubmission: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsMortgageProcessDuViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/new-submission/process-submission`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsMortgageProcessDuResponseModelIO));
		},
	}),
);
