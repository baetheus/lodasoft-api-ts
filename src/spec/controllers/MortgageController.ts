import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModel,
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel';
import {
	LELodasoftCommonModelsMortgageMortgageTermViewModel,
	LELodasoftCommonModelsMortgageMortgageTermViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import {
	LELodasoftCommonModelsMortgageMortgageViewModel,
	LELodasoftCommonModelsMortgageMortgageViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageViewModel';
import {
	LELodasoftCommonModelsMortgageSubjectPropertyViewModel,
	LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import {
	LELodasoftCommonModelsMortgageTransactionDetailViewModel,
	LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, type, boolean, array } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageController = {
	/**
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_GetMortgageById: (
		mortgageId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * @param { number } mortgageId undefined
	 * @param { object } parameters
	 */
	readonly Mortgage_UpdateMortgage: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_DeleteMortgage: (mortgageId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Mortgage_GetMortgageByApplicationId: (parameters: {
		query: { applicationId: number };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * Inserts a MORTGAGE model. Set the applicationId to link to a loan.
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertMortgage: (parameters: {
		query?: { mapFromApplication: Option<boolean> };
		body: LELodasoftCommonModelsMortgageMortgageViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * @param { number } mortgageId undefined
	 * @param { object } parameters
	 */
	readonly Mortgage_ResetMortgage: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * Import DU
	 * @param { number } loanId - id of the loan to import du 3.2
	 */
	readonly Mortgage_ImportDu: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageViewModel>>;

	/**
	 * Export DU
	 * @param { number } loanId - id of the loan to export mortgage to du 3.2
	 */
	readonly Mortgage_ExportDu: (loanId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * Insert Subject Property for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertSubjectProperty: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageSubjectPropertyViewModel>>;

	/**
	 * Insert Mortgage Term for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertMortgageTerm: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageTermViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageTermViewModel>>;

	/**
	 * Insert Transaction Detail for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertTransactionDetail: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageTransactionDetailViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageTransactionDetailViewModel>>;

	/**
	 * Get Borrower by Mortgage Id
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_GetBorrowersByMortgageId: (
		mortgageId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>>;

	/**
	 * Insert Borrower for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertBorrower: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;
};

export const mortgageController = asks(
	(e: { apiClient: TAPIClient }): MortgageController => ({
		Mortgage_GetMortgageById: mortgageId => {
			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_UpdateMortgage: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_DeleteMortgage: mortgageId => {
			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
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

		Mortgage_GetMortgageByApplicationId: parameters => {
			const encoded = partial({ query: type({ applicationId: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgages`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_InsertMortgage: parameters => {
			const encoded = partial({
				query: type({ mapFromApplication: createOptionFromNullable(boolean) }),
				body: LELodasoftCommonModelsMortgageMortgageViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgages`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_ResetMortgage: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/reset`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_ImportDu: loanId => {
			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(loanId).toString())}/import-du`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_ExportDu: loanId => {
			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(loanId).toString())}/export-du`,
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

		Mortgage_InsertSubjectProperty: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/subjectproperty`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_InsertMortgageTerm: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/mortgageterm`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageTermViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_InsertTransactionDetail: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/transactiondetail`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageTransactionDetailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Mortgage_GetBorrowersByMortgageId: mortgageId => {
			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/borrowers`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Mortgage_InsertBorrower: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/borrowers`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
