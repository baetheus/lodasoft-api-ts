import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel,
	LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel';
import {
	LELodasoftThirdPartyFormFreeModelsLiteAccountInfo,
	LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO,
} from '../definitions/LELodasoftThirdPartyFormFreeModelsLiteAccountInfo';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, type, partial, string } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type FormFreeController = {
	/**
	 * Get form free history by filters
	 * @param { object } [parameters]
	 */
	readonly FormFree_GetFormFreeHistory: (parameters: {
		query?: { loanId: Option<number>; leadId: Option<number>; borrowerId: Option<number> };
	}) => Observable<Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>;

	/**
	 * Retrieves Account info for VOA transaction id
	 * @param { string } transactionId -
	 */
	readonly FormFree_GetLiteAccountInfo: (
		transactionId: string,
	) => Observable<Array<LELodasoftThirdPartyFormFreeModelsLiteAccountInfo>>;

	/**
	 * Upgrade the VOA for transaction id
	 * @param { string } transactionId -
	 */
	readonly FormFree_UpgradeVoaRequest: (
		transactionId: string,
	) => Observable<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>;

	/**
	 * Link history to borrower by Id
	 * @param { number } historyId - id of the form free history record
	 * @param { number } borrowerId - id of the borrower to link to the record
	 */
	readonly FormFree_LinkHistoryToBorrower: (
		historyId: number,
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>;

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
	) => Observable<unknown>;
};

export const formFreeController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): FormFreeController => ({
		FormFree_GetFormFreeHistory: parameters => {
			const encoded = partial({
				query: type({
					loanId: createOptionFromNullable(number, 'loanId'),
					leadId: createOptionFromNullable(number, 'leadId'),
					borrowerId: createOptionFromNullable(number, 'borrowerId'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/form-free/history`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)));
		},

		FormFree_GetLiteAccountInfo: transactionId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/form-free/${encodeURIComponent(string.encode(transactionId).toString())}/lite`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO)));
		},

		FormFree_UpgradeVoaRequest: transactionId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/form-free/${encodeURIComponent(string.encode(transactionId).toString())}/upgrade`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO));
		},

		FormFree_LinkHistoryToBorrower: (historyId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/form-free/history/${encodeURIComponent(
					number.encode(historyId).toString(),
				)}/link-to-borrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModelIO)));
		},

		FormFree_InviteBorrower: (loanId, borrowerId, parameters) => {
			const encoded = partial({
				query: type({ requestType: createOptionFromNullable(string, 'requestType') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/form-free/invite/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
