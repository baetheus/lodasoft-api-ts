import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, type, boolean, array } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type MortgageController = {
	/**
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_GetMortgageById: (
		mortgageId: number,
	) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * @param { number } mortgageId undefined
	 * @param { object } parameters
	 */
	readonly Mortgage_UpdateMortgage: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_DeleteMortgage: (mortgageId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Mortgage_GetMortgageByApplicationId: (parameters: {
		query: { applicationId: number };
	}) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * Inserts a MORTGAGE model. Set the applicationId to link to a loan.
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertMortgage: (parameters: {
		query?: { mapFromApplication: Option<boolean> };
		body: LELodasoftCommonModelsMortgageMortgageViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * @param { number } mortgageId undefined
	 * @param { object } parameters
	 */
	readonly Mortgage_ResetMortgage: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * Import DU
	 * @param { number } loanId - id of the loan to import du 3.2
	 * @param { number } mortgageId - id of the to mortgage import du 3.2
	 */
	readonly Mortgage_ImportDu: (
		loanId: number,
		mortgageId: number,
	) => Observable<LELodasoftCommonModelsMortgageMortgageViewModel>;

	/**
	 * Export DU
	 * @param { number } loanId - id of the loan to export mortgage to du 3.2
	 */
	readonly Mortgage_ExportDu: (loanId: number) => Observable<unknown>;

	/**
	 * Insert Subject Property for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertSubjectProperty: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel },
	) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;

	/**
	 * Insert Mortgage Term for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertMortgageTerm: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageTermViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageTermViewModel>;

	/**
	 * Insert Transaction Detail for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertTransactionDetail: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageTransactionDetailViewModel },
	) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;

	/**
	 * Get Borrower by Mortgage Id
	 * @param { number } mortgageId undefined
	 */
	readonly Mortgage_GetBorrowersByMortgageId: (
		mortgageId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;

	/**
	 * Insert Borrower for Mortgage
	 * @param { number } mortgageId - id of the mortgage
	 * @param { object } parameters
	 */
	readonly Mortgage_InsertBorrower: (
		mortgageId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;
};

export const mortgageController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageController => ({
		Mortgage_GetMortgageById: mortgageId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_UpdateMortgage: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_DeleteMortgage: mortgageId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Mortgage_GetMortgageByApplicationId: parameters => {
			const encoded = partial({ query: type({ applicationId: number }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_InsertMortgage: parameters => {
			const encoded = partial({
				query: type({ mapFromApplication: createOptionFromNullable(boolean, 'mapFromApplication') }),
				body: LELodasoftCommonModelsMortgageMortgageViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_ResetMortgage: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/reset`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_ImportDu: (loanId, mortgageId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/import-du/${encodeURIComponent(number.encode(mortgageId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageViewModelIO));
		},

		Mortgage_ExportDu: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(loanId).toString())}/export-du`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Mortgage_InsertSubjectProperty: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(
					number.encode(mortgageId).toString(),
				)}/subjectproperty`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
		},

		Mortgage_InsertMortgageTerm: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageTermViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(
					number.encode(mortgageId).toString(),
				)}/mortgageterm`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageTermViewModelIO));
		},

		Mortgage_InsertTransactionDetail: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(
					number.encode(mortgageId).toString(),
				)}/transactiondetail`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
		},

		Mortgage_GetBorrowersByMortgageId: mortgageId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/borrowers`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO)));
		},

		Mortgage_InsertBorrower: (mortgageId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgages/${encodeURIComponent(number.encode(mortgageId).toString())}/borrowers`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
		},
	}),
);
