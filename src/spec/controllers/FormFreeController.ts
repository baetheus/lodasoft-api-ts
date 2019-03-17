import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel,
	LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel';
import {
	LELodasoftThirdPartyFormFreeModelsLiteAccountInfo,
	LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO,
} from '../definitions/LELodasoftThirdPartyFormFreeModelsLiteAccountInfo';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, type, partial, string } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type FormFreeController = {
	/**
	 * Get form free history by filters
	 * @param { object } [parameters]
	 */
	readonly FormFree_GetFormFreeHistory: (parameters: {
		query?: { loanId: Option<number>; leadId: Option<number>; borrowerId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>>;

	/**
	 * Retrieves Account info for VOA transaction id
	 * @param { string } transactionId -
	 */
	readonly FormFree_GetLiteAccountInfo: (
		transactionId: string,
	) => Observable<AsyncData<Error, Array<LELodasoftThirdPartyFormFreeModelsLiteAccountInfo>>>;

	/**
	 * Upgrade the VOA for transaction id
	 * @param { string } transactionId -
	 */
	readonly FormFree_UpgradeVoaRequest: (
		transactionId: string,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>;

	/**
	 * Link history to borrower by Id
	 * @param { number } historyId - id of the form free history record
	 * @param { number } borrowerId - id of the borrower to link to the record
	 */
	readonly FormFree_LinkHistoryToBorrower: (
		historyId: number,
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>>;

	/**
	 * Invite the borrower to complete VOA
	 * @param { number } loanId - id of the loan
	 * @param { number } borrowerId - id of the borrower to invite
	 * @param { object } [parameters]
	 */
	readonly FormFree_InviteBorrower: (
		loanId: number,
		borrowerId: number,
		parameters: { query?: { requestType: Option<string> } },
	) => Observable<AsyncData<Error, unknown>>;
};

export const formFreeController = asks(
	(e: { apiClient: TAPIClient }): FormFreeController => ({
		FormFree_GetFormFreeHistory: parameters => {
			const encoded = partial({
				query: type({
					loanId: createOptionFromNullable(number),
					leadId: createOptionFromNullable(number),
					borrowerId: createOptionFromNullable(number),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/form-free/history`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		FormFree_GetLiteAccountInfo: transactionId => {
			return e.apiClient
				.request({
					url: `/api/form-free/${encodeURIComponent(string.encode(transactionId).toString())}/lite`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		FormFree_UpgradeVoaRequest: transactionId => {
			return e.apiClient
				.request({
					url: `/api/form-free/${encodeURIComponent(string.encode(transactionId).toString())}/upgrade`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		FormFree_LinkHistoryToBorrower: (historyId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/form-free/history/${encodeURIComponent(
						number.encode(historyId).toString(),
					)}/link-to-borrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		FormFree_InviteBorrower: (loanId, borrowerId, parameters) => {
			const encoded = partial({ query: type({ requestType: createOptionFromNullable(string) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/form-free/invite/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
					query: encoded.query,
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
