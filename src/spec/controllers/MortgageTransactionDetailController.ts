import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import {
	LELodasoftCommonModelsMortgageTransactionDetailViewModel,
	LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, array } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageTransactionDetailController = {
	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_GetTransactionDetailById: (
		transactionDetailId: number,
	) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;

	/**
	 * @param { number } transactionDetailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTransactionDetail_UpdateTransactionDetail: (
		transactionDetailId: number,
		parameters: { body: LELodasoftCommonModelsMortgageTransactionDetailViewModel },
	) => Observable<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;

	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_DeleteTransactionDetail: (transactionDetailId: number) => Observable<unknown>;

	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: (
		transactionDetailId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;

	/**
	 * @param { number } transactionDetailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTransactionDetail_InsertPurchaseCredit: (
		transactionDetailId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel },
	) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
};

export const mortgageTransactionDetailController = asks(
	(e: { apiClient: TAPIClient }): MortgageTransactionDetailController => ({
		MortgageTransactionDetail_GetTransactionDetailById: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
		},

		MortgageTransactionDetail_UpdateTransactionDetail: (transactionDetailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageTransactionDetailViewModelIO));
		},

		MortgageTransactionDetail_DeleteTransactionDetail: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}/purchasecredits`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO)));
		},

		MortgageTransactionDetail_InsertPurchaseCredit: (transactionDetailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}/purchasecredits`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
		},
	}),
);
