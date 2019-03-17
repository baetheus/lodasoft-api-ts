import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { number, string, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
	) => Observable<AsyncData<Error, LELodasoftApiModelsMortgageLosLoanSearchResponseModel>>;

	/**
	 * @param { number } credentialId undefined
	 * @param { string } losIdentifier undefined
	 */
	readonly NewSubmission_ImportFromLos: (
		credentialId: number,
		losIdentifier: string,
	) => Observable<AsyncData<Error, LELodasoftApiModelsMortgageParseDuViewModel>>;

	/**
	 * @param { number } credentialId undefined
	 * @param { number } applicationId undefined
	 */
	readonly NewSubmission_CreateMortgageInIntegratedLos: (
		credentialId: number,
		applicationId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } applicationId undefined
	 * @param { string } credentialId undefined
	 */
	readonly NewSubmission_UpdateMortgageFromIntegratedLos: (
		applicationId: number,
		credentialId: string,
	) => Observable<AsyncData<Error, unknown>>;

	readonly NewSubmission_ParseDu: () => Observable<AsyncData<Error, LELodasoftApiModelsMortgageParseDuViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly NewSubmission_ProcessSubmission: (parameters: {
		body: LELodasoftApiModelsMortgageProcessDuViewModel;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsMortgageProcessDuResponseModel>>;
};

export const newSubmissionController = asks(
	(e: { apiClient: TAPIClient }): NewSubmissionController => ({
		NewSubmission_LosLoanSearch: (credentialId, parameters) => {
			const encoded = partial({
				query: type({
					loanNumber: createOptionFromNullable(string),
					borrowerFirstName: createOptionFromNullable(string),
					borrowerLastName: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/new-submission/los-loan-search/${encodeURIComponent(
						number.encode(credentialId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsMortgageLosLoanSearchResponseModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		NewSubmission_ImportFromLos: (credentialId, losIdentifier) => {
			return e.apiClient
				.request({
					url: `/api/new-submission/import-from-los/${encodeURIComponent(
						number.encode(credentialId).toString(),
					)}/${encodeURIComponent(string.encode(losIdentifier).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsMortgageParseDuViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		NewSubmission_CreateMortgageInIntegratedLos: (credentialId, applicationId) => {
			return e.apiClient
				.request({
					url: `/api/new-submission/create-in-integrated-los/${encodeURIComponent(
						number.encode(credentialId).toString(),
					)}/${encodeURIComponent(number.encode(applicationId).toString())}`,
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

		NewSubmission_UpdateMortgageFromIntegratedLos: (applicationId, credentialId) => {
			return e.apiClient
				.request({
					url: `/api/new-submission/update-from-integrated-los/${encodeURIComponent(
						string.encode(credentialId).toString(),
					)}/${encodeURIComponent(number.encode(applicationId).toString())}`,
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

		NewSubmission_ParseDu: () => {
			return e.apiClient
				.request({
					url: `/api/new-submission/parse-du`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsMortgageParseDuViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		NewSubmission_ProcessSubmission: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsMortgageProcessDuViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/new-submission/process-submission`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsMortgageProcessDuResponseModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
